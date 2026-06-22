import { AnimatedSection } from "../ui/AnimatedSection";
import { Landmark } from "lucide-react";

interface LeadershipRole {
  _id: string;
  role: string;
  committee?: string;
  organization?: string;
  period?: string;
}

export function LeadershipGovernanceSection({ data }: { data?: LeadershipRole[] }) {
  const roles = data && data.length > 0 ? data : [
    {
      _id: "1",
      role: "General Rapporteur",
      committee: "Specialized Technical Committee (Mathematics-Physics-Chemistry)",
      organization: "African and Malagasy Council for Higher Education (CAMES)",
      period: "2021–2023",
    },
    {
      _id: "2",
      role: "Member",
      committee: "Specialized Technical Committee (Mathematics-Physics-Chemistry)",
      organization: "CAMES",
      period: "2016–2023",
    },
    {
      _id: "3",
      role: "Member",
      committee: "Scientific Council",
      organization: "Abdou Moumouni University",
      period: "2021–2024",
    },
    {
      _id: "4",
      role: "Chairman",
      committee: "Scientific and Teaching Council",
      organization: "École Supérieure de Communication Électronique et de la Poste",
      period: "Previous",
    }
  ];

  return (
    <AnimatedSection id="governance" className="section-padding bg-gray-50 dark:bg-executive-darkSurface relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-executive-gold/3 blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="section-label mb-3 block">Continental Impact</span>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-gray-900 dark:text-white">
             Academic Governance & Leadership
          </h2>
          <div className="mt-4 h-[2px] w-16 bg-executive-gold rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role) => (
            <div key={role._id} className="executive-card p-8 group hover:border-executive-gold/40 hover:shadow-xl transition-all duration-300 flex items-start space-x-5 relative overflow-hidden bg-white dark:bg-executive-darkBg">
               {/* Hover Accent Line */}
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-executive-gold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
               
              <div className="flex-shrink-0 p-3.5 bg-gray-50 dark:bg-white/5 rounded-xl text-executive-blue dark:text-executive-gold group-hover:bg-executive-blue/10 dark:group-hover:bg-executive-gold/10 transition-colors">
                <Landmark className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white leading-tight group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors">
                    {role.role}
                    </h4>
                    {role.period && <span className="inline-block px-3 py-1 bg-executive-gold/10 text-executive-gold text-xs font-bold rounded-full whitespace-nowrap">{role.period}</span>}
                </div>
                {role.committee && <p className="text-sm text-gray-800 dark:text-gray-200 mb-1.5 font-semibold leading-relaxed">{role.committee}</p>}
                {role.organization && <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{role.organization}</p>}
              </div>
            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
