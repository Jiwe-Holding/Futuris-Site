import React from 'react';

const BlogSection: React.FC = () => {
  const posts = [
    {
      title: "ESOMAR and the Insights Community",
      url: "https://esomar.org/",
      media: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cTRp1-505QY"
          title="ESOMAR and the Insights Community"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )
    },
    {
      title: "Augmented Intelligence",
      url: "#",
      media: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/bW0dqRNK2T4"
          title="Augmented Intelligence"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )
    },
  ];

  return (
    <section id="blog" className="py-24 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 font-[Montserrat]">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            READ FROM OUR <span className="text-blue-400">BLOG, RESEARCH BODY & PARTNERS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We support international standards bodies & partner with high‑skill providers to become a highly effective, lean and fast‑moving organization—always hungry for new knowledge.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post, idx) => (
            <div key={idx} className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                {post.media}
              </div>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-lg font-medium text-blue-400 hover:underline"
              >
                {post.title}
                <span className="ml-2 text-2xl leading-none">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
