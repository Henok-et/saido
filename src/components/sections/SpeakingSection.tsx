import { AnimatedSection } from "../ui/AnimatedSection";
import { MapPin, Calendar, ExternalLink, Mic } from "lucide-react";

export function SpeakingSection({ data }: { data?: any[] }) {
  const events = data && data.length > 0 ? data : [
    {
      _id: "1",
      title: "Building Resilient Digital Economies",
      event: "World Economic Forum Annual Meeting",
      role: "Keynote Speaker",
      date: "January 15, 2024",
      location: "Davos, Switzerland",
    },
    {
      _id: "2",
      title: "Financing the Green Transition",
      event: "COP28 Climate Summit",
      role: "Panelist",
      date: "December 5, 2023",
      location: "Dubai, UAE",
    },
    {
      _id: "3",
      title: "Youth Innovation in Africa",
      event: "Africa Tech Summit",
      role: "Chair",
      date: "February 20, 2023",
      location: "Kigali, Rwanda",
    }
  ];

  return (
    <AnimatedSection id="speaking" className="section-padding bg-white dark:bg-executive-darkBg relative overflow-hidden border-t border-gray-100 dark:border-gray-800">
      
      {/* Background Icon Watermark */}
      <div className="absolute right-0 bottom-0 opacity-5 dark:opacity-[0.02] transform translate-x-1/4 translate-y-1/4 pointer-events-none">
        <Mic className="w-[500px] h-[500px] text-executive-blue dark:text-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="section-label mb-3 block">Public Appearances</span>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
            Speaking Engagements
          </h2>
          <div className="mt-4 h-[2px] w-16 bg-executive-gold rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((evt: any) => (
            <div key={evt._id} className="executive-card p-8 flex flex-col group hover:border-executive-gold/40 hover:shadow-xl transition-all duration-300 relative bg-white dark:bg-executive-darkSurface">
              
              <div className="absolute top-0 left-0 w-full h-1 bg-executive-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />

              <span className="inline-block px-3 py-1 bg-executive-blue/5 dark:bg-white/5 text-executive-blue dark:text-executive-gold text-xs font-bold tracking-wider uppercase rounded-full mb-5 w-fit">
                {evt.role || "Speaker"}
              </span>
              
              <h3 className="text-2xl font-playfair font-bold text-gray-900 dark:text-white mb-3 leading-tight group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors">
                {evt.title}
              </h3>
              
              <p className="text-sm font-bold text-gray-600 dark:text-gray-300 mb-8 flex-1">
                {evt.event}
              </p>
              
              <div className="mt-auto space-y-3 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-black/20 p-4 rounded-xl">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-3 text-executive-gold" />
                  {evt.date}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-executive-gold" />
                  {evt.location}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-800">
                 <a href={evt.link || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-gray-900 dark:text-white group-hover:text-executive-gold transition-colors">
                  View Details <ExternalLink className="ml-1.5 w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
