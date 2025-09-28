import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      title: "Where Is Your Money Going? The Hidden Cost of Employee Theft",
      excerpt: "As a business owner, you work hard to keep your company profitable. You carefully manage expenses, invest in growth, and expect your employees to contribute to your success. However, employee theft can silently drain your resources.",
      date: "2024-03-17",
      author: "Miguel Suarez",
      category: "Employment",
      slug: "hidden-cost-employee-theft"
    },
    {
      title: "Uncovering the Truth: How Child Custody Investigations Can Strengthen Your Case",
      excerpt: "Why Child Custody Investigations Matter in Florida. Child custody battles can be emotionally draining and legally complex, especially when the safety and well-being of your child are at stake.",
      date: "2024-03-10",
      author: "Miguel Suarez",
      category: "Family Law",
      slug: "child-custody-investigations-strengthen-case"
    },
    {
      title: "Uncovering the Real Story: Investigating Infidelity and Unraveling the Truth",
      excerpt: "Infidelity can turn your life upside down in an instant. The betrayal of trust leaves behind unanswered questions and deep emotional wounds that can be difficult to heal without knowing the complete truth.",
      date: "2024-03-04",
      author: "Miguel Suarez",
      category: "Family Law",
      slug: "investigating-infidelity-unraveling-truth"
    },
    {
      title: "Understanding Background Checks: What Employers Need to Know",
      excerpt: "A comprehensive guide to employment background checks, legal requirements, and best practices for hiring managers in today&apos;s competitive business environment.",
      date: "2024-01-15",
      author: "Prestige Investigations Team",
      category: "Employment",
      slug: "understanding-background-checks-employers"
    }
  ];

  const categories = ["All", "Employment", "Corporate", "Family Law", "Cybersecurity", "Insurance", "Asset Protection"];

  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-prestige-black text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-prestige-gold">Insights & Resources</h1>
              <p className="text-xl text-brand-light">
                Expert insights, industry updates, and educational resources from our investigative professionals
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-prestige-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "All" 
                      ? "bg-prestige-gold text-prestige-black" 
                      : "bg-white/10 text-white hover:bg-prestige-gold hover:text-prestige-black"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 bg-prestige-black">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <article key={index} className="bg-white/5 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-white/10">
                    <div className="h-48 bg-gradient-to-br from-prestige-black to-prestige-gray flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-lg font-semibold mb-2">{post.category}</h3>
                        <div className="w-16 h-1 bg-prestige-gold mx-auto"></div>
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
                      <h2 className="text-xl font-bold mb-3 text-white line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-brand-light mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-brand-light">
                          <User className="w-4 h-4 mr-2" />
                          <span>{post.author}</span>
                        </div>
                        <button className="text-prestige-gold hover:text-white font-medium flex items-center transition-colors">
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
        <section className="py-16 bg-prestige-black text-white border-t border-prestige-gold">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-prestige-gold">Stay Informed</h2>
            <p className="text-xl mb-8 text-brand-light max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest insights, industry updates, and investigative tips.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-prestige-black focus:outline-none focus:ring-2 focus:ring-prestige-gold"
              />
              <button className="bg-prestige-gold text-prestige-black px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-brand-light mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="py-12 bg-prestige-black">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-white">More Content Coming Soon</h3>
              <p className="text-brand-light mb-6">
                We&apos;re working on bringing you more valuable insights and resources. 
                Check back regularly for new articles and updates from our investigative experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="btn-primary">
                  Contact Us for Consultation
                </a>
                <a href="/services" className="bg-white/10 text-white border-2 border-prestige-gold hover:bg-prestige-gold hover:text-prestige-black px-6 py-3 rounded-lg font-semibold transition-all duration-200">
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
