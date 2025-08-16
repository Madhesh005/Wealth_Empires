import { useEffect, useRef } from "react";
import Counter from "@/components/ui/counter";
import { useCountUp } from "@/hooks/use-counter";

const Statistics = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { startCount, hasStarted } = useCountUp();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          startCount();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [startCount, hasStarted]);

  const stats = [
    { value: 940085, label: "Wealth Created (INR)", suffix: "" },
    { value: 290900, label: "Tax Saved (INR)", suffix: "" },
    { value: 16, label: "Happy Clients", suffix: "" },
    { value: 25, label: "Dedicated Professionals", suffix: "" },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-wealth-gold mb-2">
                <Counter
                  end={stat.value}
                  duration={2000}
                  start={hasStarted}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-wealth-slate font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
