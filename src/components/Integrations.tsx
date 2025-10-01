import React from 'react';

const BlogSection: React.FC = () => {
  const posts = [
    {
      title: "Market Research Excellence Across Africa",
      url: "#",
      videoSrc: "/assets/video/market-research.mp4",
      poster: "/assets/img/video-poster-1.jpg"
    },
    {
      title: "Data Collection & Quality Control",
      url: "#",
      videoSrc: "/assets/video/data-collection.mp4",
      poster: "/assets/img/video-poster-2.jpg"
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
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster={post.poster}
                >
                  <source src={post.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <a
                href={post.url}
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
