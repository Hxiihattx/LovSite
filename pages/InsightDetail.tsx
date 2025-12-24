
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '../components/UI';
import { INSIGHTS_DATA } from './Insights';

const InsightDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = INSIGHTS_DATA.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  return (
    <div className="pt-32 pb-24">
      <article className="max-w-4xl mx-auto px-6">
        <header className="mb-12">
          <Link to="/insights" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors inline-flex items-center mb-12">
            <span className="mr-2">←</span> Back to Insights
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-gray-100 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-black">
              {article.category}
            </span>
            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Published March 2025</span>
          </div>

          <h1 className="tracking-tightest leading-tightest mb-8">
            {article.title}
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-500 leading-relaxed font-medium max-w-2xl">
            {article.text}
          </p>
        </header>

        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-16 shadow-2xl">
          <img 
            src={article.img} 
            alt={article.title} 
            className="w-full h-full object-cover grayscale"
            loading="lazy"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-8">
          <p>
            In today's rapidly evolving digital landscape, the Austrian market presents unique challenges and opportunities. 
            Viennese businesses are increasingly looking beyond mere online presence, seeking digital products that reflect 
            their brand's heritage while embracing cutting-edge performance standards.
          </p>
          
          <h2 className="text-xl md:text-2xl font-bold text-black mt-12 mb-4 tracking-tight">The Strategic Approach</h2>
          <p>
            When we talk about {article.title}, we must consider the local context. 
            Austria's digital ecosystem is characterized by high standards for quality and a strict adherence to regulatory frameworks 
            like the DSGVO. This requires a balanced approach where aesthetic brilliance never comes at the expense of functional integrity.
          </p>

          <blockquote className="border-l-4 border-black pl-8 py-4 my-12 italic text-xl md:text-2xl text-black font-serif">
            "True digital excellence is born at the intersection of local culture and global standards. In Vienna, that means precision."
          </blockquote>

          <h3 className="text-lg md:text-xl font-bold text-black mt-8 mb-2">Key Takeaways for 2025</h3>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>User-Centric Performance:</strong> Users expect sub-second load times.</li>
            <li><strong>Legal Security:</strong> DSGVO compliance is a primary trust signal.</li>
            <li><strong>Emotional Connection:</strong> Bespoke visuals create an immediate premium feel.</li>
          </ul>
        </div>

        <footer className="mt-24 pt-12 border-t border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden grayscale border border-gray-100">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=40&w=100&h=100" alt="Ihtasham Manzoor" />
              </div>
              <div>
                <span className="block font-bold text-black text-sm">Ihtasham Manzoor</span>
                <span className="block text-xs uppercase tracking-widest text-gray-500 font-bold mt-1">Agency Director</span>
              </div>
            </div>
            <div className="flex gap-4">
              <Button to="/contact" variant="primary">Discuss this insight</Button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default InsightDetail;
