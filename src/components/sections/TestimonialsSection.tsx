import { AnimatedSection } from "../ui/AnimatedSection";
import { Quote } from "lucide-react";
import Image from "next/image";

interface TestimonialItem {
  _id: string;
  quote: string;
  author: string;
  title?: string;
  organization?: string;
  imageUrl?: string;
}

export function TestimonialsSection({ data }: { data?: TestimonialItem[] }) {
  const testimonials = data && data.length > 0 ? data : [
    {
      _id: "1",
      quote: "Dr. Saido's strategic vision has fundamentally reshaped how we approach sustainable funding in emerging markets. Their leadership was instrumental in the success of the Global Digital Initiative.",
      author: "H.E. Amina Traore",
      title: "Former Minister of Finance",
      organization: "Republic of Mali",
      imageUrl: ""
    },
    {
      _id: "2",
      quote: "A rare combination of rigorous academic insight and pragmatic policy execution. The work done under Dr. Saido's direction stands as a blueprint for modern international development.",
      author: "Prof. James Sterling",
      title: "Director of Global Economics",
      organization: "Oxford Institute for Development",
      imageUrl: ""
    }
  ];

  return (
    <AnimatedSection id="testimonials" className="section-padding bg-executive-blue dark:bg-executive-darkBg text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-executive-gold/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-executive-gold uppercase mb-2">Endorsements</h2>
          <h3 className="text-3xl md:text-4xl font-playfair font-bold">What Leaders Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((test) => (
            <div key={test._id} className="relative">
              <Quote className="absolute -top-4 -left-6 w-16 h-16 text-white/10 dark:text-white/5 transform -scale-x-100" />
              
              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl font-playfair italic leading-relaxed text-gray-100 mb-8">
                  "{test.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full bg-gray-300 dark:bg-gray-800 overflow-hidden mr-4 border-2 border-executive-gold relative">
                     {test.imageUrl ? (
                       <Image src={test.imageUrl} alt={test.author} fill className="object-cover" />
                     ) : (
                       <div className="w-full h-full bg-executive-gold/20 flex items-center justify-center text-executive-gold font-bold text-lg">
                         {test.author.charAt(0)}
                       </div>
                     )}
                  </div>
                  <div>
                    <cite className="not-italic font-bold text-lg text-white block">{test.author}</cite>
                    <span className="text-sm text-executive-gold">{test.title}{test.title && test.organization ? ', ' : ''}{test.organization}</span>
                  </div>
                </div>
              </blockquote>
            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
