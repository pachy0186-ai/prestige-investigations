import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      title: "Understanding Background Checks: What Employers Need to Know",
      excerpt: "A comprehensive guide to employment background checks, legal requirements, and best practices for hiring managers.",
      date: "2024-01-15",
      author: "Prestige Investigations Team",
      category: "Employment",
      slug: "understanding-background-checks-employers"
    },
    {
      title: "The Importance of Due Diligence in Corporate Investigations",
      excerpt: "Learn how proper due diligence can protect your business from fraud, embezzlement, and other corporate risks.",
      date: "2024-01-10",
      author: "Prestige Investigations Team",
      category: "Corporate",
      slug: "importance-due-diligence-corporate-investigations"
    },
    {
      title: "Child Custody Investigations: Protecting Your Child's Best Interests",
      excerpt: "Understanding how private investigators can help gather evidence for child custody cases while maintaining sensitivity.",
      date: "2024-01-05",
      author: "Prestige Investigations Team",
      category: "Family Law",
      slug: "child-custody-investigations-best-interests"
    },
    {
      title: "Cybersecurity Threats: How Private Investigators Can Help",
      excerpt: "Exploring the role of private investigators in cybersecurity, digital forensics, and protecting your digital assets.",
      date: "2023-12-28",
      author: "Prestige Investigations Team",
      category: "Cybersecurity",
      slug: "cybersecurity-threats-private-investigators"
    },
    {
      title: "Insurance Fraud Detection: Signs and Investigation Techniques",
      excerpt: "Common types of insurance fraud and how professional investigators can help insurance companies detect fraudulent claims.",
      date: "2023-12-20",
      author: "Prestige Investigations Team",
      category: "Insurance",
      slug: "insurance-fraud-detection-techniques"
    },
    {
      title: "Asset Protection Strategies for High-Net-Worth Individuals",
      excerpt: "Comprehensive strategies to protect valuable assets from theft, damage, and legal threats.",
      date: "2023-12-15",
      author: "Prestige Investigations Team",
      category: "Asset Protection",
      slug: "asset-protection-strategies-high-net-worth"
    }
  ];

  const categories = ["All", "Employment", "Corporate", "Family Law", "Cybersecurity", "Insurance", "Asset Protection"];

  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0b2a6f] to-[#1e40af] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">Insights & Resources</h1>
              <p className="text-xl text-blue-200">
                Expert insights, industry updates, and educational resources from our investigative professionals
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "All" 
                      ? "bg-[#0b2a6f] text-white" 
                      : "bg-white text-[#0b2a6f] hover:bg-[#0b2a6f] hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 bg-gradient-to-br from-[#0b2a6f] to-[#1e40af] flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-lg font-semibold mb-2">{post.category}</h3>
                        <div className="w-16 h-1 bg-[#facc15] mx-auto"></div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <h2 className="text-xl font-bold mb-3 text-[#0b2a6f] line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-2" />
                          <span>{post.author}</span>
                        </div>
                        <button className="text-[#0b2a6f] hover:text-[#facc15] font-medium flex items-center transition-colors">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-[#0b2a6f] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Stay Informed</h2>
            <p className="text-xl mb-8 text-blue-200 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, industry updates, and investigative tips.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#facc15]"
              />
              <button className="btn-secondary px-6 py-3">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-[#0b2a6f]">More Content Coming Soon</h3>
              <p className="text-gray-700 mb-6">
                We're working on bringing you more valuable insights and resources. 
                Check back regularly for new articles and updates from our investigative experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary">
                  Contact Us for Consultation
                </a>
                <a href="/services" className="bg-white text-[#0b2a6f] border-2 border-[#0b2a6f] hover:bg-[#0b2a6f] hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200">
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
