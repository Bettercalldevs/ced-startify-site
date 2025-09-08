import { useState } from "react";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { TypographyH4, TypographyP } from "@/components/ui/typography";
import { ScrollArea } from "@/components/ui/scroll-area";
import EventDetailsDialog from "@/components/event-detail";
import Grid from "@/components/grid-bg";

import StartupCafeForm from "@/components/event-forms/startup-cafe";
import StartupMughavariForm from "@/components/event-forms/startup-mughavari";
import InternHuntForm from "@/components/event-forms/intern-hunt";
import StartupAtlasForm from "@/components/event-forms/startup-atlas";
import ScholarSpinOffForm from "@/components/event-forms/scholar-spinoff";
import StartUpPathFinderForm from "@/components/event-forms/startup-path-finder";
import PitchXForm from "@/components/event-forms/pitch-x";
import GurusPitchForm from "@/components/event-forms/guru-pitch";
import StartupDistrictForm from "@/components/event-forms/startup-district";
import GoldenStarECellAwardsForm from "@/components/event-forms/golden-ecell";
import FounderFindForm from "@/components/event-forms/founder-find";
import IpToIpoForm from "./event-forms/ip-to-ipo";

interface AboutCardProps {
  id: string;
  title: string;
  description: string;
  prizeAmount: string;
  regFee: string;
  imageSrc: string;
}

export default function AboutCard({
  id,
  title,
  description,
  prizeAmount,
  regFee,
  imageSrc,
}: AboutCardProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const formComponents: {
    [key: string]: React.FC<{ onPaymentBtnOpen: (open: boolean) => void }>;
  } = {
    "startup-cafe": StartupCafeForm,
    "startup-mughavari": StartupMughavariForm,
    "intern-hunt": InternHuntForm,
    "startup-atlas": StartupAtlasForm,
    "scholars-spin-off": ScholarSpinOffForm,
    "path-finder": StartUpPathFinderForm,
    "pitch-x": PitchXForm,
    "gurus-pitch": GurusPitchForm,
    "founder-find": FounderFindForm,
    "startup-district": StartupDistrictForm,
    "e-cell-awards": GoldenStarECellAwardsForm,
    "ip-to-ipo": IpToIpoForm,
  };

  const FormComponent = formComponents[id];
  // Show closed registration message for all events
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