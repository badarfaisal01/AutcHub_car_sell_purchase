export default function StatsSection() {
  const stats = [
    { label: "Cars Listed", value: "50,000+" },
    { label: "Happy Customers", value: "25,000+" },
    { label: "Cities Covered", value: "100+" },
    { label: "Years of Trust", value: "10+" },
  ]

  return (
    <div className="bg-blue-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
