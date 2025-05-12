import Image from 'next/image'

const features = [
  {
    title: 'Explore ideas together',
    description:
      'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
    iconSrc: '/images/EIT.png',
  },
  {
    title: 'Bring those ideas to life',
    description:
      'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
    iconSrc: '/images/BTIL.png',
  },
  {
    title: 'Ship better outcomes',
    description:
      'Engage audience segments and finally create actionable insights. Amplify vertical integration.',
    iconSrc: '/images/SBO.png',
  },
]

const FeaturesSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Redefining Product Features
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Keeping your eye on the ball while performing a deep dive on the start-up mentality
          to derive convergence on cross-platform integration.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side - Features */}
          <div className="flex-1 space-y-10 text-left">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                  <Image
                    src={feature.iconSrc}
                    alt={`${feature.title} icon`}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 mb-2">{feature.description}</p>
                  <a href="#" className="text-blue-600 font-medium hover:underline text-sm">
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="flex-1 w-full max-w-[560px] h-[560px]">
            <Image
              src="/images/Photo.png"
              alt="Feature Visual"
              width={560}
              height={560}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
