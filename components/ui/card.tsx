'use client';

import { motion } from 'framer-motion';
import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glass?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ hover = false, glass = false, className = '', children, ...props }, ref) => {
    const baseStyles = 'rounded-2xl overflow-hidden';
    
    const hoverStyles = hover ? 'hover-card' : '';
    const glassStyles = glass ? 'glass' : 'bg-white dark:bg-gray-900 shadow-xl';

    return (
      <motion.div
        ref={ref as React.Ref<HTMLDivElement>}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`${baseStyles} ${hoverStyles} ${glassStyles} ${className}`}
        {...(props as any)}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
export { Card };
