import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  stats: string[];
  link: string;
  linkText: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

export default function Card({ title, description, stats, link, linkText, color }: CardProps) {
  const colorClasses = {
    blue: 'border-blue-200 bg-blue-50 hover:bg-blue-100',
    green: 'border-green-200 bg-green-50 hover:bg-green-100',
    purple: 'border-purple-200 bg-purple-50 hover:bg-purple-100',
    orange: 'border-orange-200 bg-orange-50 hover:bg-orange-100'
  };

  const textColorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-[#CC5500]'
  };

  return (
    <div className={`p-6 rounded-lg border-2 ${colorClasses[color]} transition-colors duration-200`}>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <ul className="space-y-2 mb-6">
        {stats.map((stat, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <div className={`w-2 h-2 rounded-full mr-3 ${textColorClasses[color]} bg-current`}></div>
            {stat}
          </li>
        ))}
      </ul>
      
      <Link 
        href={link}
        className={`inline-block px-6 py-2 rounded-lg font-semibold text-white transition-colors ${
          color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
          color === 'green' ? 'bg-green-600 hover:bg-green-700' :
          color === 'orange' ? 'bg-[#CC5500] hover:bg-[#B84D00]' :
          'bg-purple-600 hover:bg-purple-700'
        }`}
      >
        {linkText}
      </Link>
    </div>
  );
}
