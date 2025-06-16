import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import Background from './components/Background';
import Lenis from '@studio-freight/lenis';
import { Leva } from 'leva'
import { OrbitControls } from '@react-three/drei'





// ===========================================
// MODULAR TYPOGRAPHY SYSTEM - Mix and Match
// ===========================================

// Font Faces
const fontFaces = {
  name: 'Savate, serif',
  primary: 'Noto, sans-serif',
  secondary: 'Noto, serif',
  special: 'Georgia, serif', // Add your special font here
};

// Font Sizes
const fontSizes = {
  extrasmall: 'clamp(0.8rem, 0.9rem, 0.9rem)',
  small: 'clamp(1.1rem, 1.4rem, 1.4rem)',
  medium: 'clamp(1.4rem, 1.6rem, 1.6rem)',
  large: 'clamp(1.8rem, 2.5rem, 2.5rem)',
  extraLarge: 'clamp(2.5rem, 3.5rem, 3.5rem)',
  massive: 'clamp(4vw, 6vw, 6vw)',
};

// Font Weights
const fontWeights = {
  ultralight: 100,
  light: 300,
  normal: 400,
  semibold: 600,
  bold: 700,
  heavy: 800,
  black: 900,
};

// Colors
const colors = {
  background: 'rgba(255, 255, 255, 0)',
  primary: '#000',
  secondary: '#CBCBCB',
  accent: '#e10098',
  accentSecondary: '#6366f1', // Additional accent color
};

// Typography Assignments - Easy to modify
const typography = {
  // Hero Name (AMI NIGAM)
  heroName: {
    fontFamily: fontFaces.name,
    fontSize: fontSizes.massive,
    fontWeight: fontWeights.semibold,
    fontStyle: 'normal',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 'normal',
    lineHeight: 1,
  },
  
  // Hero Title (DESIGN TECHNOLOGY SPECIALIST)
  heroTitle: {
    fontFamily: fontFaces.primary,
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.semibold,
    fontStyle: 'normal',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    lineHeight: 1.2,
    marginBottom: '1rem',
  },
  
  // Hero Subtitle (HEAD OF TECHNOLOGY, BENOY, LONDON)
  heroSubtitle: {
    fontFamily: fontFaces.primary,
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.semibold,
    fontStyle: 'normal',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    lineHeight: 1.2,
  },
  
  // About Me Text (main paragraph)
  aboutText: {
    fontFamily: fontFaces.primary,
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.normal,
    fontStyle: 'normal',
    color: colors.secondary,
    textTransform: 'uppercase',
    letterSpacing: 'normal',
    lineHeight: 1.6,
    marginTop: '2rem',
  },
  
  // About Me Text - Emphasized parts
  aboutTextEmphasized: {
    fontFamily: fontFaces.primary,
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.normal,
    fontStyle: 'normal',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 'normal',
    lineHeight: 1.6,
  },
  
  // Section Headings (Expertise, Press / Recognition / Awards)
  sectionHeading: {
    fontFamily: fontFaces.primary,
    fontSize: fontSizes.medium,
    fontWeight: fontWeights.bold,
    fontStyle: 'normal',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 'normal',
    lineHeight: 1.2,
  },
  
  // Sub-headings (Design Technology Strategy, Digital Design, etc.)
  subHeading: {
    fontFamily: fontFaces.primary,
    fontSize: fontSizes.small,
    fontWeight: fontWeights.normal,
    fontStyle: 'normal',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 'normal',
    lineHeight: 1.3,
  },
  
  // Regular Text (Expertise descriptions, Press titles)
  regularText: {
    fontFamily: fontFaces.primary,
    fontSize: fontSizes.extrasmall,
    fontWeight: fontWeights.normal,
    fontStyle: 'normal',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 'normal',
    lineHeight: 1.7,
  },
  
  // Press Card Titles
  pressTitle: {
    fontFamily: fontFaces.primary,
    fontSize: fontSizes.extrasmall,
    fontWeight: fontWeights.light,
    fontStyle: 'italic',
    color: colors.primary,
    textTransform: 'none',
    letterSpacing: 'normal',
    lineHeight: 1.4,
  }
};

// ===========================================
// DESIGN SYSTEM (other settings)
// ===========================================
const designSystem = {
  
  spacing: {
    xs: '1rem',
    sm: '1.5rem',
    md: '2rem',
    lg: '2.5rem',
    xl: '3rem',
    xxl: '4rem',
    section: '3vh 5vw',
    heroSection: '5vh 5vw',
  },
  
  layout: {
    maxWidth: '150ch',
    borderRadius: '0px',
    gridGap: '2.5rem',
    cardHeight: '160px',
  },
  
  animations: {
    hero: {
      stagger: 0.1,
      initialDelay: 1.2,
      duration: 0.4,
    },
    scroll: {
      stagger: 0.1,
      duration: 0.4,
    },
    easing: [0.25, 0.46, 0.45, 0.94],
  },
  
  grids: {
    expertise: 'repeat(3, 1fr)',
    press: 'repeat(4, 1fr)',
  }
};

// ===========================================
// CONTENT DATA
// ===========================================
const content = {
  hero: {
    name: 'AMI    ',
    surname: '   NIGAM',
    title: 'DESIGN TECHNOLOGY SPECIALIST',
    subtitle: 'HEAD OF TECHNOLOGY, BENOY, LONDON'
  },
  
  about: {
    text: `Hello I'm Ami. I'm a design technologist with a background in Architecture and a passion for integrating emerging technologies in the design of the built environment. With experience across Europe and Asia at firms like Benoy, UNStudio, Enzyme and others, I've led digital strategy, BIM implementation, and computational design on cultural landmarks and complex developments. I thrive where design meets technology — building tools, leading teams, and pushing creative and technical boundaries. From mentoring to automation pipelines and exploring AI. I focus on elevating both process and product.`,
    
    emphasize: [
      "Hello I'm Ami",
      "design technologist",
      "Architecture", 
      "emerging technologies",
      "digital strategy",
      "BIM implementation",
      "computational design",
      "Benoy",
      "UNStudio",
      "Enzyme", 
      "I focus on elevating both process and product"
    ],
    
    companyLinks: {
      "Benoy": "https://www.benoy.com",
      "UNStudio": "https://www.unstudio.com",
      "Enzyme": "https://www.weareenzyme.com/"
    }
  },
  
  expertise: {
    title: 'Expertise',
    items: [
      {
        title: 'Design Technology Strategy',
        description: 'Driving design technology strategy across global studios—aligning project needs with business objectives through scalable systems, cross-team collaboration, and progressive digital agendas.',
        icon: '/icons/strategy.png'
      },
      {
        title: 'Digital Design',
        description: 'Delivering high-performance, sustainable design using computational methods, data-driven analysis, and custom toolsets—enhancing design precision and creativity at all stages.',
        icon: '/icons/digital-design.png'
      },
      {
        title: 'Digital Delivery',
        description: 'Leading BIM implementation and digital delivery at scale—developing ISO19650-compliant standards, automating documentation, and supporting teams from concept through bid.',
        icon: '/icons/delivery.png'
      },
      {
        title: 'Emerging Tech Implementation',
        description: 'Deploying AI tools, Rhino–Revit interoperability, and custom automation into live projects—translating innovation into measurable impact across disciplines.',
        icon: '/icons/emerging-tech.png'
      },
      {
        title: 'Team & Capability Building',
        description: 'Building and managing global tech teams—mentoring staff, creating training content, and embedding technical excellence across product, building, and masterplanning scales.',
        icon: '/icons/team.png'
      },
      {
        title: 'Process & Workflow Development',
        description: 'Designing and maintaining cross-platform workflows—developing Rhino.Inside, Dynamo, and Grasshopper pipelines, with detailed documentation, templates, and script libraries.',
        icon: '/icons/workflow.png'
      }
    ]
  },
  
  press: {
    title: 'Out there',
    items: [
      {
        url: 'https://x.share-architects.com/share-x-istanbul-2025/#round',
        image: 'https://x.share-architects.com/wp-content/uploads/2025/01/x.share-architects.com-istanbul-2025-roud-tables-2.png',
        title: 'Ami Nigam at Share X Istanbul 2025'
      },
      {
        url: 'https://nla.london/topics/built-environment-technology',
        image: 'https://benoycdn.azureedge.net/files/news/2023/11/james-dixon-invited-to-join-nla-expert-panel-for-high-streets/_mediumImage/NLA-Website_Article_Image.jpg',
        title: 'NLA Expert Panel Appointment : Built Environment Technology (2023-2025)'
      },
      {
        url: 'https://disruptmag.com/ami-nigam-pioneering-design-technology-strategy-in-architecture-at-benoy/',
        image: 'https://disruptmag.com/wp-content/uploads/2024/04/006A3384-2-1920x1898.jpg',
        title: 'Disrupt Mag - Ami Nigam: Pioneering Design Technology Strategy in Architecture at Benoy'
      },
      {
        url: 'https://creators.spotify.com/pod/profile/sara-kolata/episodes/Arch-Talk-Tank-109-Ami-Nigam-Pioneering-Design-Technology-Strategy-in-Architecture-e2hmel4',
        image: 'https://d2a9bkgsuxmqe2.cloudfront.net/staging/podcast_uploaded_episode400/31550957/31550957-1711642883180-9617229b6245b.jpg',
        title: 'Arch Talk: Tank #109: Ami Nigam: Pioneering Design Technology Strategy in Architecture'
      },
      {
        url: 'https://www.benoy.com/design-insights/ami-nigam-on-the-importance-of-technology-in-driving-design-innovation/',
        image: 'https://benoycdn.azureedge.net/files/design-insights/ami-nigam-on-the-importance-of-technology-in-driving-design-innovation/Image-2-Urban-Analysis-2.gif',
        title: 'Ami Nigam on the importance of technology in driving design innovation | Design + Insights | Benoy'
      },
      {
        url: 'https://www.benoy.com/design-insights/tech-and-sustainability-building-a-cleaner-greener-future/',
        image: 'https://benoycdn.azureedge.net/files/design-insights/tech-and-sustainability-building-a-cleaner-greener-future/_mediumImage/Benoy-sustainability-technology-global-projects-article-image2-wind_2024-04-22-151106_blen.jpg',
        title: 'Tech and sustainability: Building a cleaner, greener future | Design + Insights | Benoy'
      },
      {
        url: 'https://www.novatr.com/blog/career-in-bim-and-computational-design',
        image: 'https://drt8cv58r2b23.cloudfront.net/images/blog/Ami_Nigam_thesis_presentation_IAAC.jpg',
        title: 'Exploring a Career in BIM and Computational Design with Ami Nigam'
      },
      {
        url: 'https://www.novatr.com/blog/computational-bim-guide',
        image: 'https://drt8cv58r2b23.cloudfront.net/filters:quality(75)/827x550/images/blog/blogHero/Ami_Nigam_Oneistox.jpg',
        title: 'Computational BIM Guide: All You Have to Know in 2025'
      },
      {
        url: 'https://archi-tech.network/pages/pecha-kucha-e1',
        image: 'https://media.licdn.com/dms/image/v2/D4E12AQEsybm1HN17dg/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1683020045906?e=1755129600&v=beta&t=xdESefwyvul20j72oifh1tax7PHHsJQkVSfFyG8HO5w',
        title: 'Pecha Kucha In The Pub - Design Technology in Practice'
      }
    ]
  }
};

// ===========================================
// STYLING CONFIGURATIONS
// ===========================================
const componentStyles = {
  main: {
    background: colors.background,
    color: typography.regularText.color
  },
  
  heroSection: {
    minHeight: '100vh',
    background: colors.background,
    padding: designSystem.spacing.heroSection,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    widtgh: '50%',
    alignItems: 'center',
  },
  
  heroName: {
    ...typography.heroName,
    margin: 0,
    textAlign: 'left',
    width: '100%',
    display: 'flex',
    alignItems: 'baseline',
    marginBottom: '2rem'

  },
  
  heroSurname: {
    fontStyle: 'italic'
  },
  
  heroTitle: {
    ...typography.heroTitle,
    margin: 0,
    textAlign: 'left',
    marginBottom: '1.5rem',

    width: '100%'

  },

  heroSubtitle: {
    ...typography.heroSubtitle,
    margin: 0,
    textAlign: 'left',
    marginBottom: '3rem',
    width: '100%'
  },
  
  heroAbout: {
    maxWidth: designSystem.layout.maxWidth,
    margin: 0,
    width: '60%',
    textAlign: 'left'
  },
  
  aboutSection: {
    minHeight: 'auto',
    padding: '2vh 5vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  
  section: {
    background: colors.background,
    padding: designSystem.spacing.section,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  sectionHeading: {
    ...typography.sectionHeading,
    marginBottom: designSystem.spacing.md,
    textAlign: 'center',
    width: '100%'
  },
  
  expertiseGrid: {
    display: 'grid',
    gridTemplateColumns: designSystem.grids.expertise,
    gridTemplateRows: 'auto auto',
    width: '100%',
    maxWidth: designSystem.layout.maxWidth,
  },
  
  expertiseHeader: {
    padding: `${designSystem.spacing.lg} ${designSystem.spacing.md} 0 ${designSystem.spacing.md}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '1rem'
  },
  
  expertiseIcon: {
    width: '200x',
    height: '200px',
    objectFit: 'contain',
    marginBottom: '0.5rem'
  },
  
  expertiseTitle: {
    ...typography.subHeading,
    margin: 0,
    marginBottom: '2.2rem',
    textAlign: 'center'
  },
  
  expertiseDescription: {
    padding: `0 ${designSystem.spacing.md} ${designSystem.spacing.lg} ${designSystem.spacing.md}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  
  expertiseText: {
    ...typography.regularText,
    margin: 0,
    textAlign: 'center'
  },
  
  pressGrid: {
    display: 'grid',
    gridTemplateColumns: designSystem.grids.press,
    gap: designSystem.layout.gridGap,
    width: '100%',
    margin: '0 auto',
  },
  
  pressItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  
  pressLink: {
    textDecoration: 'none',
    textAlign: 'center',
    color: typography.pressTitle.color,
    width: '100%'
  },
  
  pressImage: {
    width: '100%',
    borderRadius: '12px',
    marginBottom: designSystem.spacing.xs,
    objectFit: 'cover',
    height: designSystem.layout.cardHeight
  },
  
  pressTitleStyle: {
    ...typography.pressTitle,
    margin: 0
  },

  aboutBox: {
    borderRadius: designSystem.layout.borderRadius,
    padding: '2vw 3vw',
    maxWidth: designSystem.layout.maxWidth,
    margin: '0 auto',
    border: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  }
};

// ===========================================
// DRAMATIZE TEXT COMPONENT
// ===========================================
const DramatizedText = ({ 
  text, 
  phrases = [], 
  companyLinks = {}, 
  variant = 'about',
  className = '',
  showFirstSentenceImmediately = false // New prop for controlling first sentence behavior
}) => {
  const normalStyle = variant === 'hero' ? typography.aboutText : typography.aboutText;
  const emphasizedStyle = variant === 'hero' ? typography.aboutTextEmphasized : typography.aboutTextEmphasized;
  const sentences = text.split(/(?<=[.!?])\s+/);
  
  return (
    <span style={normalStyle} className={className}>
      {sentences.map((sentence, sentenceIndex) => {
        const allPhrases = [...phrases, ...Object.keys(companyLinks)];
        const escapedPhrases = allPhrases.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        const pattern = new RegExp(escapedPhrases.join('|'), 'gi');

        const parts = [];
        let lastIndex = 0;
        let match;
        
        while ((match = pattern.exec(sentence)) !== null) {
          if (match.index > lastIndex) {
            parts.push({ text: sentence.slice(lastIndex, match.index), emphasized: false });
          }
          
          const matchedText = match[0];
          const isCompany = Object.keys(companyLinks).some(company => 
            company.toLowerCase() === matchedText.toLowerCase()
          );
          const isEmphasized = phrases.some(phrase => 
            phrase.toLowerCase() === matchedText.toLowerCase()
          );
          
          parts.push({ 
            text: matchedText, 
            emphasized: isEmphasized,
            isCompany: isCompany,
            link: isCompany ? companyLinks[matchedText] || companyLinks[Object.keys(companyLinks).find(k => k.toLowerCase() === matchedText.toLowerCase())] : null
          });
          
          lastIndex = match.index + match[0].length;
        }
        
        if (lastIndex < sentence.length) {
          parts.push({ text: sentence.slice(lastIndex), emphasized: false });
        }

        // Show first sentence immediately if specified, all others require scroll
        if (showFirstSentenceImmediately && sentenceIndex === 0) {
          return (
            <span key={sentenceIndex} style={{ display: 'inline', minHeight: '1em' }}>
              {parts.map((part, i) => {
                if (part.isCompany && part.link) {
                  return (
                    <a 
                      key={i} 
                      href={part.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        ...emphasizedStyle,
                        color: colors.accent,
                        fontWeight: fontWeights.black,
                        fontStyle: 'italic',
                        textDecoration: 'none'
                      }}
                    >
                      {part.text}
                    </a>
                  );
                } else if (part.emphasized) {
                  return <span key={i} style={emphasizedStyle}>{part.text}</span>;
                } else {
                  return part.text;
                }
              })}
              {sentences.length > 1 ? ' ' : ''}
            </span>
          );
        } else {
          return (
            <motion.span
              key={sentenceIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px", amount: 0.3 }}
              transition={{
                delay: sentenceIndex * 0.1,
                duration: 0.4,
                ease: designSystem.animations.easing
              }}
              style={{ display: 'inline', minHeight: '1em' }}
            >
              {parts.map((part, i) => {
                if (part.isCompany && part.link) {
                  return (
                    <a 
                      key={i} 
                      href={part.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        ...emphasizedStyle,
                        color: colors.accent,
                        fontWeight: fontWeights.bold,
                        textDecoration: 'underline'
                      }}
                    >
                      {part.text}
                    </a>
                  );
                } else if (part.emphasized) {
                  return <span key={i} style={emphasizedStyle}>{part.text}</span>;
                } else {
                  return part.text;
                }
              })}
              {sentenceIndex < sentences.length - 1 ? ' ' : ''}
            </motion.span>
          );
        }
      })}
    </span>
  );
};

// ===========================================
// SECTION COMPONENTS
// ===========================================
const HeroSection = () => (
  <section style={componentStyles.heroSection}>
    <div style={{ maxWidth: designSystem.layout.maxWidth, width: '100%' }}>
      <h1 style={componentStyles.heroName}>
        {content.hero.name}
        <span style={componentStyles.heroSurname}>{content.hero.surname}</span>
      </h1>
      
      <h2 style={componentStyles.heroTitle}>
        {content.hero.title}
      </h2>
      
      <h3 style={componentStyles.heroSubtitle}>
        {content.hero.subtitle}
      </h3>
      
      <div style={componentStyles.heroAbout}>
        <DramatizedText
          text={content.about.text}
          phrases={content.about.emphasize}
          companyLinks={content.about.companyLinks}
          variant="hero"
          showFirstSentenceImmediately={true}
        />
      </div>
    </div>
  </section>
);

const ExpertiseSection = () => (
  <section style={componentStyles.section}>
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.1}}
      style={componentStyles.sectionHeading}
    >
      {content.expertise.title}
    </motion.h2>
    
    {/* First row of 3 */}
    <div style={componentStyles.expertiseGrid}>
      {content.expertise.items.slice(0, 3).map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ 
            once: true, 
            margin: "-50px",
            amount: 0.3
          }}
          transition={{ 
            delay: i * 0.2,
            duration: 0.8,
            ease: designSystem.animations.easing
          }}
          style={componentStyles.expertiseHeader}
        >
          <img src={item.icon} alt={item.title} style={componentStyles.expertiseIcon} />
          <h3 style={componentStyles.expertiseTitle}>{item.title}</h3>
        </motion.div>
      ))}
      
      {content.expertise.items.slice(0, 3).map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ 
            once: true, 
            margin: "-50px",
            amount: 0.3
          }}
          transition={{ 
            delay: i * 0.2 + 0.1,
            duration: 0.8,
            ease: designSystem.animations.easing
          }}
          style={componentStyles.expertiseDescription}
        >
          <p style={componentStyles.expertiseText}>{item.description}</p>
        </motion.div>
      ))}
    </div>
    
    {/* Second row of 3 */}
    <div style={{...componentStyles.expertiseGrid, marginTop: '0'}}>
      {content.expertise.items.slice(3, 6).map((item, i) => (
        <motion.div
          key={i + 3}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ 
            once: true, 
            margin: "-50px",
            amount: 0.3
          }}
          transition={{ 
            delay: (i + 3) * 0.2,
            duration: 0.8,
            ease: designSystem.animations.easing
          }}
          style={componentStyles.expertiseHeader}
        >
          <img src={item.icon} alt={item.title} style={componentStyles.expertiseIcon} />
          <h3 style={componentStyles.expertiseTitle}>{item.title}</h3>
        </motion.div>
      ))}
      
      {content.expertise.items.slice(3, 6).map((item, i) => (
        <motion.div
          key={i + 3}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ 
            once: true, 
            margin: "-50px",
            amount: 0.3
          }}
          transition={{ 
            delay: (i + 3) * 0.2 + 0.1,
            duration: 0.8,
            ease: designSystem.animations.easing
          }}
          style={componentStyles.expertiseDescription}
        >
          <p style={componentStyles.expertiseText}>{item.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const PressSection = () => (
  <section style={componentStyles.section}>
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      style={componentStyles.sectionHeading}
    >
      {content.press.title}
    </motion.h2>
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      style={componentStyles.aboutBox}
    >
      <div style={componentStyles.pressGrid}>
        {content.press.items.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            style={componentStyles.pressItem}
          >
            <a href={item.url} target="_blank" rel="noopener noreferrer" style={componentStyles.pressLink}>
              <img src={item.image} alt={item.title} style={componentStyles.pressImage} />
              <h4 style={componentStyles.pressTitleStyle}>{item.title}</h4>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

const linkedInUrl = "https://www.linkedin.com/in/ami-nigam-4325256a/";

function CopyrightFooter() {
  return (
    <footer style={{
      position: 'fixed',
      left: '50%',
      bottom: '2vh',
      transform: 'translateX(-50%)',
      color: '#888',
      fontSize: '1rem',
      zIndex: 100,
      background: 'rgba(255,255,255,0.7)',
      borderRadius: '8px',
      padding: '0.3em 1.2em',
      boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
      fontFamily: fontFaces.primary,
      fontSize: fontSizes.extrasmall,
      fontWeight: fontWeights.ultralight
    }}>
      © {new Date().getFullYear()} Ami Nigam. All rights reserved.
    </footer>
  );
}

function LinkedInButton() {
  return (
    <a
      href={linkedInUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        top: '2vh',
        right: '2vw',
        zIndex: 100,
        background: '#e10098',
        color: '#fff',
        borderRadius: '999px',
        padding: '0.7em 1.5em 0.7em 2.5em',
        fontWeight: 600,
        fontFamily: fontFaces.primary,
        fontSize: fontSizes.extrasmall,
        fontWeight: fontWeights.light,
        textDecoration: 'none',
        boxShadow: '0 2px 12px rgba(225,0,152,0.08)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.7em',
        transition: 'background 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.background = '#b80077'}
      onMouseLeave={e => e.currentTarget.style.background = '#e10098'}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:'absolute',left:'0.7em'}}><rect width="24" height="24" rx="12" fill="#fff"/><path d="M17.5 17.5H15.25V14.25C15.25 13.42 15.23 12.34 14.09 12.34C12.94 12.34 12.77 13.27 12.77 14.19V17.5H10.5V10.5H12.64V11.44H12.67C12.97 10.89 13.66 10.3 14.68 10.3C16.81 10.3 17.5 11.66 17.5 13.36V17.5ZM8.25 9.56C7.56 9.56 7 9 7 8.31C7 7.62 7.56 7.06 8.25 7.06C8.94 7.06 9.5 7.62 9.5 8.31C9.5 9 8.94 9.56 8.25 9.56ZM9.38 17.5H7.12V10.5H9.38V17.5ZM18.25 4.5H5.75C5.34 4.5 5 4.84 5 5.25V18.75C5 19.16 5.34 19.5 5.75 19.5H18.25C18.66 19.5 19 19.16 19 18.75V5.25C19 4.84 18.66 4.5 18.25 4.5Z" fill="#e10098"/></svg>
      Contact me on LinkedIn
    </a>
  );
}

// ===========================================
// MAIN APP COMPONENT
// ===========================================
export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1
      }}>
        <Leva />
        <Canvas camera={{ position: [3, 0, 8], fov: 45 }}>
          <OrbitControls target={[3, 0, 0]} enableZoom={false} enablePan={false} enableRotate={false} />
          <Background />
        </Canvas>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <ExpertiseSection />
        <PressSection />
        <CopyrightFooter />
        <LinkedInButton />
      </motion.div>
    </>
  );
}