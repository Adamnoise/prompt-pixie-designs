
import React from 'react';
import { cn } from '@/lib/utils';

interface PopularBadgeProps {
  label: string;
  className?: string;
}

const PopularBadge: React.FC<PopularBadgeProps> = ({ label, className }) => {
  return (
    <div 
      className={cn(
        "px-4 py-1 bg-blue-500 text-white text-xs font-medium rounded-full",
        className
      )}
    >
      {label}
    </div>
  );
};

export default PopularBadge;
