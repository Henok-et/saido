import { AnimatedSection } from "../ui/AnimatedSection";
import { MapPin, Calendar, ExternalLink } from "lucide-react";

export function SpeakingSection() {
  const events = [
    {
      id: 1,
      title: "Building Resilient Digital Economies",
      event: "World Economic Forum Annual Meeting",
      role: "Keynote Speaker",
      date: "January 15, 2024",
      location: "Davos, Switzerland",
    },
    {
      id: 2,
      title: "Financing the Green Transition",
      event: "COP28 Climate Summit",
      role: "Panelist",
      date: "December 5, 2023",
      location: "Dubai, UAE",
    },
    {
      id: 3,
      title: "Youth Innovation in Africa",
      event: "Africa Tech Summit",
      role: "Chair",
      date: "February 20, 2023",
      location: "Kigali, Rwanda",
    }
  ];

  return (
    <AnimatedSection id="speaking" className="section-padding bg-white dark:bg-executive-darkBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-executive-gold uppercase mb-2">Public Appearances</h2>
          <h3 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 dark:text-white">Speaking Engagements</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((evt) => (
            <div key={evt.id} className="executive-card p-6 flex flex-col group">
              <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs font-semibold rounded-sm mb-4 w-fit">
                {evt.role}
              </span>
              
              <h4 className="text-xl font-playfair font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                {evt.title}
              </h4>
              
              <p className="text-sm font-medium text-executive-blue dark:text-executive-gold mb-6">
                {evt.event}
              </p>
              
              <div className="mt-auto space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 opacity-70" />
                  {evt.date}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 opacity-70" />
                  {evt.location}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                 <a href="#" className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white group-hover:text-executive-gold transition-colors">
                  View Details <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
