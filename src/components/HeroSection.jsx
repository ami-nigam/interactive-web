import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { componentStyles, designSystem, content, typography, colors } from '../App';

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} style={componentStyles.heroSection}>
      <motion.div 
        style={{ 
          maxWidth: designSystem.layout.maxWidth, 
          width: '100%',
          y,
          opacity
        }}
      >
        <motion.h1 
          style={componentStyles.heroName}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: designSystem.animations.easing,
            delay: 0.2
          }}
        >
          {content.hero.name}
          <motion.span 
            style={componentStyles.heroSurname}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: designSystem.animations.easing,
              delay: 0.4
            }}
          >
            {content.hero.surname}
          </motion.span>
        </motion.h1>
        
        <motion.h2 
          style={componentStyles.heroTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: designSystem.animations.easing,
            delay: 0.6
          }}
        >
          {content.hero.title}
        </motion.h2>
        
        <motion.h3 
          style={componentStyles.heroSubtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: designSystem.animations.easing,
            delay: 0.8
          }}
        >
          {content.hero.subtitle}
        </motion.h3>
        
        <motion.div 
          style={componentStyles.heroAbout}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: designSystem.animations.easing,
            delay: 1
          }}
        >
          <DramatizedText
            text={content.about.text}
            phrases={content.about.emphasize}
            companyLinks={content.about.companyLinks}
            variant="hero"
            showFirstSentenceImmediately={true}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection; 