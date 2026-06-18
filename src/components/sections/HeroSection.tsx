import Image from "next/image";
import { AnimatedSection } from "../ui/AnimatedSection";

interface HeroData {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  biographyUrl?: string;
}

export function HeroSection({ data }: { data?: HeroData }) {
  const title = data?.title;
  const subtitle = data?.subtitle;
  const description = data?.description;
  const imageUrl = data?.imageUrl;

  return (
    <AnimatedSection
      id="hero"
      className="relative h-[calc(100vh-80px)] min-h-[600px] flex items-center overflow-hidden bg-executive-blue dark:bg-executive-darkBg"
    >
      {/* Full-screen Background Image — anchored LEFT so the face/subject is visible */}
      {imageUrl && (
        <div className="absolute inset-0 w-full h-full z-0 select-none">
          <Image
            src={imageUrl}
            alt={title || "Hero Background"}
            fill
            priority
            className="object-cover object-left"
          />
          {/* Gradient: almost transparent on the left (image clearly visible), fades to deep blue on the right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.08) 35%, rgba(15,45,82,0.75) 58%, rgba(15,45,82,0.95) 75%, #0F2D52 100%)",
            }}
          />
        </div>
      )}

      {/* Placeholder background when no image */}
      {!imageUrl && (
        <div className="absolute inset-0 w-full h-full z-0 bg-executive-blue" />
      )}

      {/* Text content — grouped on the RIGHT side */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
        <div className="w-full max-w-lg flex flex-col items-end text-right">

          {/* Subtitle / moto — gold, above the name */}
          <p className="text-executive-gold text-lg sm:text-xl md:text-2xl font-inter font-medium mb-4 tracking-wide uppercase">
            {subtitle || "Welcome"}
          </p>

          {/* Name / title — large white */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight mb-6">
            {title || "Saido"}
          </h1>

          {/* Thin gold divider */}
          <div className="w-24 h-[2px] bg-executive-gold mb-6" />

          {/* Description — grey, below divider */}
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-sm">
            {description || "Empowering research and collaboration."}
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
