import Button from "./Button";
import Section from "./Section";
import { BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";


const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] m-auto"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
  >
      <div className="container relative m-auto justify-between" ref={parallaxRef}>
        <div className="m-auto relative z-1 text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem] place-items-center">
          <h1 className="h1 mb-6 mt-6 text-neutral-50 m-auto font-semibold">
            Explore the Possibilities of AI Chatting with {` `}
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-neutral-50 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing"  className="text-neutral-50 bg-black hover:font-semibold">
            Get started
          </Button>
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <Gradient />
          </div>
        </div>
        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;