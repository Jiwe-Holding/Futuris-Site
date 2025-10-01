import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import HeroCarousel from '../components/HeroCarousel';
import { ArrowRight, Calendar, User, Search } from 'lucide-react';

const Blog: React.FC = () => {
  const heroImages = [
    "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=2400",
    "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=2400",
    "https://images.pexels.com/photos/7688465/pexels-photo-7688465.jpeg?auto=compress&cs=tinysrgb&w=2400",
    "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=2400"
  ];

  const videoPosts = [
    {
      id: 1,
      title: "Market Research Excellence in Africa",
      excerpt: "Discover how FUTURIS delivers best-in-class data quality and actionable insights across 29 African markets.",
      author: "FUTURIS",
      date: "2024-09-15",
      category: "Industry Standards",
      videoSrc: "/assets/video/ESOMAR.mp4",
      readTime: "02 min watch",
      type: "video"
    },
    {
      id: 2,
      title: "Data Collection Methods for Market Analysis",
      excerpt: "Master the latest data collection techniques and methodologies used in modern market research and trading strategies.",
      author: "FUTURIS",
      date: "2024-09-10",
      category: "Methodology",
      videoSrc: "/assets/video/Learn_data_methods.mp4",
      readTime: "02 min watch",
      type: "video"
    },
  ];

  const categories = ["All", "Industry Standards", "Methodology", "Market Research"];

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

      {/* Optimized Filters */}
      <section className="py-4 bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher des vidéos..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex-1 overflow-x-auto pb-1">
              <div className="flex space-x-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                      category === "All"
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
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
                <video
                  className="w-full h-64 lg:h-full object-cover"
                  controls
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster="/assets/img/video-poster-1.jpg"
                >
                  <source src={videoPosts[0].videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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
                  <video
                    className="w-full h-64 object-cover"
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={`/assets/img/video-poster-${post.id}.jpg`}
                  >
                    <source src={post.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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
