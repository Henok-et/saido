import { Clock } from "lucide-react";

interface PendingContentProps {
  sectionName: string;
  className?: string;
}

export function PendingContent({ sectionName, className = "" }: PendingContentProps) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-6 ${className}`}>
      <div className="w-16 h-16 rounded-2xl bg-executive-gold/10 border border-executive-gold/20 flex items-center justify-center mb-6">
        <Clock className="w-7 h-7 text-executive-gold" />
      </div>
      <h3 className="font-playfair font-bold text-xl text-gray-900 dark:text-white mb-2">
        {sectionName}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center max-w-md">
        Content is pending. This section will be updated once content is added in the CMS.
      </p>
    </div>
  );
}
