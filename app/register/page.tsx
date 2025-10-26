import Link from 'next/link';
import Banner from '../../components/Banner';

export default function Register() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <Banner 
        title="Get Involved"
        subtitle="Join the movement to integrate One Welfare Social Workers into veterinary teams. Whether you're a veterinary professional, business owner, or pet owner, there are ways to get involved."
        backgroundImage="/banner-involve.jpg"
      />

      {/* Ways to Get Involved */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How You Can Get Involved</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg border-2 border-blue-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">For Veterinary Teams</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>• Advocate for OWSW integration in your practice</li>
                <li>• Participate in pilot programs</li>
                <li>• Share your experiences and needs</li>
                <li>• Connect with other veterinary professionals</li>
              </ul>
              <Link 
                href="/vet-resources" 
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-green-50 p-8 rounded-lg border-2 border-green-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">For Business Owners</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>• Implement OWSW programs in your practice</li>
                <li>• Join our business network</li>
                <li>• Share success stories and case studies</li>
                <li>• Access implementation resources</li>
              </ul>
              <Link 
                href="/business-resources" 
                className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg border-2 border-purple-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">For Pet Owners</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>• Advocate for OWSW services at your vet</li>
                <li>• Share your support needs</li>
                <li>• Connect with support groups</li>
                <li>• Access available resources</li>
              </ul>
              <Link 
                href="/companions" 
                className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Get in Touch</h2>
            <p className="text-center text-gray-600 mb-8">
              Ready to learn more about implementing One Welfare Social Workers in your practice? 
              Contact us to discuss your needs and how we can help.
            </p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  Organization/Practice Name
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  Role/Stakeholder Type
                </label>
                <select
                  id="role"
                  name="role"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select your role</option>
                  <option value="veterinarian">Veterinarian</option>
                  <option value="vet-nurse">Veterinary Nurse</option>
                  <option value="vet-tech">Veterinary Technician</option>
                  <option value="practice-manager">Practice Manager</option>
                  <option value="business-owner">Business Owner</option>
                  <option value="pet-owner">Pet Owner</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your interest in One Welfare Social Workers..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Additional Resources</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/evidence/pilot" className="bg-indigo-50 p-6 rounded-lg text-center hover:bg-indigo-100 transition-colors">
              <div className="text-2xl mb-3">📊</div>
              <h3 className="font-semibold text-gray-900 mb-2">Research Evidence</h3>
              <p className="text-sm text-gray-600">View our comprehensive research findings</p>
            </Link>
            
            <Link href="/vet-resources" className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition-colors">
              <div className="text-2xl mb-3">👩‍⚕️</div>
              <h3 className="font-semibold text-gray-900 mb-2">Veterinary Teams</h3>
              <p className="text-sm text-gray-600">Resources for veterinary professionals</p>
            </Link>
            
            <Link href="/business-resources" className="bg-green-50 p-6 rounded-lg text-center hover:bg-green-100 transition-colors">
              <div className="text-2xl mb-3">💼</div>
              <h3 className="font-semibold text-gray-900 mb-2">Business Owners</h3>
              <p className="text-sm text-gray-600">ROI and implementation guides</p>
            </Link>
            
            <Link href="/companions" className="bg-purple-50 p-6 rounded-lg text-center hover:bg-purple-100 transition-colors">
              <div className="text-2xl mb-3">🐾</div>
              <h3 className="font-semibold text-gray-900 mb-2">Pet Owners</h3>
              <p className="text-sm text-gray-600">Support and resources for companions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join us in transforming veterinary care through One Welfare Social Workers. 
            Together, we can improve outcomes for veterinary teams, business owners, and animal companions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://vacc.charity" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Visit VACC Main Site
            </a>
            <Link 
              href="/evidence/pilot" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Research
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
