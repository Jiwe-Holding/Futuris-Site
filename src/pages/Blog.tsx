import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Calendar, User, Search } from 'lucide-react';

const Blog: React.FC = () => {
  const videoPosts = [
    {
      id: 1,
      title: "ESOMAR and the Insights Community",
      excerpt: "Exploring the role of ESOMAR in shaping the global insights community and market research standards.",
      author: "ESOMAR",
      date: "2024-01-15",
      category: "Industry Standards",
      videoId: "cTRp1-505QY",
      readTime: "15 min watch",
      type: "video"
    },
    {
      id: 2,
      title: "Augmented Intelligence in Market Research",
      excerpt: "How artificial intelligence is transforming market research methodologies and data analysis.",
      author: "FUTURIS",
      date: "2024-01-10",
      category: "Technology",
      videoId: "bW0dqRNK2T4",
      readTime: "12 min watch",
      type: "video"
    }
  ];

  const categories = ["All", "Market Research", "Consumer Insights", "Digital Trends", "Methodology", "Technology", "Industry Standards"];

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      {/* Mini Hero */}
      <section className="pt-32 pb-32 bg-slate-900 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg')",
            opacity: 0.2
          }}
        />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Insights, trends, and expert perspectives on market research across African markets.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-slate-800 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    category === "All" 
                      ? "bg-blue-600 text-white" 
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16 bg-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${videoPosts[0].videoId}`}
                  title={videoPosts[0].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-64 lg:h-full"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured Video
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    {videoPosts[0].category}
                  </span>
                  <span className="text-gray-400 text-sm">{videoPosts[0].readTime}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {videoPosts[0].title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {videoPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{videoPosts[0].author}</div>
                      <div className="text-gray-400 text-xs">{videoPosts[0].date}</div>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Latest Videos</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Watch our latest insights and expert discussions on market research across Africa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group">
                <div className="relative">
                  <iframe
                    width="100%"
                    height="300"
                    src={`https://www.youtube.com/embed/${post.videoId}`}
                    title={post.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white px-2 py-1 rounded text-xs font-medium">
                      Video
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                    <button className="text-red-400 hover:text-red-300 font-medium flex items-center gap-1">
                      Watch Now
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Subscribe to our newsletter and never miss the latest market research insights and trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
