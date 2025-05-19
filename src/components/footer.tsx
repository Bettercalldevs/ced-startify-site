import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  Globe
} from "lucide-react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { navlinks } from "@/data";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const SocialMediaLinks = () => (
  <div className="flex items-center space-x-4">
    {[
      { href: "#", Icon: Facebook, name: "Facebook", color: "hover:text-blue-600" },
      { href: "#", Icon: Twitter, name: "Twitter", color: "hover:text-sky-500" },
      { href: "#", Icon: Instagram, name: "Instagram", color: "hover:text-pink-600" },
      { href: "#", Icon: Linkedin, name: "LinkedIn", color: "hover:text-blue-700" },
      { href: "#", Icon: Globe, name: "Website", color: "hover:text-green-600" },
    ].map(({ href, Icon, name, color }) => (
      <a
        key={name}
        href={href}
        className={`group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 ${color}`}
        aria-label={name}
      >
        <Icon className="h-5 w-5 transition-transform duration-300 ease-in-out group-hover:scale-110" />
      </a>
    ))}
  </div>
);

const NavLinks = () => (
  <div className="grid grid-cols-2 gap-x-8 gap-y-2">
    {navlinks.map((navlink) => (
      <a
        key={navlink.name}
        href={navlink.href}
        className="text-sm text-muted-foreground transition-all duration-300 ease-in-out hover:text-purple-500 hover:translate-x-1"
      >
        {navlink.name}
      </a>
    ))}
  </div>
);

const Address = () => (
  <address className="flex flex-col space-y-3 text-sm text-muted-foreground not-italic">
    <div className="flex items-start">
      <MapPin className="mr-2 mt-1 size-4 text-purple-500" />
      <span>
        <a
          href="https://www.google.com/maps/dir//302,+2nd+Floor,+Platinum+Jubilee+Building+AC+Tech+Campus,+Sardar+Patel+Rd,+Anna+University,+Guindy,+Chennai,+Tamil+Nadu+600025/@13.0087452,80.1550457,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3a5267c89a1b24f9:0x7941fa43c361fff0!2m2!1d80.2374476!2d13.0087582?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          302, 2nd Floor, Platinum Jubilee Building AC Tech Campus, Sardar Patel
          Rd, Anna University, Guindy, Chennai, Tamil Nadu, 600025
        </a>
      </span>
    </div>
    <div className="flex items-center">
      <Phone className="mr-2 size-4 text-purple-500" />
      <a href="tel:044 22359289" className="hover:text-purple-500">
        044 22359289
      </a>
    </div>
    <div className="flex items-center">
      <Phone className="mr-2 size-4 text-purple-500" />
      <a href="tel:044 22359287" className="hover:text-purple-500">
        044 22359287
      </a>
    </div>
    <div className="flex items-center">
      <Mail className="mr-2 size-4 text-purple-500" />
      <a
        href="mailto:cedau.outreach@gmail.com"
        className="hover:text-purple-500"
      >
        cedau.outreach@gmail.com
      </a>
    </div>
  </address>
);

const PolicyLinks = () => (
  <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
    {[
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Refund Policy", href: "/refund-policy" },
      { name: "Terms and Conditions", href: "/terms-and-conditions" },
    ].map(({ name, href }) => (
      <a
        key={name}
        href={href}
        className="text-sm text-muted-foreground transition-all duration-300 ease-in-out hover:text-purple-500 hover:underline"
      >
        {name}
      </a>
    ))}
  </div>
);

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Card
      id="contact"
      className="relative w-full overflow-hidden rounded-t-xl border-t bg-gradient-to-b from-background/80 to-secondary/30 shadow-lg backdrop-blur-sm"
    >
      {/* Glass effect decorative elements */}
      <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl"></div>
      <div className="absolute left-1/2 top-1/3 h-40 w-40 -translate-x-1/2 rounded-full bg-pink-500/10 blur-3xl"></div>
      
      <CardContent className="relative p-6 pb-1 sm:p-8">
        <div className="relative">
          <Button
            onClick={scrollToTop}
            className="absolute -top-16 right-0 rounded-full bg-purple-600/90 p-2 text-white shadow-lg backdrop-blur-sm transition-all hover:bg-purple-700 hover:shadow-purple-300/50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo Section */}
          <div className="flex flex-col space-y-6">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
              <img
                src="/images/anna_univ_logo.webp"
                alt="Anna University Logo"
                className="size-14 sm:size-16"
              />
              <img
                src="/images/ced_logo.webp"
                alt="CED Logo"
                className="size-14 sm:size-16"
              />
              <img
                src="/images/footer_logo.png"
                alt="Startify Logo"
                className="h-16 w-auto sm:h-20"
              />
            </div>
            <div className="rounded-lg bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-sm text-muted-foreground">
                Startify 3.0 is an International Student Startup Ecosystem Conclave organized by 
                the Centre for Entrepreneurship Development, Anna University.
              </p>
            </div>
            <SocialMediaLinks />
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Quick Links</h2>
            <Separator className="w-16 bg-purple-500" />
            <div className="rounded-lg bg-white/5 p-4 backdrop-blur-sm">
              <NavLinks />
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Contact Us</h2>
            <Separator className="w-16 bg-purple-500" />
            <div className="rounded-lg bg-white/5 p-4 backdrop-blur-sm">
              <Address />
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="relative z-10 flex flex-col border-t border-border/40 bg-white/5 px-6 py-4 backdrop-blur-sm">
        {/* Footer Bottom */}
        <div className="flex w-full flex-col items-center justify-between gap-4 pt-2 text-center sm:flex-row sm:text-left">
          {/* Copyright - Left */}
          <div className="w-full sm:w-1/3 order-1">
            <p className="text-xs text-muted-foreground sm:text-sm">
              © 2024 Centre for Entrepreneurship Development, Anna University. All rights reserved.
            </p>
          </div>

          {/* Designed with love - Center */}
          <div className="w-full sm:w-1/3 flex justify-center order-3 sm:order-2">
            <p className="flex flex-wrap items-center justify-center text-xs text-muted-foreground sm:text-sm">
              Designed with{" "}
              <Heart 
                className="mx-1 size-3 text-red-500 sm:size-4 animate-pulse" 
                aria-label="love" 
              /> 
              by
              <span className="ml-1 font-bold italic">
                <a
                  href="https://www.linkedin.com/in/cibisuryaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:underline"
                >
                  Cibi
                </a>{" "}
                &{" "}
                <a
                  href="https://www.linkedin.com/in/omprakash-d/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-500 hover:underline"
                >
                  Om
                </a>
              </span>
            </p>
          </div>

          {/* Policy Links - Right */}
          <div className="w-full sm:w-1/3 order-2 sm:order-3">
            <div className="flex justify-center sm:justify-end">
              <PolicyLinks />
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
