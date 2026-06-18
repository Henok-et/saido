import { AnimatedSection } from "../ui/AnimatedSection";

interface MetricItem {
  value: string;
  label: string;
}

export function MetricsSection({ data }: { data?: MetricItem[] }) {
  const metrics = data && data.length > 0 ? data : [
    { value: "20+", label: "Years of Academic Leadership" },
    { value: "50+", label: "Scientific Publications" },
    { value: "40+", label: "International Conferences" },
    { value: "30+", label: "PhD Examination Committees" },
  ];

  return (
    <AnimatedSection id="metrics" className="bg-executive-blue dark:bg-executive-darkBg py-16 border-y-2 border-executive-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h2 className="text-sm font-bold tracking-widest text-executive-gold uppercase mb-2">By the Numbers</h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Continental Leadership through CAMES and the African Union, alongside multiple doctoral supervisions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-playfair font-bold text-executive-gold mb-2">
                {metric.value}
              </div>
              <div className="text-sm md:text-base font-medium text-gray-300">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
