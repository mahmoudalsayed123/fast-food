"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const EarnRewards = () => {
  const ref = useRef<HTMLDivElement>(null);

  // rotation values
  const rotateX = useMotionValue(-10); // initial tilt
  const rotateY = useMotionValue(15);

  // smooth spring
  const smoothX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  // light reflection effect
  const glareX = useTransform(smoothY, [-30, 30], ["0%", "100%"]);
  const glareY = useTransform(smoothX, [-30, 30], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    rotateX.set(-yPct * 25);
    rotateY.set(xPct * 25);
  }

  function handleMouseLeave() {
    rotateX.set(-10);
    rotateY.set(15);
  }
  return (
    <section className="relative flex flex-col md:flex-row items-center gap-[20px] pt-[100px] p-[20px] pe-0">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: smoothX,
          rotateY: smoothY,
          transformStyle: "preserve-3d",
        }}
        className="relative md:bottom-[70px] md:left-0 w-[380px] h-[220px] md:w-[300px] md:h-[200px] lg:w-[400px] lg:h-[250px] cursor-pointer me-5 mb-6 sm:mb-0"
      >
        <div className="absolute top-0 right-0 w-full h-[300px] rounded-full bg-yellow-400 blur-[180px] opacity-40" />
        {/* card body */}
        <div
          className="relative w-full h-full md:w-[350px] md:h-[220px] lg:w-[500px] lg:h-[320px] lg:pe-[70px] rounded-2xl overflow-hidden "
          style={{
            transform: "translateZ(40px)",
          }}
        >
          <Image
            src="/assets/icons/rewards.png" // حط صورة الكارت هنا
            alt="Premium Card"
            width={700}
            height={520}
          />

          {/* glare layer */}
          <motion.div className="absolute inset-0 mix-blend-overlay" />
        </div>
      </motion.div>
      <div className="mb-[80px] sm:ps-[20px] w-full">
        <div className="mb-7">
          <h2 className="text-heading sm:text-[44px] lg:text-[52px] text-center sm:text-start mb-3">
            EARN BITES.{" "}
            <p className="text-secondary">
              <span className="text-white">GET</span> REWARDED.
            </p>
          </h2>
          <p className="text-center sm:text-start  sm:max-w-[500px] text-muted-foreground text-[18px]">
            Join our exclusive loyalty program. Earn points on every order,
            unlock free food, and get access to secret menu items.
          </p>
        </div>

        <ul className="flex flex-col items-start mb-7">
          <li className="flex items-center gap-4 mb-7">
            <div className=" w-[50px] h-[50px] flex justify-center items-center bg-secondary/50 rounded-full">
              <Image
                src="/assets/icons/zap.svg"
                alt="zap"
                width={25}
                height={25}
              />
            </div>
            <p className="font-semibold">10 points for every $1 spent</p>
          </li>
          <li className="flex items-center gap-4 mb-7">
            <div className=" w-[50px] h-[50px] flex justify-center items-center bg-secondary/50 rounded-full">
              <Image
                src="/assets/icons/zap.svg"
                alt="zap"
                width={25}
                height={25}
              />
            </div>
            <p className="font-semibold">Free meal on your birthday</p>
          </li>
          <li className="flex items-center gap-4 mb-7">
            <div className=" w-[50px] h-[50px] flex justify-center items-center bg-secondary/50 rounded-full">
              <Image
                src="/assets/icons/zap.svg"
                alt="zap"
                width={25}
                height={25}
              />
            </div>
            <p className="font-semibold">Exclusive access to new items</p>
          </li>
        </ul>
        <div>
          <button className="bg-secondary px-5 py-3 rounded-lg font-semibold m-auto sm:m-0 block cursor-pointer">
            Join For Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default EarnRewards;
