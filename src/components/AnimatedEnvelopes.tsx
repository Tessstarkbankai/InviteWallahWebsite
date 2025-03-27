import React from 'react';
import { Mail } from 'lucide-react';

const AnimatedEnvelopes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute animate-float opacity-50 ${
            i % 2 === 0 ? 'left-1/4' : 'right-1/4'
          } ${i % 3 === 0 ? 'top-1/4' : 'bottom-1/4'}`}
          style={{
            animation: `float 15s infinite ${i * 2}s ease-in-out, 
                       sway ${8 + i}s infinite ${i}s ease-in-out`,
            transform: `rotate(${i * 45}deg)`,
          }}
        >
          <Mail
            size={i % 2 === 0 ? 48 : 32}
            className="text-white"
            strokeWidth={1.5}
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedEnvelopes;