import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { CheckCircle2, ArrowRight, Share2 } from 'lucide-react';
import { LeadForm } from '../components/ui/LeadForm';

interface BlogPostPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogData.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogData.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="py-10 sm:py-16 space-y-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link to="/" className="hover:text-white">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/blog" className="hover:text-white">Blog</Link>
          <span aria-hidden="true">/</span>
          <span className="text-white font-medium truncate max-w-xs">{post.title}</span>
        </div>

        {/* Article Header */}
        <header className="space-y-4 pb-8 border-b border-slate-800">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="font-semibold text-blue-400 uppercase tracking-wider">{post.category}</span>
            <span aria-hidden="true">·</span>
            <span>{post.publicationDate}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base text-slate-300 leading-relaxed font-medium">
            {post.excerpt}
          </p>

          <div className="pt-2 text-xs text-slate-400 flex items-center justify-between">
            <span>By EduTechSkillsDigital Strategy Research Group</span>
            <button
              onClick={() => {
                if (navigator.clipboard) {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }
              }}
              className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-semibold"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Article</span>
            </button>
          </div>
        </header>

        {/* Key Takeaways Box */}
        <div className="my-8 bg-blue-950/30 border border-blue-800/60 rounded-2xl p-6 space-y-3">
          <h3 className="text-xs font-bold text-blue-400 uppercase tracking-wider">
            Executive Summary &amp; Key Takeaways
          </h3>
          <ul className="space-y-2">
            {post.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="font-medium">{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Body Content */}
        <div className="prose prose-invert max-w-none space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed py-4 border-b border-slate-800">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Strategy Consultation Box */}
        <div className="my-12 bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900 border border-slate-800 text-white rounded-2xl p-8 sm:p-10 space-y-6">
          <div className="max-w-xl">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              Apply This to Your Company
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Need a Custom Growth Roadmap for Your Market?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Our Senior Growth Directors specialize in translating these principles into tailored acquisition funnels and technical campaigns.
            </p>
          </div>

          <div className="bg-[#0F172A] border border-slate-700/80 rounded-2xl p-6">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              Request Your Strategy Consultation
            </h4>
            <LeadForm defaultService="Integrated Digital Marketing Strategy" sourceContext={`Blog Post: ${post.title}`} />
          </div>
        </div>

        {/* Related Articles */}
        <div className="pt-8 space-y-6">
          <h3 className="text-lg font-bold text-white">
            More Strategic Guides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map(rel => (
              <div key={rel.id} className="bg-[#0F172A] border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-blue-400 font-semibold mb-1">{rel.category}</div>
                  <h4 className="text-xs font-bold text-white mb-2 line-clamp-2">
                    <Link to={`/blog/${rel.slug}`} className="hover:text-blue-400">
                      {rel.title}
                    </Link>
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mb-4">{rel.excerpt}</p>
                </div>
                <Link
                  to={`/blog/${rel.slug}`}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
