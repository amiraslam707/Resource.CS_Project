import { useState } from 'react'

const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Build responsive and modern websites with the latest web technologies for optimal performance and user experience.",
    image: "../assets/tech1.png"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Transform your ideas into powerful mobile applications for iOS and Android platforms with cutting-edge features.",
    image: "../assets/tech1.png"
  },
  {
    id: 3,
    title: "Product Development",
    description: "From concept to launch, we help you build innovative products that meet market demands and user expectations.",
    image: "../assets/tech1.png"
  },
  {
    id: 4,
    title: "Managed IT Services",
    description: "Comprehensive IT support and management services to keep your business running smoothly and securely.",
    image: "../assets/tech1.png"
  },
  {
    id: 5,
    title: "Generative AI Services",
    description: "Leverage the power of AI to automate processes, enhance creativity, and drive innovation in your business.",
    image: "../assets/tech1.png"
  },
  {
    id: 6,
    title: "Data Science",
    description: "Unlock insights from your data with advanced analytics, machine learning, and predictive modeling solutions.",
    image: "../assets/tech1.png"
  },
  {
    id: 7,
    title: "AR/VR",
    description: "Create immersive augmented and virtual reality experiences for training, entertainment, and business applications.",
    image: "../assets/tech1.png"
  },
  {
    id: 8,
    title: "Cloud Computing",
    description: "Optimize your infrastructure with scalable cloud solutions tailored to your business needs and growth.",
    image: "../assets/tech1.png"
  },
  {
    id: 9,
    title: "DevOps",
    description: "Streamline your development and deployment processes with automated CI/CD pipelines and infrastructure management.",
    image: "../assets/tech1.png"
  },
  {
    id: 10,
    title: "Digital Enterprise Solution",
    description: "End-to-end digital transformation solutions designed to modernize your business operations and drive growth.",
    image: "../assets/tech1.png"
  },
  {
    id: 11,
    title: "AI/ML",
    description: "Harness the power of artificial intelligence and machine learning to automate processes and gain insights.",
    image: "../assets/tech1.png"
  },
  {
    id: 12,
    title: "Business Process Automation",
    description: "Automate repetitive tasks and optimize workflows to increase efficiency and reduce operational costs.",
    image: "../assets/tech1.png"
  }
]

export default function Community() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Resource Linked Technologies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse range of services empowers businesses across industries to thrive in the digital landscape. 
            Whether you're a startup or an enterprise, we provide comprehensive solutions to help you succeed.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-lg">
                  {/* Initial partial border (left side) */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-orange-500 transition-all duration-300 ease-in-out"></div>
                  
                  {/* Animated complete border on hover */}
                  <div className={`absolute inset-0 rounded-lg transition-all duration-500 ease-in-out ${
                    hoveredCard === service.id 
                      ? 'border-2 border-red-500 opacity-100' 
                      : 'border-2 border-transparent opacity-0'
                  }`}></div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-6">
                  {/* Service Image */}
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Effect Arrow */}
                  <div className={`mt-4 flex items-center text-red-500 font-medium transition-all duration-300 ${
                    hoveredCard === service.id ? 'opacity-100 translate-x-2' : 'opacity-0 translate-x-0'
                  }`}>
                    <span className="text-sm">Learn More</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  )
}
