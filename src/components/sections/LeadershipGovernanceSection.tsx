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
    <AnimatedSection id="governance" className="section-padding bg-gray-50 dark:bg-executive-darkSurface border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-executive-gold uppercase mb-2">Continental Impact</h2>
          <h3 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 dark:text-white">Academic Governance & Continental Leadership</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role) => (
            <div key={role._id} className="executive-card p-6 group hover:shadow-md transition-shadow flex items-start space-x-4">
              <div className="flex-shrink-0 p-3 bg-executive-blue/5 dark:bg-white/5 rounded-full text-executive-blue dark:text-executive-gold">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-executive-blue dark:group-hover:text-executive-gold transition-colors">
                  {role.role}
                </h4>
                {role.period && <div className="text-sm font-medium text-executive-gold mb-2">{role.period}</div>}
                {role.committee && <p className="text-sm text-gray-700 dark:text-gray-300 mb-1 font-semibold">{role.committee}</p>}
                {role.organization && <p className="text-sm text-gray-600 dark:text-gray-400">{role.organization}</p>}
              </div>
            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}
