// components/AnimatedDivider.tsx
'use client'; // if using Next 13+ with app directory

import { motion } from 'framer-motion';

export default function AnimatedDivider() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '30%' }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      className="h-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full shadow-lg"
    />
  );
}
