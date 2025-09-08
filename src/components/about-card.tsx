import { Badge } from "@/components/ui/badge";
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import Grid from "@/components/grid-bg";

interface AboutCardProps {
  id: string;
  title: string;
  description: string;
  prizeAmount: string;
  regFee: string;
  imageSrc: string;
}

export default function AboutCard({
  
  title,
  
}: AboutCardProps) {
  // Show closed registration message for all events including IP-to-IPO
  return (
    <div className="relative flex flex-col justify-center items-center text-center bg-black bg-opacity-70 p-6 rounded-3xl border border-gray-600 overflow-hidden min-h-[200px]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Grid size={20} />
      <div className="relative z-10 flex flex-col items-center space-y-4">
        <TypographyH4 className="text-[22px] text-white opacity-60">
          {title}
        </TypographyH4>
        <div className="text-center space-y-2">
          <TypographyP className="text-white font-semibold text-lg">
            Registrations Closed
          </TypographyP>
          <TypographyP className="text-white text-sm">
            See you soon in Startify 4.0
          </TypographyP>
        </div>
      </div>
      <Badge
        variant="secondary"
        className="absolute bottom-2 right-2 bg-gray-600 text-white"
      >
        Closed
      </Badge>
    </div>
  );
}