import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  start?: boolean;
  suffix?: string;
  prefix?: string;
}

const Counter = ({ end, duration = 2000, start = false, suffix = "", prefix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(end * easeOutCubic);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [start, end, duration]);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <span className="counter-animate">
      {prefix}{formatNumber(count)}{suffix}
    </span>
  );
};

export default Counter;
