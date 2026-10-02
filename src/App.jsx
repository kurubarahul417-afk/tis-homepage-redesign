import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0
      );

      document.querySelectorAll(".reveal").forEach((element) => {
        const position = element.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
          element.classList.add("active");
        }
      });
    };

    const handleMouseMove = (event) => {
      const cursor = document.querySelector(".custom-cursor");

      if (cursor) {
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* Scroll Progress */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Custom Cursor */}
      <div className="custom-cursor"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">
          TULA'S <span>INTERNATIONAL SCHOOL</span>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#facilities">Facilities</a>
          <a href="#life">Campus Life</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content reveal">
          <p className="eyebrow">ADMISSIONS OPEN 2027</p>

          <h1>
            Where Curiosity
            <br />
            Meets <span>Confidence.</span>
          </h1>

          <p className="hero-text">
            A modern residential school where young minds learn,
            explore, create and grow with a global mindset.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Explore Tula's →
            </a>

            <a href="#about" className="secondary-btn">
              Discover More
            </a>
          </div>
        </div>

        <div className="hero-card reveal">
          <div className="hero-number">22</div>
          <div className="hero-label">ACRE CAMPUS</div>
          <div className="hero-line"></div>
          <p>
            A vibrant learning environment designed
            for academic and personal growth.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="stats reveal">
        <div>
          <strong>22</strong>
          <span>ACRE CAMPUS</span>
        </div>

        <div>
          <strong>16+</strong>
          <span>OLYMPIC SPORTS</span>
        </div>

        <div>
          <strong>24×7</strong>
          <span>MEDICAL ASSISTANCE</span>
        </div>

        <div>
          <strong>5:1</strong>
          <span>STUDENT TEACHER RATIO</span>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section about">
        <div className="section-heading reveal">
          <p className="eyebrow">ABOUT TULA'S</p>

          <h2>
            The Modern
            <br />
            <span>Gurukul.</span>
          </h2>
        </div>

        <div className="about-content reveal">
          <p>
            Tula's International School is a co-educational residential
            school focused on developing confident, curious and
            responsible young individuals.
          </p>

          <p>
            Rooted in Indian values and guided by a global outlook,
            students experience a balanced approach to academics,
            sports, creativity and personal growth.
          </p>

          <div className="three-cards">
            <div>
              <span>01</span>
              <h3>Curiosity</h3>
              <p>Encouraging students to question, explore and discover.</p>
            </div>

            <div>
              <span>02</span>
              <h3>Collaboration</h3>
              <p>Learning through teamwork, communication and community.</p>
            </div>

            <div>
              <span>03</span>
              <h3>Confidence</h3>
              <p>Building independent thinkers ready for the future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academics */}
      <section id="academics" className="section dark-section">
        <div className="section-heading reveal">
          <p className="eyebrow">ACADEMICS</p>

          <h2>
            Learning Beyond
            <br />
            <span>Classrooms.</span>
          </h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card reveal">
            <span>01</span>
            <h3>Smart Classrooms</h3>
            <p>
              Technology-enabled classrooms that make learning
              interactive and engaging.
            </p>
          </div>

          <div className="feature-card reveal">
            <span>02</span>
            <h3>Modern Laboratories</h3>
            <p>
              Well-equipped science, computer, robotics and
              language laboratories.
            </p>
          </div>

          <div className="feature-card reveal">
            <span>03</span>
            <h3>Practical Learning</h3>
            <p>
              Students learn through experiments, activities,
              projects and real-world experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section id="facilities" className="section">
        <div className="section-heading reveal">
          <p className="eyebrow">CAMPUS & FACILITIES</p>

          <h2>
            Built For
            <br />
            <span>Possibilities.</span>
          </h2>
        </div>

        <div className="facility-list">
          <div className="facility reveal">
            <span>01</span>
            <h3>Digital Workstations</h3>
            <p>
              Technology-supported workstations designed to
              encourage subject-based learning.
            </p>
          </div>

          <div className="facility reveal">
            <span>02</span>
            <h3>20,000+ Books</h3>
            <p>
              A modern library providing students access to
              a wide range of knowledge and resources.
            </p>
          </div>

          <div className="facility reveal">
            <span>03</span>
            <h3>Sports & Activities</h3>
            <p>
              Extensive opportunities for sports, arts,
              clubs and extracurricular activities.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Life */}
      <section id="life" className="campus-section">
        <div className="campus-content reveal">
          <p className="eyebrow">CAMPUS LIFE</p>

          <h2>
            Grow.
            <br />
            Explore.
            <br />
            <span>Become.</span>
          </h2>

          <p>
            From athletics and arts to clubs and societies,
            students are encouraged to discover their passions
            and build lifelong connections.
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial section">
        <div className="quote-mark">“</div>

        <blockquote className="reveal">
          Tula's International School has truly exceeded our
          expectations. The focus on holistic development and
          the encouragement provided by the teachers have played
          a significant role in our child's growth.
        </blockquote>

        <p className="reveal">— PARENT OF A TULA'S STUDENT</p>
      </section>

      {/* CTA */}
      <section id="contact" className="cta-section">
        <div className="reveal">
          <p className="eyebrow">ADMISSIONS 2027</p>

          <h2>
            Your child's
            <br />
            <span>journey starts here.</span>
          </h2>

          <a href="https://admission.tis.edu.in/" className="primary-btn">
            Begin Your Journey →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="logo">
          TULA'S <span>INTERNATIONAL SCHOOL</span>
        </div>

        <p>
          Vill. Dhoolkot, near Tula's Institute,
          Selaqui, Dehradun, Uttarakhand
        </p>

        <p>© 2026 Tula's International School</p>
      </footer>
    </div>
  );
}

export default App;