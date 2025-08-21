import AboutEvent from "@/components/about-event";
import CMQuote from "@/components/cm-quote";
//import ECellAwards from "@/components/ecell-awards";
import EventTablePopup from "@/components/eventtable";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import OurStats from "@/components/our-stats";
import NotificationButton from "@/components/notification";
{
  /*import Schedule from "@/components/schedule";*/
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <CMQuote />
      <AboutEvent />
      <div id="event-table">
        <EventTablePopup/>
      </div>
      <OurStats />
      <FAQSection />
      <Footer />
      <NotificationButton />
    </>
  );
}
