import { AnimatedSection } from "../ui/AnimatedSection";
import { Quote } from "lucide-react";
import Image from "next/image";
import { PendingContent } from "../ui/PendingContent";

interface TestimonialItem {
  _id: string;
  quote: string;
  author: string;
  title?: string;
  organization?: string;
  imageUrl?: string;
}

export function TestimonialsSection({ data }: { data?: TestimonialItem[] }) {
  if (!data || data.length === 0) {
    return <PendingContent sectionName="Testimonials" />;
  }
  const testimonials = data;

  return (
    <AnimatedSection
      id="testimonials"
      className="section-padding bg-white dark:bg-executive-darkBg relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-executive-blue/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-executive-gold/4 blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-3 block">Endorsements</span>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-gray-900 dark:text-white">
            What Leaders Say
          </h2>
          <div className="mt-4 h-[2px] w-16 bg-executive-gold rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <div
              key={test._id}
              className="relative group bg-gray-50 dark:bg-executive-darkSurface rounded-2xl p-8 md:p-10 border border-gray-100 dark:border-gray-800 hover:border-executive-gold/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Large decorative quote mark */}
              <div className="absolute top-6 right-8 font-playfair text-[100px] leading-none text-executive-gold/8 select-none pointer-events-none">
                "
              </div>

              {/* Gold top accent line */}
              <div className="w-12 h-[3px] bg-executive-gold rounded-full mb-6" />

              <blockquote className="relative z-10 mb-8">
                <p className="font-playfair italic text-lg md:text-xl leading-relaxed text-gray-700 dark:text-gray-200">
                  "{test.quote}"
                </p>
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-executive-gold flex-shrink-0 relative bg-executive-blue/10">
                  {test.imageUrl ? (
                    <Image src={test.imageUrl} alt={test.author} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-executive-gold font-bold font-playfair text-lg">
                      {test.author.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <cite className="not-italic font-bold text-gray-900 dark:text-white block">{test.author}</cite>
                  <span className="text-sm text-executive-gold">
                    {test.title}{test.title && test.organization ? ", " : ""}{test.organization}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
