import React, { useState } from "react";
import { ArrowRight, User } from "lucide-react";
import baliImage from "@/assets/images/bali.png";
import japanImage from "@/assets/images/japan.png";
import thailandImage from "@/assets/images/thailand.png";
import vietnamImage from "@/assets/images/vietnam.png";
import maldivesImage from "@/assets/images/maldives.png";
import "./Blogs.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const categories = [
  "All",
  "Adventure",
  "Culture",
  "Food & Drink",
  "Beaches",
  "Tips & Guides",
];

const blogPosts = [
  {
    id: 1,
    title: "10 Hidden Gems in Bali You Won't Find in Guidebooks",
    excerpt:
      "Discover secret waterfalls, untouched temples, and local favorites that most tourists never see on their Bali adventure.",
    image: baliImage,
    category: "Adventure",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    featured: true,
  },
  {
    id: 2,
    title: "A Complete Guide to Cherry Blossom Season in Japan",
    excerpt:
      "Everything you need to know about planning your perfect sakura viewing trip.",
    image: japanImage,
    category: "Culture",
    author: "Kenji Tanaka",
    date: "Dec 12, 2024",
  },
  {
    id: 3,
    title: "Street Food Paradise: Bangkok's Best Night Markets",
    excerpt: "Your ultimate guide to Bangkok's legendary street food scene.",
    image: thailandImage,
    category: "Food & Drink",
    author: "Maya Patel",
    date: "Dec 10, 2024",
  },
  {
    id: 4,
    title: "Cruising Halong Bay: Luxury vs Budget Options",
    excerpt:
      "Compare the best ways to experience Vietnam's stunning Halong Bay.",
    image: vietnamImage,
    category: "Tips & Guides",
    author: "Tom Wilson",
    date: "Dec 8, 2024",
  },
  {
    id: 5,
    title: "Maldives on a Budget: Yes, It's Possible!",
    excerpt: "Insider tips to enjoy Maldives without breaking the bank.",
    image: maldivesImage,
    category: "Tips & Guides",
    author: "Emma Roberts",
    date: "Dec 5, 2024",
  },
];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState("All");

  const featuredPost = blogPosts.find((p) => p.featured);
  const filteredPosts =
    activeCategory === "All"
      ? blogPosts.filter((p) => !p.featured)
      : blogPosts.filter((p) => p.category === activeCategory && !p.featured);

  return (
    <>
      <Header />
      <section id="blog" className="section-padding pb-5">

        <div className="container container-custom">

          <h6 className="d-flex pb-2 mt-5">
            {" "}
            <Link
              to="/home"
              style={{ color: "#1E703E", "text-decoration": "underline" }}
            >
              {" "}
              Home{" "}
            </Link>
            &nbsp; / Blogs
          </h6>
          {/* HEADER */}
          <div className="blog-header">
           
            <h5 className="whatwedoheading p-3 my-3 py-3">Latest from Our Blog</h5>
            <p>
              Inspiring stories, travel tips, and insider guides from our team
              of passionate travelers.
            </p>
          </div>

          {/* CATEGORIES */}
          <div className="blog-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={activeCategory === cat ? "active" : ""}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FEATURED POST */}
          {activeCategory === "All" && featuredPost && (
            <div className="featured-card">
              <img src={featuredPost.image} alt={featuredPost.title} />

              <div className="featured-content text-left">
                <span className="featured-badge">Featured</span>

                <h5 className="text-left" style={{fontSize : "30px"}}>{featuredPost.title}</h5>
                <p>{featuredPost.excerpt}</p>

                <div className="featured-footer">
                  <span>
                    <User size={14} /> {featuredPost.author}
                  </span>

                  <button>
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* BLOG GRID */}
          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <img src={post.image} alt={post.title} />

                <div className="blog-card-content">
                  <span className="blog-category">{post.category}</span>

                  <h4>{post.title}</h4>
                  <p>{post.excerpt}</p>

                  <div className="blog-meta">
                    <span>
                      {post.author} • {post.date}
                    </span>
                    <span className="arrow-btn">
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* VIEW ALL */}
          <div className="blog-view-all">
            <button>View All Articles →</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
