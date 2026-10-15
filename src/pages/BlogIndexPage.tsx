import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { Search, ArrowRight } from 'lucide-react';

export const BlogIndexPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Lead Generation',
    'Search Strategy',
    'Conversion Optimization',
    'Local SEO',
    'Paid Social',
    'Web Development',
    'Industry Strategy',
    'Marketing Automation'
  ];

  const filteredPosts = blogData.filter(post => {
    const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesQuery =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Executive Intelligence
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Digital Marketing &amp; Business Growth Strategy Guides
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Data-backed analyses, conversion rate optimization teardowns, and actionable frameworks to help business owners make informed growth decisions.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-800 text-white placeholder-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
          {filteredPosts.map(post => (
            <article
              key={post.id}
              className="bg-[#0F172A]/90 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <span className="font-semibold text-blue-400">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.publicationDate}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-lg font-bold text-white mb-2 leading-snug">
                  <Link to={`/blog/${post.slug}`} className="hover:text-blue-400 transition-colors">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 mb-6">
                  <div className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Key Insight:
                  </div>
                  <div className="text-xs text-slate-300 font-medium line-clamp-2">
                    {post.keyTakeaways[0]}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-[11px] text-slate-500 font-mono">Strategy Brief</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
