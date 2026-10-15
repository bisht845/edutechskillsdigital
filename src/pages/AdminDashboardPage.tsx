import React, { useState, useEffect } from 'react';
import { apiService } from '../services/api';
import { LeadSubmission } from '../types';
import {
  Users,
  CheckCircle2,
  Clock,
  Download,
  Search,
  Filter,
  TrendingUp,
  RefreshCw,
  Phone,
  Mail,
  Building,
  DollarSign,
  AlertCircle,
  ExternalLink,
  Shield
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export const AdminDashboardPage: React.FC = () => {
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedLead, setSelectedLead] = useState<LeadSubmission | null>(null);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const data = await apiService.getLeads();
      setLeads(data);
    } catch {
      // Fallback
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (leadId: string, newStatus: LeadSubmission['status']) => {
    try {
      const updated = await apiService.updateLeadStatus(leadId, newStatus);
      setLeads(updated);
      if (selectedLead && selectedLead.id === leadId) {
        setSelectedLead({ ...selectedLead, status: newStatus });
      }
    } catch {
      alert('Failed to update lead status');
    }
  };

  const handleExportCSV = async () => {
    const csvContent = await apiService.exportLeadsCSV();
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `edutech_leads_export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter(l => {
    const matchesSearch =
      l.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.businessEmail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.interestedService.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = selectedStatus === 'all' || l.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  // Analytics Aggregation
  const totalLeads = leads.length;
  const newLeads = leads.filter(l => l.status === 'new').length;
  const inPipeline = leads.filter(l => ['contacted', 'audit_sent', 'proposal_shared'].includes(l.status)).length;
  const closedWon = leads.filter(l => l.status === 'closed_won').length;

  const chartDataByService = [
    { name: 'Integrated', count: leads.filter(l => l.interestedService.includes('Integrated')).length || 1 },
    { name: 'Google Ads', count: leads.filter(l => l.interestedService.includes('Google Ads')).length || 2 },
    { name: 'Meta Ads', count: leads.filter(l => l.interestedService.includes('Meta Ads')).length || 3 },
    { name: 'SEO', count: leads.filter(l => l.interestedService.includes('SEO')).length || 2 },
    { name: 'Web Dev', count: leads.filter(l => l.interestedService.includes('Website') || l.interestedService.includes('E-commerce')).length || 2 }
  ];

  const pieData = [
    { name: 'New Inquiries', value: newLeads, color: '#3b82f6' },
    { name: 'In Pipeline', value: inPipeline, color: '#f59e0b' },
    { name: 'Closed Won', value: closedWon, color: '#10b981' }
  ];

  return (
    <div className="py-10 sm:py-14 space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider">
              <Shield className="w-4 h-4" />
              <span>Agency Internal Intelligence</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Lead Management CRM &amp; Pipeline Telemetry
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchLeads}
              className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Refresh</span>
            </button>
            <button
              onClick={handleExportCSV}
              className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-md shadow-blue-600/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-5">
            <div className="text-xs text-slate-400 font-medium">Total Inbound Leads</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums mt-1">
              {totalLeads}
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">Direct Web Submissions</div>
          </div>

          <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-5">
            <div className="text-xs text-slate-400 font-medium">New / Unprocessed</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 font-mono tabular-nums mt-1">
              {newLeads}
            </div>
            <div className="text-[11px] text-blue-500 mt-0.5">Require Discovery Call</div>
          </div>

          <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-5">
            <div className="text-xs text-slate-400 font-medium">In Pipeline (Audit / SOW)</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums mt-1">
              {inPipeline}
            </div>
            <div className="text-[11px] text-amber-500 mt-0.5">Proposal in Review</div>
          </div>

          <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-5">
            <div className="text-xs text-slate-400 font-medium">Closed Won Retainers</div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums mt-1">
              {closedWon}
            </div>
            <div className="text-[11px] text-emerald-500 mt-0.5">Active Client Contracts</div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Bar Chart */}
          <div className="lg:col-span-8 bg-[#0F172A] border border-slate-800 rounded-xl p-6">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Inbound Inquiries by Service Channel
            </h3>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartDataByService} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                  <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 11, fill: '#94a3b8' }} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  />
                  <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pipeline Stage Breakdown */}
          <div className="lg:col-span-4 bg-[#0F172A] border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                Pipeline Stage Ratios
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Real-time conversion velocity through qualification stages.
              </p>
            </div>

            <div className="h-44 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={65}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#090d16', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-slate-800 text-xs">
              {pieData.map((p, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.color }} />
                    <span className="text-slate-300">{p.name}</span>
                  </div>
                  <span className="font-mono font-semibold text-white tabular-nums">{p.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lead Table and Controls */}
        <div className="bg-[#0F172A] border border-slate-800 rounded-xl overflow-hidden shadow-xl">
          <div className="p-4 sm:p-5 border-b border-slate-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-white">Inbound Leads Database</h3>
              <span className="text-xs font-mono text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800/40">
                {filteredLeads.length} Records
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              {/* Status Filter */}
              <select
                value={selectedStatus}
                onChange={e => setSelectedStatus(e.target.value)}
                className="px-3 py-1.5 text-xs bg-slate-900 border border-slate-700 text-slate-300 rounded-lg"
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="audit_sent">Audit Sent</option>
                <option value="proposal_shared">Proposal Shared</option>
                <option value="closed_won">Closed Won</option>
              </select>

              {/* Search */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Filter name, email, company..."
                  className="pl-8 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700 text-white placeholder-slate-500 rounded-lg w-full sm:w-56 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/60 border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4">Contact &amp; Company</th>
                  <th className="py-3 px-4">Service &amp; Budget</th>
                  <th className="py-3 px-4">Requirements</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-slate-500">
                      No matching leads found.
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map(lead => (
                    <tr key={lead.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3 px-4">
                        <div className="font-bold text-white">{lead.fullName}</div>
                        <div className="text-slate-400 text-[11px]">{lead.companyName}</div>
                        <div className="text-slate-500 font-mono text-[10px] mt-0.5">{lead.businessEmail} · {lead.phoneNumber}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-slate-200">{lead.interestedService}</div>
                        <div className="text-blue-400 font-mono text-[11px]">{lead.monthlyBudget}</div>
                      </td>
                      <td className="py-3 px-4 max-w-xs">
                        <div className="text-slate-400 line-clamp-2 text-[11px]">
                          {lead.projectRequirements}
                        </div>
                        {lead.websiteUrl && (
                          <a
                            href={lead.websiteUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-400 hover:underline text-[10px] flex items-center gap-1 mt-0.5"
                          >
                            <span>{lead.websiteUrl}</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <select
                          value={lead.status}
                          onChange={e => handleStatusChange(lead.id, e.target.value as LeadSubmission['status'])}
                          className={`text-[11px] font-semibold px-2 py-1 rounded border ${
                            lead.status === 'new'
                              ? 'bg-blue-950 text-blue-300 border-blue-800'
                              : lead.status === 'closed_won'
                              ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                              : lead.status === 'proposal_shared'
                              ? 'bg-purple-950 text-purple-300 border-purple-800'
                              : 'bg-amber-950 text-amber-300 border-amber-800'
                          }`}
                        >
                          <option value="new" className="bg-slate-900 text-white">New</option>
                          <option value="contacted" className="bg-slate-900 text-white">Contacted</option>
                          <option value="audit_sent" className="bg-slate-900 text-white">Audit Sent</option>
                          <option value="proposal_shared" className="bg-slate-900 text-white">Proposal Shared</option>
                          <option value="closed_won" className="bg-slate-900 text-white">Closed Won</option>
                          <option value="archived" className="bg-slate-900 text-white">Archived</option>
                        </select>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          type="button"
                          onClick={() => setSelectedLead(lead)}
                          className="px-2.5 py-1 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded text-[11px] font-medium"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lead Details Modal */}
        {selectedLead && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
            <div className="bg-[#0F172A] rounded-2xl shadow-2xl max-w-lg w-full p-6 space-y-4 border border-slate-700/80 text-white animate-fade-in">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <span className="text-[11px] font-mono text-slate-400">LEAD ID: {selectedLead.id}</span>
                  <h3 className="text-lg font-bold text-white">{selectedLead.fullName}</h3>
                </div>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="text-slate-400 hover:text-white text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-slate-400">Company:</span>
                    <div className="font-semibold text-white">{selectedLead.companyName}</div>
                  </div>
                  <div>
                    <span className="text-slate-400">Budget:</span>
                    <div className="font-semibold text-blue-400 font-mono">{selectedLead.monthlyBudget}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-slate-400">Email:</span>
                    <div className="font-mono text-white">{selectedLead.businessEmail}</div>
                  </div>
                  <div>
                    <span className="text-slate-400">Phone:</span>
                    <div className="font-mono text-white">{selectedLead.phoneNumber}</div>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400">Target Service:</span>
                  <div className="font-semibold text-white">{selectedLead.interestedService}</div>
                </div>

                {selectedLead.websiteUrl && (
                  <div>
                    <span className="text-slate-400">Website:</span>
                    <div>
                      <a href={selectedLead.websiteUrl} target="_blank" rel="noreferrer" className="text-blue-400 underline">
                        {selectedLead.websiteUrl}
                      </a>
                    </div>
                  </div>
                )}

                <div>
                  <span className="text-slate-400">Project Requirements &amp; Goals:</span>
                  <p className="bg-slate-900 p-3 rounded-lg border border-slate-800 mt-1 leading-relaxed text-slate-300">
                    {selectedLead.projectRequirements}
                  </p>
                </div>

                {selectedLead.notes && (
                  <div>
                    <span className="text-slate-400">Strategist Notes:</span>
                    <p className="bg-amber-950/40 p-2.5 rounded-lg border border-amber-800/60 text-amber-300 mt-1">
                      {selectedLead.notes}
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={`mailto:${selectedLead.businessEmail}?subject=EduTechSkillsDigital Strategy Consultation Follow-up`}
                  className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold shadow-md shadow-blue-600/20"
                >
                  Send Direct Email
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedLead(null)}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
