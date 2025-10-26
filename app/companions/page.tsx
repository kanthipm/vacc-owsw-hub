import Link from 'next/link';
import Banner from '../../components/Banner';

export default function Companions() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <Banner 
        title="For Animal Companions"
        subtitle="How One Welfare Social Workers support pet owners during difficult times, providing emotional support, guidance, and access to community resources."
        backgroundImage="/banner-companions.jpg"
      />

      {/* Support Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How OWSWs Support Pet Owners</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              One Welfare Social Workers provide crucial support to pet owners during their most challenging moments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-4xl font-bold text-[#CC5500] mb-2 stat-number">86.6%</div>
              <p className="text-gray-700">Support for euthanasia decisions</p>
              <p className="text-sm text-gray-500 mt-2">Most common reason for OWSW referral</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2 stat-number">73.3%</div>
              <p className="text-gray-700">Grief counseling support</p>
              <p className="text-sm text-gray-500 mt-2">Help with pet loss and bereavement</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-4xl font-bold text-[#CC5500] mb-2 stat-number">66.7%</div>
              <p className="text-gray-700">Client health support</p>
              <p className="text-sm text-gray-500 mt-2">Personal health and wellbeing assistance</p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <p className="text-lg text-gray-700 mb-4">
              <strong>95%</strong> of OWSW time is devoted to helping pet owners from under-served communities
            </p>
            <p className="text-sm text-gray-600">Source: Hoy-Gerlach, Kogan, & McCune, 2025</p>
          </div>
        </div>
      </section>

      {/* Key Support Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How OWSWs Help Pet Owners</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Euthanasia Support */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-orange-100 text-[#CC5500] w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">1</span>
                Euthanasia Decision Support
              </h3>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-3">
                    <strong>86.6%</strong> of OWSW referrals are for euthanasia support - the most common reason for seeking help.
                  </p>
                  <p className="text-sm text-gray-600">
                    OWSWs provide compassionate guidance during one of the most difficult decisions pet owners face.
                  </p>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-3">How OWSWs Help:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#CC5500] mr-2">•</span>
                    <span>Provide emotional support during decision-making process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CC5500] mr-2">•</span>
                    <span>Help navigate complex ethical considerations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CC5500] mr-2">•</span>
                    <span>Facilitate communication with veterinary team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CC5500] mr-2">•</span>
                    <span>Offer resources for making informed decisions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Grief Counseling */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">2</span>
                Grief Counseling & Bereavement
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-3">
                    <strong>73.3%</strong> of OWSW referrals are for grief counseling support after pet loss.
                  </p>
                  <p className="text-sm text-gray-600">
                    Pet loss can be as devastating as losing a human family member, and OWSWs provide specialized support.
                  </p>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-3">Support Services:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Individual grief counseling sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Support groups for pet loss</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Memorial and remembrance planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Coping strategies and resources</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Client Health Support */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-orange-100 text-[#CC5500] w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">3</span>
                Personal Health & Wellbeing
              </h3>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-3">
                    <strong>66.7%</strong> of OWSW referrals are for client health support, addressing personal wellbeing.
                  </p>
                  <p className="text-sm text-gray-600">
                    Pet owners often neglect their own health while caring for their animals, especially during illness.
                  </p>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-3">Health Support Areas:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#CC5500] mr-2">•</span>
                    <span>Mental health support and counseling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CC5500] mr-2">•</span>
                    <span>Access to community health resources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CC5500] mr-2">•</span>
                    <span>Financial assistance and planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#CC5500] mr-2">•</span>
                    <span>Social support and connection</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Under-served Communities */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">4</span>
                Under-served Communities
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-3">
                    <strong>95%</strong> of OWSW time is dedicated to helping pet owners from under-served communities.
                  </p>
                  <p className="text-sm text-gray-600">
                    OWSWs ensure equitable access to support regardless of socioeconomic status.
                  </p>
                </div>
                
                <h4 className="font-semibold text-gray-900 mb-3">Community Support:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Low-cost or free support services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Cultural sensitivity and understanding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Language and communication support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Connection to community resources</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Pet Owners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Benefits for Pet Owners</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Emotional Support</h3>
              <p className="text-gray-600">
                Professional support during difficult decisions and emotional challenges with your pet's care.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Better Communication</h3>
              <p className="text-gray-600">
                Improved communication with veterinary teams, ensuring your concerns are heard and understood.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Access to Resources</h3>
              <p className="text-gray-600">
                Connection to community resources, financial assistance, and support services for you and your pet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How OWSWs Make a Difference</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">During Difficult Decisions</h3>
              <p className="text-gray-600 mb-4 italic">
                "The OWSW helped me understand that choosing euthanasia for my dog wasn't giving up - it was the most loving choice I could make. They supported me through the entire process and helped me cope with the grief afterward."
              </p>
              <p className="text-sm text-gray-500">- Pet Owner, Supported by OWSW</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Access to Support</h3>
              <p className="text-gray-600 mb-4 italic">
                "I couldn't afford counseling after losing my cat, but the OWSW connected me with free grief support groups and resources. I didn't have to face my loss alone."
              </p>
              <p className="text-sm text-gray-500">- Pet Owner from Under-served Community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">You Don't Have to Face Pet Care Challenges Alone</h2>
          <p className="text-xl mb-8 text-blue-100">
            One Welfare Social Workers are here to support you through every step of your pet's care journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Find Support
            </Link>
            <Link 
              href="/vet-resources" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn About Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
