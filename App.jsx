// App.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const titles = [
  "Design Technology Specialist",
  "Head of Technology, Benoy",
  "Next-gen design"
];

const paragraph = `I'm a design technologist integrating emerging technologies in the design of the built environment. With experience across Europe and Asia, I've led digital strategy, BIM implementation, and computational design on cultural landmarks and complex developments. I thrive where design meets technology — building tools, leading teams, and pushing creative and technical boundaries. From mentoring to automation pipelines and exploring AI. I focus on elevating both process and product.`;

const emphasize = [
  "design technologist",
  "emerging technologies",
  "digital strategy",
  "BIM implementation",
  "computational design",
  "I focus on elevating both process and product"
];

function dramatize(text, phrases) {
  // --- CONFIGURABLE STYLES ---
  // Normal (non-emphasized) text style
  const normalStyle = {
    fontFamily: 'Playfair Display, serif', // <-- Change font here
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 400, // Normal weight
    fontStyle: 'italic', // Italic for regular text
    color: '#4A4A4A', // <-- Black text
    lineHeight: 1.6,
    // No textTransform for natural look
  };
  // Emphasized text style
  const highlightStyle = {
    fontFamily: 'Playfair Display, serif', // <-- Change font here
    fontSize: 'clamp(2rem, 4vw, 3rem)',
    fontWeight: 800, // Bold for emphasis
    fontStyle: 'normal', // Not italic for emphasis
    color: '#000', // <-- Black text
    lineHeight: 1.6,
  };
  // --- END CONFIGURABLE STYLES ---

  // Build a regex to match all phrases, escaping special characters
  const escapedPhrases = phrases.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp(escapedPhrases.join('|'), 'gi');

  // Split the text into parts: normal and emphasized
  const parts = [];
  let lastIndex = 0;
  let match;
  let key = 0;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ text: text.slice(lastIndex, match.index), emphasized: false });
    }
    parts.push({ text: match[0], emphasized: true });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push({ text: text.slice(lastIndex), emphasized: false });
  }

  // Render as a single span (or p) with only emphasized phrases wrapped
  return (
    <span style={normalStyle}>
      {parts.map((part, i) =>
        part.emphasized ? (
          <span key={i} style={highlightStyle}>{part.text}</span>
        ) : (
          part.text
        )
      )}
    </span>
  );
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main style={{ background: '#fff', color: '#000' }}>
      <section style={{ minHeight: '100vh', background: '#fff', padding: '5vh 5vw', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2vh' }}>
        {['AMI NIGAM', 'DESIGN TECHNOLOGY SPECIALIST', 'HEAD OF TECHNOLOGY AT BENOY'].map((line, i) => (
          <motion.h1
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.6 }}
            style={{
              fontSize: i === 0 ? '12vw' : '5vw',
              fontWeight: i === 0 ? 900 : 500,
              color: '#000',
              fontFamily: 'Playfair Display, serif',
              textTransform: 'uppercase',
              margin: 0
            }}
          >
            {line}
          </motion.h1>
        ))}
      </section>

      {/* ABOUT BOX SECTION */}
      <section className="scroll-section" style={{ minHeight: '140vh', background: '#fff', padding: '10vh 5vw', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* White box around about text */}
        <div
          style={{
            background: '#fff', // <-- Box background
            borderRadius: '50px', // <-- Box corner radius
            boxShadow: '0 2px 16px 0 rgba(0,0,0,0.04)', // <-- Subtle shadow
            padding: '3vw 4vw', // <-- Box padding
            maxWidth: '100ch',
            margin: '0 auto',
            border: '1.5px solid #e0e0e0', // <-- Optional border
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {dramatize(paragraph, emphasize)}
        </div>
      </section>

      {/* WHAT I DO SECTION */}
      <section style={{ background: '#fff', padding: '6vh 5vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        {/* Centered section heading */}
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '2.5rem', marginBottom: '2.5rem', color: '#222', textAlign: 'center', width: '100%' }}>What I Do</h2>
        {/* First 3: headers in row 1, descriptions in row 2 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto auto',
            width: '100%',
            maxWidth: '100ch',
            borderRight: '1.5px solid #fff',
            borderLeft: '1.5px solid #fff',
          }}
        >
          {/* Row 1: Headers */}
          <div style={{ borderRight: '1.5px solid #fff', padding: '2.5rem 2rem 0 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            {/* Place icon here if needed */}
            <h3 style={{ fontWeight: 600, fontSize: '2rem', margin: 0, marginBottom: '2.2rem', color: '#111', fontFamily: 'inherit' }}>Design Technology Strategy</h3>
          </div>
          <div style={{ borderRight: '1.5px solid #fff', padding: '2.5rem 2rem 0 2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            {/* Place icon here if needed */}
            <h3 style={{ fontWeight: 600, fontSize: '2rem', margin: 0, marginBottom: '2.2rem', color: '#111', fontFamily: 'inherit' }}>Digital Design</h3>
          </div>
          <div style={{ padding: '2.5rem 0 0 2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            {/* Place icon here if needed */}
            <h3 style={{ fontWeight: 600, fontSize: '2rem', margin: 0, marginBottom: '2.2rem', color: '#111', fontFamily: 'inherit' }}>Digital Delivery</h3>
          </div>
          {/* Row 2: Descriptions */}
          <div style={{ borderRight: '1.5px solid #fff', padding: '0 2rem 2.5rem 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <p style={{ color: '#888', fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}>
              Driving design technology strategy across global studios—aligning project needs with business objectives through scalable systems, cross-team collaboration, and progressive digital agendas.
            </p>
          </div>
          <div style={{ borderRight: '1.5px solid #fff', padding: '0 2rem 2.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <p style={{ color: '#888', fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}>
              Delivering high-performance, sustainable design using computational methods, data-driven analysis, and custom toolsets—enhancing design precision and creativity at all stages.
            </p>
          </div>
          <div style={{ padding: '0 0 2.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <p style={{ color: '#888', fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}>
              Leading BIM implementation and digital delivery at scale—developing ISO19650-compliant standards, automating documentation, and supporting teams from concept through bid.
            </p>
          </div>
        </div>
        {/* Second 3: headers in row 1, descriptions in row 2 */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'auto auto',
            width: '100%',
            maxWidth: '100ch',
            borderRight: '1.5px solid #fff',
            borderLeft: '1.5px solid #fff',
            marginTop: '0',
          }}
        >
          {/* Row 1: Headers */}
          <div style={{ borderRight: '1.5px solid #fff', padding: '2.5rem 2rem 0 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            {/* Place icon here if needed */}
            <h3 style={{ fontWeight: 600, fontSize: '2rem', margin: 0, marginBottom: '2.2rem', color: '#111', fontFamily: 'inherit' }}>Emerging Tech Implementation</h3>
          </div>
          <div style={{ borderRight: '1.5px solid #fff', padding: '2.5rem 2rem 0 2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            {/* Place icon here if needed */}
            <h3 style={{ fontWeight: 600, fontSize: '2rem', margin: 0, marginBottom: '2.2rem', color: '#111', fontFamily: 'inherit' }}>Team & Capability Building</h3>
          </div>
          <div style={{ padding: '2.5rem 0 0 2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            {/* Place icon here if needed */}
            <h3 style={{ fontWeight: 600, fontSize: '2rem', margin: 0, marginBottom: '2.2rem', color: '#111', fontFamily: 'inherit' }}>Process & Workflow Development</h3>
          </div>
          {/* Row 2: Descriptions */}
          <div style={{ borderRight: '1.5px solid #fff', padding: '0 2rem 2.5rem 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <p style={{ color: '#888', fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}>
              Deploying AI tools, Rhino–Revit interoperability, and custom automation into live projects—translating innovation into measurable impact across disciplines.
            </p>
          </div>
          <div style={{ borderRight: '1.5px solid #fff', padding: '0 2rem 2.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <p style={{ color: '#888', fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}>
              Building and managing global tech teams—mentoring staff, creating training content, and embedding technical excellence across product, building, and masterplanning scales.
            </p>
          </div>
          <div style={{ padding: '0 0 2.5rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <p style={{ color: '#888', fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}>
              Designing and maintaining cross-platform workflows—developing Rhino.Inside, Dynamo, and Grasshopper pipelines, with detailed documentation, templates, and script libraries.
            </p>
          </div>
        </div>
      </section>

      {/* PRESS / RECOGNITION / AWARDS SECTION */}
      <section style={{ background: '#fff', padding: '6vh 5vw', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div
          style={{
            background: '#fff',
            borderRadius: '50px',
            boxShadow: '0 2px 16px 0 rgba(0,0,0,0.04)',
            padding: '3vw 4vw',
            maxWidth: '100ch',
            margin: '0 auto',
            border: '1.5px solid #fff',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontWeight: 800, fontSize: '2.5rem', marginBottom: '2rem', color: '#222', alignSelf: 'center', width: '100%', textAlign: 'center' }}>Press / Recognition / Awards</h2>
          {/* Grid of press/awards items */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2.5rem',
            width: '100%',
            margin: '0 auto',
          }}>
            {/* Example item: swap out image src and link as needed */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <a href="https://x.share-architects.com/share-x-istanbul-2025/#round" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#222', width: '100%' }}>
                {/* Swap out the image src below for your own image link */}
                <img src="https://x.share-architects.com/wp-content/uploads/2025/01/x.share-architects.com-istanbul-2025-roud-tables-2.png" alt="Benoy achieves six accolades at Asia Pacific Property Awards 2025–2026" style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem', objectFit: 'cover', height: '160px' }} />
                <h4 style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>
                  Ami Nigam at Share X Istanbul 2025
                </h4>
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <a href="https://www.benoy.com/news/2025/05/benoy-achieves-six-accolades-at-asia-pacific-property-awards-2025-2026/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#222', width: '100%' }}>
                {/* Swap out the image src below for your own image link */}
                <img src="https://benoycdn.azureedge.net/files/news/2025/05/benoy-achieves-six-accolades-at-asia-pacific-property-awards-2025-2026/_mediumImage/IG-Thumb-7.png" alt="Benoy achieves six accolades at Asia Pacific Property Awards 2025–2026" style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem', objectFit: 'cover', height: '160px' }} />
                <h4 style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>
                  Benoy achieves six accolades at Asia Pacific Property Awards 2025–2026
                </h4>
              </a>
            </div>
            {/* Repeat for each press/award item, updating href and headline as needed */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <a href="https://design-middleeast.com/winners-revealed-design-middle-east-awards-ksa-2024/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#222', width: '100%' }}>
                <img src="https://benoycdn.azureedge.net/files/news/2024/03/benoy-project-osus-green-tower-wins-best-concept-design-at-design-middle-east-24-awards/_mediumImage/OSUS-win-small.jpg" alt="Winners Revealed: Design Middle East Awards KSA 2024" style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem', objectFit: 'cover', height: '160px' }} />
                <h4 style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>
                  Winners Revealed: Design Middle East Awards KSA 2024
                </h4>
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <a href="https://nla.london/topics/built-environment-technology" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#222', width: '100%' }}>
                <img src="https://benoycdn.azureedge.net/files/news/2023/11/james-dixon-invited-to-join-nla-expert-panel-for-high-streets/_mediumImage/NLA-Website_Article_Image.jpg" alt="NLA Expert Panel Appointment :  Built Environment Technology (2023-2025)" style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem', objectFit: 'cover', height: '160px' }} />
                <h4 style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>
                  NLA Expert Panel Appointment :  Built Environment Technology (2023-2025)
                </h4>
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <a href="https://disruptmag.com/ami-nigam-pioneering-design-technology-strategy-in-architecture-at-benoy/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#222', width: '100%' }}>
                <img src="https://disruptmag.com/wp-content/uploads/2024/04/006A3384-2-1920x1898.jpg" alt="Disrupt Mag - Ami Nigam: Pioneering Design Technology Strategy in Architecture at Benoy" style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem', objectFit: 'cover', height: '160px' }} />
                <h4 style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>
                  Disrupt Mag - Ami Nigam: Pioneering Design Technology Strategy in Architecture at Benoy
                </h4>
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <a href="https://creators.spotify.com/pod/profile/sara-kolata/episodes/Arch-Talk-Tank-109-Ami-Nigam-Pioneering-Design-Technology-Strategy-in-Architecture-e2hmel4" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#222', width: '100%' }}>
                <img src="https://d2a9bkgsuxmqe2.cloudfront.net/staging/podcast_uploaded_episode400/31550957/31550957-1711642883180-9617229b6245b.jpg" alt="Arch Talk: Tank #109: Ami Nigam: Pioneering Design Technology Strategy in Architecture" style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem', objectFit: 'cover', height: '160px' }} />
                <h4 style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>
                  Arch Talk: Tank #109: Ami Nigam: Pioneering Design Technology Strategy in Architecture
                </h4>
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <a href="https://www.benoy.com/design-insights/ami-nigam-on-the-importance-of-technology-in-driving-design-innovation/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#222', width: '100%' }}>
                <img src="https://benoycdn.azureedge.net/files/design-insights/ami-nigam-on-the-importance-of-technology-in-driving-design-innovation/Image-2-Urban-Analysis-2.gif" alt="Ami Nigam on the importance of technology in driving design innovation | Design + Insights | Benoy" style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem', objectFit: 'cover', height: '160px' }} />
                <h4 style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>
                  Ami Nigam on the importance of technology in driving design innovation | Design + Insights | Benoy
                </h4>
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <a href="https://www.benoy.com/design-insights/tech-and-sustainability-building-a-cleaner-greener-future/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#222', width: '100%' }}>
                <img src="https://benoycdn.azureedge.net/files/design-insights/tech-and-sustainability-building-a-cleaner-greener-future/_mediumImage/Benoy-sustainability-technology-global-projects-article-image2-wind_2024-04-22-151106_blen.jpg" alt="Tech and sustainability: Building a cleaner, greener future | Design + Insights | Benoy" style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem', objectFit: 'cover', height: '160px' }} />
                <h4 style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>
                  Tech and sustainability: Building a cleaner, greener future | Design + Insights | Benoy
                </h4>
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <a href="https://www.novatr.com/blog/career-in-bim-and-computational-design" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#222', width: '100%' }}>
                <img src="https://drt8cv58r2b23.cloudfront.net/images/blog/Ami_Nigam_thesis_presentation_IAAC.jpg" alt="Exploring a Career in BIM and Computational Design with Ami Nigam" style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem', objectFit: 'cover', height: '160px' }} />
                <h4 style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>
                  Exploring a Career in BIM and Computational Design with Ami Nigam
                </h4>
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <a href="https://www.novatr.com/blog/computational-bim-guide" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#222', width: '100%' }}>
                <img src="https://drt8cv58r2b23.cloudfront.net/filters:quality(75)/827x550/images/blog/blogHero/Ami_Nigam_Oneistox.jpg" alt="Computational BIM Guide: All You Have to Know in 2025" style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem', objectFit: 'cover', height: '160px' }} />
                <h4 style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>
                  Computational BIM Guide: All You Have to Know in 2025
                </h4>
              </a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <a href="https://archi-tech.network/pages/pecha-kucha-e1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#222', width: '100%' }}>
                <img src="https://media.licdn.com/dms/image/v2/D4E12AQEsybm1HN17dg/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1683020045906?e=1755129600&v=beta&t=xdESefwyvul20j72oifh1tax7PHHsJQkVSfFyG8HO5w" alt="Pecha Kucha In The Pub - Design Technology in Practice" style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem', objectFit: 'cover', height: '160px' }} />
                <h4 style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>
                  Pecha Kucha In The Pub - Design Technology in Practice
                </h4>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ height: '100vh', background: '#fff' }}></section>
    </main>
  );
}
