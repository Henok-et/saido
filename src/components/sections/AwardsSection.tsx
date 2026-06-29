import { AnimatedSection } from "../ui/AnimatedSection";
import { Trophy, Star } from "lucide-react";
import { PendingContent } from "../ui/PendingContent";

interface AwardItem {
  _id: string;
  title: string;
  organization: string;
  year?: string;
  description?: string;
}

export function AwardsSection({ data }: { data?: AwardItem[] }) {
  if (!data || data.length === 0) {
    return <PendingContent sectionName="Awards & Honors" />;
  }
  const awards = data;

  return (
    <AnimatedSection
      id="awards"
      className="section-padding relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #071525 0%, #0F2D52 100%)" } as React.CSSProperties}
    >
      {/* Gold radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-executive-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-executive-gold/40 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label mb-3 block">Recognition</span>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white">
            Awards & <span className="text-gradient-gold">Honors</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Distinguished recognition from the Republic of Niger and continental academic institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, idx) => (
            <div
              key={award._id}
              className="group relative glass-card rounded-2xl p-8 hover:border-executive-gold/40 hover:bg-white/[0.09] transition-all duration-300"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-executive-gold/50 to-transparent" />

              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-executive-gold/15 border border-executive-gold/25 flex items-center justify-center group-hover:bg-executive-gold/25 transition-colors">
                  <Trophy className="w-6 h-6 text-executive-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair font-bold text-lg text-white mb-2 leading-tight">
                    {award.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-3.5 h-3.5 text-executive-gold fill-executive-gold" />
                    <span className="text-sm font-semibold text-executive-gold">{award.organization}</span>
                    {award.year && <span className="text-gray-500 text-sm">· {award.year}</span>}
                  </div>
                  {award.description && (
                    <p className="text-sm text-gray-400 leading-relaxed">{award.description}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
