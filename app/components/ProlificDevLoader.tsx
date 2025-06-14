"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const dots = [0, 1, 2, 3];

const ProlificDevLoader: FC = () => {
  return (
    <div className="h-screen w-full bg-[#0a0a0f] flex items-center justify-center">
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 2,
        }}
      >
        {dots.map((i) => (
          <motion.span
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              top: `${50 + Math.sin((i / dots.length) * 2 * Math.PI) * 40}%`,
              left: `${50 + Math.cos((i / dots.length) * 2 * Math.PI) * 40}%`,
              backgroundColor: ["#7f5af0", "#1f2937", "#00ffcc", "#64748b"][i],
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: i * 0.2,
            }}
          />
        ))}

        <motion.div
          className="absolute text-white font-mono text-xs sm:text-sm tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          &lt;Prolific<span className="text-indigo-500">Dev</span> /&gt;
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProlificDevLoader;
