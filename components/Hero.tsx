'use client'

import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative bg-[#2B63D9] overflow-hidden w-full">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mx-auto max-w-7xl px-6 py-0 md:py-14">
        {/* Left Side */}
        <div className="text-white max-w-2xl w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Your Supercharged<br />
            Design Workflow.
          </h1>
          <p className="text-lg opacity-90 mb-8 max-w-md">
            We’ve been told it is not possible to overachieve our customers’ expectations.
            We have not reinvented the wheel, we decided to build upon it.
          </p>
          <Link
            href="#"
            className="inline-block bg-white text-[#2B63D9] px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors mb-10"
          >
            Send Notification
          </Link>
          <div className="mt-10">
            <p className="text-sm font-medium text-white text-opacity-70 mb-4">Who supports us</p>
            <div className="flex items-center gap-6 md:gap-10">
              <Image src="/images/gitlab.png" alt="GitLab" width={90} height={30} />
              <Image src="/images/slack.png" alt="Slack" width={90} height={30} />
              <Image src="/images/netflx.png" alt="Netflix" width={90} height={30} />
              <Image src="/images/paypal.png" alt="PayPal" width={90} height={30} />
            </div>
          </div>
        </div>

        {/* Right Side Visual */}
        <div className="w-full md:w-[30%] mt-12 md:mt-0">
          <Image
            src="/images/hero-pattern.png"
            alt="Hero Visual"
            width={500}
            height={500}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
