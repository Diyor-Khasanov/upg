import React, { useState, useEffect } from "react";
import "./styles.scss";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [stats, setStats] = useState([
    { value: "10,000+", label: "Active Users" },
    { value: "500+", label: "Business Partners" },
    { value: "24/7", label: "Customer Support" },
    { value: "99.9%", label: "Uptime Guarantee" },
  ]);

  useEffect(() => {
    // Check user's preferred color scheme
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDark);

    // Animation for stats counters
    const interval = setInterval(() => {
      setStats((prevStats) => {
        const randomStat = Math.floor(Math.random() * prevStats.length);
        const randomIncrement = Math.floor(Math.random() * 10) + 1;

        return prevStats.map((stat, index) => {
          if (
            index === randomStat &&
            !isNaN(parseInt(stat.value.replace(/,/g, "")))
          ) {
            const currentValue = parseInt(stat.value.replace(/,/g, ""));
            return {
              ...stat,
              value: (currentValue + randomIncrement).toLocaleString(),
            };
          }
          return stat;
        });
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`app ${darkMode ? "dark-theme" : "light-theme"}`}>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-icon">UPG</span>
            <span className="logo-text">.UZ</span>
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <nav className={`nav ${mobileMenuOpen ? "open" : ""}`}>
            <ul>
              <li
                className={activeTab === "home" ? "active" : ""}
                onClick={() => setActiveTab("home")}
              >
                Home
              </li>
              <li
                className={activeTab === "services" ? "active" : ""}
                onClick={() => setActiveTab("services")}
              >
                Services
              </li>
              <li
                className={activeTab === "pricing" ? "active" : ""}
                onClick={() => setActiveTab("pricing")}
              >
                Pricing
              </li>
              <li
                className={activeTab === "about" ? "active" : ""}
                onClick={() => setActiveTab("about")}
              >
                About
              </li>
              <li
                className={activeTab === "contact" ? "active" : ""}
                onClick={() => setActiveTab("contact")}
              >
                Contact
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <button className="theme-toggle" onClick={toggleTheme}>
              {darkMode ? "☀️" : "🌙"}
            </button>
            <button className="btn primary">Sign In</button>
            <button className="btn secondary">Register</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Premium Hosting for Uzbekistan</h1>
            <p className="subtitle">
              Blazing fast servers with 99.9% uptime guarantee and 24/7 customer
              support
            </p>

            <div className="search-domain">
              <input type="text" placeholder="Search for a domain..." />
              <button className="btn primary">Search</button>
            </div>

            <div className="domain-extensions">
              <span>.uz $9.99</span>
              <span>.com $12.99</span>
              <span>.net $11.99</span>
              <span>.org $10.99</span>
            </div>
          </div>

          <div className="hero-image">
            <div className="server-animation">
              <div className="server"></div>
              <div className="dots">
                {[...Array(9)].map((_, i) => (
                  <div
                    key={i}
                    className="dot"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose UPG.UZ?</h2>
          <p className="section-subtitle">
            We provide the best hosting solutions for your business needs
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>
                Our servers are optimized for speed with SSD storage and
                LiteSpeed technology.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure Hosting</h3>
              <p>
                Free SSL certificates, DDoS protection, and daily backups
                included.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Uzbekistan Based</h3>
              <p>
                Local servers mean faster loading times for your Uzbek audience.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📞</div>
              <h3>24/7 Support</h3>
              <p>
                Our team is always ready to help you in Uzbek, Russian, and
                English.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <div className="container">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            No hidden fees. Switch plans anytime.
          </p>

          <div className="pricing-tabs">
            <button
              className={`pricing-tab ${
                activeTab === "monthly" ? "active" : ""
              }`}
              onClick={() => setActiveTab("monthly")}
            >
              Monthly
            </button>
            <button
              className={`pricing-tab ${
                activeTab === "yearly" ? "active" : ""
              }`}
              onClick={() => setActiveTab("yearly")}
            >
              Yearly (Save 20%)
            </button>
          </div>

          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">
                <span className="amount">
                  {activeTab === "monthly" ? "$4.99" : "$47.99"}
                </span>
                <span className="period">
                  /{activeTab === "monthly" ? "mo" : "yr"}
                </span>
              </div>
              <ul className="features-list">
                <li>1 Website</li>
                <li>10GB SSD Storage</li>
                <li>Unmetered Bandwidth</li>
                <li>Free SSL Certificate</li>
                <li>24/7 Support</li>
              </ul>
              <button className="btn outline">Get Started</button>
            </div>

            <div className="pricing-card popular">
              <div className="popular-badge">Most Popular</div>
              <h3>Business</h3>
              <div className="price">
                <span className="amount">
                  {activeTab === "monthly" ? "$9.99" : "$95.99"}
                </span>
                <span className="period">
                  /{activeTab === "monthly" ? "mo" : "yr"}
                </span>
              </div>
              <ul className="features-list">
                <li>Unlimited Websites</li>
                <li>50GB SSD Storage</li>
                <li>Unmetered Bandwidth</li>
                <li>Free SSL Certificate</li>
                <li>Free Domain for 1 Year</li>
                <li>24/7 Priority Support</li>
              </ul>
              <button className="btn primary">Get Started</button>
            </div>

            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">
                <span className="amount">
                  {activeTab === "monthly" ? "$19.99" : "$191.99"}
                </span>
                <span className="period">
                  /{activeTab === "monthly" ? "mo" : "yr"}
                </span>
              </div>
              <ul className="features-list">
                <li>Unlimited Websites</li>
                <li>200GB SSD Storage</li>
                <li>Unmetered Bandwidth</li>
                <li>Free SSL Certificate</li>
                <li>Free Domain for Life</li>
                <li>DDoS Protection</li>
                <li>Dedicated Resources</li>
                <li>24/7 VIP Support</li>
              </ul>
              <button className="btn outline">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Trusted by businesses across Uzbekistan
          </p>

          <div className="testimonial-slider">
            <div className="testimonial-card">
              <div className="testimonial-content">
                "UPG.UZ has been a game-changer for our e-commerce business. The
                local servers make our site load incredibly fast for our
                customers."
              </div>
              <div className="testimonial-author">
                <div className="avatar">A</div>
                <div className="author-info">
                  <h4>Azizbek Karimov</h4>
                  <p>CEO, UzbekShop.uz</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                "The customer support is outstanding. They helped me migrate my
                website and answered all my questions in Uzbek, which I really
                appreciate."
              </div>
              <div className="testimonial-author">
                <div className="avatar">N</div>
                <div className="author-info">
                  <h4>Nilufar Usmanova</h4>
                  <p>Founder, TashkentBlog.uz</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                "After trying several hosting providers, UPG.UZ is by far the
                most reliable with the best performance for Uzbekistan-based
                visitors."
              </div>
              <div className="testimonial-author">
                <div className="avatar">S</div>
                <div className="author-info">
                  <h4>Sanjar Ismoilov</h4>
                  <p>CTO, TechSolutions.uz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to launch your website?</h2>
          <p>
            Get started today with our risk-free 30-day money back guarantee.
          </p>
          <button className="btn primary large">Get Started Now</button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h3>Stay Updated</h3>
            <p>
              Subscribe to our newsletter for hosting tips, special offers, and
              updates.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn primary">
              {subscribed ? "Thank You!" : "Subscribe"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="logo">
                <span className="logo-icon">UPG</span>
                <span className="logo-text">.UZ</span>
              </div>
              <p className="footer-about">
                Uzbekistan's premier hosting provider with locally hosted
                servers for optimal performance.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Telegram">
                  📢
                </a>
                <a href="#" aria-label="Facebook">
                  📘
                </a>
                <a href="#" aria-label="Instagram">
                  📷
                </a>
                <a href="#" aria-label="YouTube">
                  ▶️
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Hosting</h4>
              <ul>
                <li>
                  <a href="#">Shared Hosting</a>
                </li>
                <li>
                  <a href="#">VPS Hosting</a>
                </li>
                <li>
                  <a href="#">Dedicated Servers</a>
                </li>
                <li>
                  <a href="#">WordPress Hosting</a>
                </li>
                <li>
                  <a href="#">Email Hosting</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Support</h4>
              <ul>
                <li>
                  <a href="#">Knowledge Base</a>
                </li>
                <li>
                  <a href="#">Tutorials</a>
                </li>
                <li>
                  <a href="#">Live Chat</a>
                </li>
                <li>
                  <a href="#">Ticket System</a>
                </li>
                <li>
                  <a href="#">Server Status</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} UPG.UZ - Premium Hosting for
              Uzbekistan. All rights reserved.
            </p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
