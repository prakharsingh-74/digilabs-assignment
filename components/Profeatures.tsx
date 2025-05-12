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
    <section className="bg-[#151B28] py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="flex-1 max-w-[560px] h-[400px] md:h-[500px] flex justify-center items-center">
          <div className="w-[500px] h-[500px] overflow-hidden relative">
            <Image
              src="/images/photoo.png"
              alt="Decor Room"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex-1 space-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                <Image
                  src={feature.iconSrc}
                  alt={`${feature.title} icon`}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-300 mb-1">{feature.description}</p>
                <a
                  href="#"
                  className="text-blue-400 font-medium hover:underline text-sm flex items-center gap-1"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
