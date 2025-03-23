
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({ 
  children, 
  className 
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500",
        "bg-[length:200%_200%] animate-shimmer",
        className
      )}
    >
      {children}
    </motion.h2>
  );
};

export default AnimatedGradientText;
