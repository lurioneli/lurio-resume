import { useState } from 'react'
import './App.css'
import { Icons } from './Icons'

function App() {
  const [secretRevealed, setSecretRevealed] = useState(null)
  // The story in numbers
  const milestones = [
    { year: "2024", event: "First Conference", number: "300", label: "attendees" },
    { year: "2025", event: "Second Conference", number: "800+", label: "attendees" },
  ]

  const experiences = [
    {
      title: "Co-President",
      subtitle: "(Formerly VP of Operations & Logistics)",
      company: "Albanian Youth (NextGen Professionals)",
      location: "Toronto, ON",
      date: "Jan 2024 – Present",
      bullets: [
        "Early member of founding team and scaled North America's largest Albanian professional network to 550+ members within 1 year; elected Co-President in early 2025",
        "Led flagship NextGen Professionals Conference, growing from 300 (Feb 2024) to 800+ attendees (Mar 2025) with US & Canada panelists across tech, AI, startups, engineering, and legal",
        "Own end-to-end event logistics: venue scouting, vendor negotiations, sponsor acquisition, budget management, business expo coordination",
        "Build and train volunteer teams of 30-50+ per event; developed recruitment pipelines ensuring flawless execution",
        "Host Thursday Think Tank, 10+ monthly networking events with panels, workshops, and professional development",
        "Manage sponsor relationships and deliverables; secured partnerships with businesses and academic institutions"
      ]
    },
    {
      title: "Operations Leader",
      company: "CIBC",
      location: "Toronto, ON",
      date: "June 2021 – Present",
      bullets: [
        "Built and deployed AI-powered agent to 30+ analysts, improving team productivity and output quality",
        "Co-Chair Rewards & Recognition: lead Town Halls (300+ in-person, 500+ remote), annual Achievers Conference, employee appreciation initiatives",
        "Coordinate cross-departmental stakeholders, vendors, and teams for seamless event experiences",
        "Business Continuity Planning (LOB Coordinator) ensuring operational resilience organization-wide"
      ]
    }
  ]

  const skills = [
    {
      title: "Event Operations",
      icon: Icons.calendar,
      tags: ["End-to-end planning", "Venue sourcing", "Vendor management", "A/V", "On-site execution", "Luma", "Eventbrite"]
    },
    {
      title: "Team Leadership",
      icon: Icons.users,
      tags: ["Volunteer recruitment", "Training", "Staffing coordination", "Committee leadership", "Cross-functional collaboration"]
    },
    {
      title: "Tools & Technology",
      icon: Icons.bolt,
      tags: ["Google Workspace", "CRM platforms", "Project management", "AI/automation"]
    },
    {
      title: "Sponsor & Partner Management",
      icon: Icons.handshake,
      tags: ["Sponsor acquisition", "Deliverables tracking", "Post-event reporting", "Relationship management"]
    },
    {
      title: "Financial Management",
      icon: Icons.chart,
      tags: ["Budget planning", "Expense tracking", "Cost optimization", "Invoicing", "Reconciliation"]
    },
    {
      title: "Community Building",
      icon: Icons.globe,
      tags: ["Toronto tech ecosystem", "Cross-border networking", "Membership growth"]
    }
  ]

  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-logo">LN</div>
        <ul className="nav-links">
          <li><a href="#experience">Experience</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        {/* Subtle Albanian Eagle watermark */}
        <div className="hero-eagle" aria-hidden="true">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 10 L30 30 L20 25 L25 40 L10 50 L25 55 L15 70 L35 60 L40 75 L50 55 L60 75 L65 60 L85 70 L75 55 L90 50 L75 40 L80 25 L70 30 Z"
                  stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.15"/>
          </svg>
        </div>

        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            Open to new opportunities
          </div>

          <p className="hero-eyebrow">Hey, I'm</p>
          <h1>
            Lurio <span className="accent">Neli</span>
          </h1>

          <p className="hero-tagline">
            I turn <span className="highlight">empty rooms</span> into <span className="highlight">800-person conferences</span>.
          </p>

          <p className="hero-description">
            Operations leader by day at CIBC. Community architect by night building North America's largest Albanian professional network. I believe the best things happen when people come together, and my job is making sure they actually do.
          </p>

          {/* Growth Journey */}
          <div className="growth-journey">
            <div className="journey-line"></div>
            {milestones.map((m, i) => (
              <div key={i} className="journey-milestone">
                <div className="milestone-dot"></div>
                <div className="milestone-content">
                  <span className="milestone-year">{m.year}</span>
                  <span className="milestone-number">{m.number}</span>
                  <span className="milestone-label">{m.label}</span>
                </div>
              </div>
            ))}
            <div className="journey-arrow">
              <span>and growing</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>

          <div className="hero-roles">
            <span className="role-tag">Events Operations</span>
            <span className="role-tag">Community Building</span>
            <span className="role-tag">Tech Ecosystem</span>
          </div>
        </div>

        {/* Floating elements for visual interest */}
        <div className="floating-elements" aria-hidden="true">
          <div className="float-item float-1">550+ members</div>
          <div className="float-item float-2">50+ volunteers</div>
          <div className="float-item float-3">Toronto</div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section">
        <div className="philosophy-content">
          <blockquote className="philosophy-quote">
            Every man has his folly, but the greatest folly of all is not to have one.
            <cite>Zorba the Greek</cite>
          </blockquote>
          <div className="philosophy-pillars">
            <div className="pillar">
              <span className="pillar-number">01</span>
              <h4>People First</h4>
              <p>Every spreadsheet, every vendor call, every 3am setup. It's all in service of creating moments where people connect.</p>
            </div>
            <div className="pillar">
              <span className="pillar-number">02</span>
              <h4>Obsess Over Details</h4>
              <p>The difference between a good event and one people talk about for years? It's the details nobody consciously notices.</p>
            </div>
            <div className="pillar">
              <span className="pillar-number">03</span>
              <h4>Build Bridges</h4>
              <p>Albanian-Canadian. Corporate-Startup. Tech-Community. I exist at intersections and love connecting worlds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="section-header">
          <p className="section-label">// The Work</p>
          <h2 className="section-title">Where I've Made Impact</h2>
        </div>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  {exp.subtitle && <p className="experience-meta">{exp.subtitle}</p>}
                  <p className="experience-company">{exp.company}</p>
                  <p className="experience-meta">{exp.location}</p>
                </div>
                <span className="experience-date">{exp.date}</span>
              </div>
              <ul className="experience-bullets">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section gallery-section">
        <div className="section-header">
          <p className="section-label">// Proof of Work</p>
          <h2 className="section-title">This Is What 800 People Looks Like</h2>
        </div>
        <p className="gallery-intro">From setup to teardown, from first coffee to last handshake. These are the moments we create at NextGen Professionals.</p>
        <div className="gallery-grid">
          <div className="gallery-item large">
            <img src="./images/IMG_8616.JPG" alt="NextGen Professionals Conference 2025 - Staff" loading="lazy" />
            <div className="gallery-overlay">
              <span>NextGen Conference 2025</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="./images/IMG_8951.JPG" alt="Conference venue with 800+ attendees" loading="lazy" />
            <div className="gallery-overlay">
              <span>800+ Attendees</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="./images/IMG_8902.JPG" alt="Team photo with speakers and organizers" loading="lazy" />
            <div className="gallery-overlay">
              <span>Speakers & Team</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="./images/IMG_9317.JPEG" alt="Panel discussion at networking event" loading="lazy" />
            <div className="gallery-overlay">
              <span>Panel Discussion</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="./images/IMG_8861.JPG" alt="Coordinating volunteer team" loading="lazy" />
            <div className="gallery-overlay">
              <span>Team Coordination</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="./images/IMG_8872.JPG" alt="Registration desk operations" loading="lazy" />
            <div className="gallery-overlay">
              <span>Registration Ops</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="./images/IMG_2801.JPG" alt="Speaking at Albanian Youth event" loading="lazy" />
            <div className="gallery-overlay">
              <span>Thursday Think Tank</span>
            </div>
          </div>
          <div className="gallery-item">
            <img src="./images/IMG_8598.JPG" alt="Event setup" loading="lazy" />
            <div className="gallery-overlay">
              <span>Event Setup</span>
            </div>
          </div>
        </div>
        <div className="gallery-videos">
          <p className="gallery-video-label">Event Moments</p>
          <div className="video-grid">
            <div className="video-item">
              <video src="./images/IMG_1570.MOV" controls muted playsInline preload="metadata">
                Your browser does not support video.
              </video>
            </div>
            <div className="video-item">
              <video src="./images/IMG_1575.MOV" controls muted playsInline preload="metadata">
                Your browser does not support video.
              </video>
            </div>
            <div className="video-item">
              <video src="./images/IMG_1583.MOV" controls muted playsInline preload="metadata">
                Your browser does not support video.
              </video>
            </div>
            <div className="video-item">
              <video src="./images/IMG_1610.MOV" controls muted playsInline preload="metadata">
                Your browser does not support video.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="section-header">
          <p className="section-label">// Side Quests</p>
          <h2 className="section-title">What I Build When Nobody's Watching</h2>
        </div>
        <div className="projects-intro">
          <p>Operations by day, code by night. I'm fascinated by what happens when you pair human creativity with AI. These projects? Built with <span className="accent">Claude Code</span>. Me prompting, it coding, both of us figuring it out.</p>
        </div>
        <div className="projects-grid">
          <a href="https://lurioneli.github.io/Sleep-Suivour/" target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="project-icon">{Icons.gamepad}</div>
            <div className="project-content">
              <h3>Sleep Suivour</h3>
              <p className="project-description">
                A gamified wellness app that turns health tracking into an RPG adventure. Track fasting, sleep, and nutrition while battling metaphorical health monsters.
              </p>
              <div className="project-features">
                <span className="project-tag">Fasting Tracker</span>
                <span className="project-tag">Sleep Analytics</span>
                <span className="project-tag">XP System</span>
                <span className="project-tag">Firebase</span>
              </div>
              <div className="project-link-text">
                <span>View Live App</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="16" height="16">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>
          </a>
          <div className="project-card claude-card">
            <div className="project-icon">{Icons.sparkles}</div>
            <div className="project-content">
              <h3>This Resume Site</h3>
              <p className="project-description">
                Built entirely with Claude Code as an experiment in AI-assisted development. From design to deployment, exploring what's possible when humans and AI collaborate.
              </p>
              <div className="project-features">
                <span className="project-tag">React</span>
                <span className="project-tag">Vite</span>
                <span className="project-tag">Claude Code</span>
              </div>
              <div className="project-badge">
                <span className="pulse-dot"></span>
                Built with AI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="section-header">
          <p className="section-label">// The Toolkit</p>
          <h2 className="section-title">How I Actually Get Things Done</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>
                <span className="icon">{skill.icon}</span>
                {skill.title}
              </h3>
              <div className="skill-tags">
                {skill.tags.map((tag, i) => (
                  <span key={i} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Info */}
      <section className="section additional-section">
        <div className="section-header">
          <p className="section-label">// The Fine Print</p>
          <h2 className="section-title">Quick Facts</h2>
        </div>
        <div className="additional-grid">
          <div className="additional-item">
            <div className="additional-icon">{Icons.clock}</div>
            <div>
              <h4>When I Work</h4>
              <p>Events don't happen 9-5. I'm built for evenings, weekends, and that 6am venue walk-through.</p>
            </div>
          </div>
          <div className="additional-item">
            <div className="additional-icon">{Icons.languages}</div>
            <div>
              <h4>Languages</h4>
              <p>English + Albanian (both native). Useful when half your network spans two continents.</p>
            </div>
          </div>
          <div className="additional-item">
            <div className="additional-icon">{Icons.city}</div>
            <div>
              <h4>Home Base</h4>
              <p>Toronto born and raised. I know this city's venues, its people, and how to get 800 of them in a room.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="contact-content">
          <h2>Let's Build Something</h2>
          <p>Got an event that needs to actually happen? A community that needs to grow? Or just want to talk shop about operations? I'm always down for a good conversation.</p>
          <div className="contact-links">
            <a href="mailto:lurioneli@gmail.com" className="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              lurioneli@gmail.com
            </a>
            <a href="https://linkedin.com/in/lurioneli" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://x.com/lurioninefive" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              @lurioninefive
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-location">Toronto, ON</p>
          <p className="footer-tagline">Great people make me better. I want to become the best.</p>
          <p className="footer-built">Built with React + Claude Code (the AI did the typing, I did the thinking)</p>
          <div className="footer-secrets">
            <span
              className={`footer-secret ${secretRevealed === 'fab' ? 'revealed' : ''}`}
              onClick={() => setSecretRevealed(secretRevealed === 'fab' ? null : 'fab')}
            >
              ///
              {secretRevealed === 'fab' && (
                <span className="secret-message">You found it. The real dream? Building Canada's first A-Z semiconductor fab. From sand to silicon, on home soil.</span>
              )}
            </span>
            <span
              className={`footer-secret-2 ${secretRevealed === 'math' ? 'revealed' : ''}`}
              onClick={() => setSecretRevealed(secretRevealed === 'math' ? null : 'math')}
            >
              &int;
              {secretRevealed === 'math' && (
                <span className="secret-message">Currently relearning math from scratch. Algebra to Linear Algebra to Calculus. You can't build fabs without the fundamentals.</span>
              )}
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
