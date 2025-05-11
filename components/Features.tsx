import Image from "next/image";
import Link from "next/link";

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Messaging for all</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            User generated content in real-time will have multiple touchpoints for offshoring.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            image="/images/easier work org.png"
            title="Easier Work Organization"
            description="Efficiently integrate cross-media information without cross-media value. Quickly timely deliverables for real-time schemas."
          />

          <FeatureCard
            image="/images/fast connection.png"
            title="Fast Connection"
            description="Completely pursue scalable customer cross-media through potentialities. Holistically quickly installed portable portals."
          />

          <FeatureCard
            image="/images/streamlined process.png"
            title="Streamlined Processes"
            description="Objectively integrate emerging core competencies before scalable manufactured products whereas parallel platforms predominate extensible."
          />

          <FeatureCard
            image="/images/integrations.png"
            title="Easier Integrations"
            description="Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information."
          />

          <FeatureCard
            image="/images/analytics.png"
            title="Marketing Analytics"
            description="Phosfluorescently engage worldwide methodologies with web-enabled interactively coordinate."
          />

          <FeatureCard
            image="/images/workflow.png"
            title="Workflow Builder"
            description="Collaboratively administrate turnkey service channels whereas virtual e-tailers. This is objectively scalable metrics."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative w-16 h-16 mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link 
        href="#" 
        className="text-[#437EF7] flex items-center text-sm font-medium hover:text-[#2B63D9] transition-colors"
      >
        Learn more
        <svg className="ml-1 w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.5 12.5L11 8L6.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  )
}