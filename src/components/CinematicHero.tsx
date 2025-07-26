import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const CinematicHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [logoLoaded, setLogoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({

      {/* Main Content */}
      <div className="relative z-30 flex items-center justify-center min-h-screen px-4 md:px-6">
        <motion.div className="text-center max-w-6xl" style={{ y: textY }}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 3, ease: "easeOut" }}
          >
            {/* Cinematic Title */}
            <div className="relative flex items-center justify-center py-12 md:py-24">
              <div className="sticky top-[20vh] z-30">
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none text-center"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #D4AF37 50%, #ffffff 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 50px rgba(212, 175, 55, 0.3)',
                    backgroundSize: '200% auto',
                  }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    opacity: { duration: 1.2, delay: 1 },
                    backgroundPosition: {
                      duration: 6,
                      ease: "easeInOut",
                      repeat: Infinity
                    }
                  }}
                >
                  <br />
                  <span className="text-accent-gold"> </span>
                </motion.h1>
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4.5 }}
              style={{
                filter: 'blur(0px)',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
              }}
            >
              <br className="hidden sm:block" />
            </motion.p>

            {/* CTA Buttons */}
            <div className="mt-80 md:mt-56">
              <motion.div
                className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 5 }}
              >
                <motion.button
                  className="group relative bg-accent-gold text-black px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-lg md:text-xl overflow-hidden w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow: '0 0 50px rgba(212, 175, 55, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  }}
                  onClick={() =>
                    window.open('https://calendly.com/championlifestyle-yash/30min?month=2025-07', '_blank')
                  }
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <span className="relative z-10 flex items-center justify-center space-x-2 md:space-x-3">
                    <span>Begin Transformation</span>
                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                </motion.button>

                <motion.button
                  className="group flex items-center space-x-3 md:space-x-4 text-white/90 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open('https://youtu.be/zoLP2Q0k6dE?si=ynVrRWElYFoa8aHU', '_blank')
                  }
                >
                  <Play className="w-6 h-6 md:w-8 md:h-8 ml-1" />
                  <span className="font-semibold text-lg md:text-xl">Watch Transformations</span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicHero;
