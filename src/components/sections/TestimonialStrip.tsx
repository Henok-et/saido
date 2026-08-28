import { Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialItem {
  _id: string;
  quote: string;
  author: string;
  role?: string;
  organization?: string;
  imageUrl?: string;
}

// Optional, embedded credibility strip — not a top-level scene. Renders
// nothing when there's no strong testimonial content, per the IA refactor:
// testimonials support another section rather than standing on their own.
export function TestimonialStrip({ data }: { data?: TestimonialItem[] }) {
  if (!data || data.length === 0) return null;
  const testimonials = data.slice(0, 3);

  return (
    <div className="mt-16 pt-12 border-t border-gray-100 dark:border-gray-800">
      <div className="flex items-center gap-2 mb-8">
        <Quote className="w-4 h-4 text-executive-gold" />
        <span className="text-xs font-bold uppercase tracking-wider text-gold-ink">In Their Words</span>
      </div>

      <div className={`grid grid-cols-1 gap-6 ${testimonials.length > 1 ? "md:grid-cols-2" : ""} ${testimonials.length > 2 ? "lg:grid-cols-3" : ""}`}>
        {testimonials.map((test) => (
          <div
            key={test._id}
            className="relative bg-gray-50 dark:bg-executive-darkSurface rounded-xl p-6 border border-gray-100 dark:border-gray-800"
          >
            <blockquote className="mb-5">
              <p className="font-playfair italic text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                "{test.quote}"
              </p>
            </blockquote>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-executive-gold/40 flex-shrink-0 relative bg-executive-blue/10">
                {test.imageUrl ? (
                  <Image src={test.imageUrl} alt={test.author} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gold-ink font-bold font-playfair text-sm">
                    {test.author.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <cite className="not-italic font-bold text-sm text-gray-900 dark:text-white block">{test.author}</cite>
                <span className="text-xs text-gold-ink">
                  {test.role}{test.role && test.organization ? ", " : ""}{test.organization}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
