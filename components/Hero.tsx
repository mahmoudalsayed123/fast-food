"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

/* ================= TEXT ANIMATION ================= */

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.035 },
  },
};

const letter = {
  hidden: { y: 40, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

/* ================= MAGNETIC BUTTON ================= */

function MagneticButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 150, damping: 12 });
  const smoothY = useSpring(y, { stiffness: 150, damping: 12 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    x.set((e.nativeEvent.offsetX - centerX) * 0.25);
    y.set((e.nativeEvent.offsetY - centerY) * 0.25);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: smoothX, y: smoothY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

/* ================= PARTICLES ================= */

function Particles() {
  return (
    <>
      {[...Array(16)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-primary/60 rounded-full blur-[1px]"
          style={{
            top: `${Math.random() * 90}%`,
            left: `${Math.random() * 90}%`,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothX = useSpring(rotateX, { stiffness: 100, damping: 20 });
  const smoothY = useSpring(rotateY, { stiffness: 100, damping: 20 });

  const shadowX = useTransform(smoothY, [-20, 20], [-30, 30]);
  const shadowY = useTransform(smoothX, [-20, 20], [-30, 30]);

  const textX = useTransform(smoothY, [-20, 20], [15, -15]);
  const textY = useTransform(smoothX, [-20, 20], [15, -15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateY.set((x - centerX) * 0.06);
    rotateX.set(-(y - centerY) * 0.06);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <section className="relative pt-[70px] h-[calc(100vh-66.71px)] overflow-hidden sm:ps-[40px]">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/10"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Glow Pulse */}
      <motion.div
        className="absolute right-[-200px] top-[50px] w-[600px] h-[600px] bg-primary/25 blur-[180px] rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Particles />

      <div className="flex items-center justify-center gap-[120px] p-7  relative z-10">
        {/* LEFT SIDE */}
        <motion.div
          style={{ x: textX, y: textY }}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center lg:items-start"
        >
          {/* Title */}
          <motion.div
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-display text-[35px] sm:text-[60px] md:text-[68px] lg:text-[72px] leading-tight text-center lg:text-left w-[600px]"
          >
            {/* LINE 1 */}
            {"FAST FOOD,".split("").map((char, i) => (
              <motion.span key={`line1-${i}`} variants={letter}>
                {char}
              </motion.span>
            ))}

            <br />

            {/* LINE 2 WITH GRADIENT */}
            <span className="text-transparent bg-clip-text bg-linear-to-br from-primary via-primary to-accent">
              {"FAST DELIVERY.".split("").map((char, i) => (
                <motion.span key={`line2-${i}`} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.div>

          <p className="text-body text-center md:text-left text-muted-foreground mt-6 w-[300px] sm:w-[500px] leading-7">
            Premium ingredients, bold flavors, and lightning-fast delivery.
            Experience the next generation of fast food.
          </p>

          <div className="flex gap-4 mt-8">
            <Link href="/">
              <MagneticButton className="button-primary rounded-sm px-4 py-2 sm:px-6 sm:py-3  font-semibold text-[14px] sm:text-[16px]">
                Browse Menu
              </MagneticButton>
            </Link>

            <Link href="/">
              <MagneticButton className="bg-navLinks hover:bg-navLinks/80 rounded-sm px-4 py-2 sm:px-6 sm:py-3 font-semibold  text-[14px] sm:text-[16px]">
                Build Your Burger
              </MagneticButton>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE – BURGER */}
        <div className="hidden lg:block perspective-[1600px] me-[100px]">
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: smoothX,
              rotateY: smoothY,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.8, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <motion.div
              style={{ x: shadowX, y: shadowY }}
              className="absolute inset-0 bg-black/40 blur-3xl rounded-full translate-y-28"
            />

            <motion.img
              src="/assets/icons/burger_img.png"
              alt="burger"
              className="w-[550px] relative z-10 drop-shadow-[0_60px_70px_rgba(0,0,0,0.6)]"
              animate={{
                y: [0, -25, 0],
                rotateZ: [0, 1.2, 0, -1.2, 0],
              }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                rotateZ: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
