"use client";

import { useState } from "react";
import { PortableText } from "@portabletext/react";
import { ChevronDown } from "lucide-react";

export function ExpandableBio({ value }: { value: any }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative">
      <div
        className={`prose dark:prose-invert max-w-none measure text-gray-700 dark:text-gray-300 type-lead space-y-5 overflow-hidden transition-[max-height] duration-500 ease-premium ${
          expanded ? "max-h-[5000px]" : "max-h-[13.5rem]"
        }`}
      >
        <PortableText value={value} />
      </div>

      {!expanded && (
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white dark:from-executive-darkBg to-transparent pointer-events-none" />
      )}

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-executive-blue dark:text-executive-gold hover:underline"
      >
        {expanded ? "Show less" : "Read full biography"}
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
      </button>
    </div>
  );
}
