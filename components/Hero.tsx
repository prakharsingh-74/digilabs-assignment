// components/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative bg-[#2B63D9] min-h-[600px] overflow-hidden">
      {/* Background pattern image - positioned to right */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2">
        <Image
          src="/images/hero-pattern.png" 
          alt="Hero pattern background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-2xl text-white">
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Your Supercharged<br />
            Design Workflow.
          </h1>

          {/* Description text */}
          <p className="text-lg opacity-90 mb-8 max-w-lg">
            We've been told it is not possible to overachieve our customers' expectations. 
            We have not reinvented the wheel, we decided to build upon it.
          </p>

          {/* CTA button */}
          <Link
            href="#"
            className="inline-block bg-white text-[#2B63D9] px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors mb-16"
          >
            Send Notification
          </Link>

          {/* Clients section */}
          <div className="mt-16">
            <p className="text-sm font-medium text-white text-opacity-70 mb-4">Who supports us</p>
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              <span className="text-lg font-bold text-white">GitLab</span>
              <span className="text-lg font-bold text-white">#s4ack</span>
              <span className="text-lg font-bold text-white">NETFLIX</span>
              <span className="text-lg font-bold text-white">PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;