import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import HeroCarousel from '../components/HeroCarousel';
import { ArrowRight, Calendar, User, Search } from 'lucide-react';

const Blog: React.FC = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
  ];

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
    <div className="min-h-screen bg-white">
      <Header />
      
      <HeroCarousel
        images={heroImages}
        badge="Insights & Resources"
        title="Market Research"
        titleHighlight="Insights & Trends"
        description="Insights, trends, and expert perspectives on market research across African markets."
      />

      {/* Corporate Search and Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    category === "All" 
                      ? "bg-blue-600 text-white" 
                      : "bg-white text-gray-700 border border-gray-300 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video - Editorial Card */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="relative bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
            <div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
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
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured Video
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {videoPosts[0].category}
                  </span>
                  <span className="text-gray-500 text-sm">{videoPosts[0].readTime}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                  {videoPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {videoPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-black font-medium text-sm">{videoPosts[0].author}</div>
                      <div className="text-gray-500 text-xs">{videoPosts[0].date}</div>
                    </div>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Watch Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid - Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Latest Videos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch our latest insights and expert discussions on market research across Africa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoPosts.slice(1).map((post) => (
              <article key={post.id} className="relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
                <div className="absolute inset-x-0 -top-px h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
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
                    <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                      Video
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
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

      {/* Corporate Newsletter */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Subscribe to our newsletter and never miss the latest market research insights and trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Blog;
