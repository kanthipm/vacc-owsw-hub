import Link from 'next/link';
import Banner from '../../components/Banner';

export default function VetResources() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <Banner 
        title="For Veterinary Teams"
        subtitle="Emergency veterinary hospitals, then clinics: How One Welfare Social Workers support veterinarians, nurses, technicians, and assistants in managing mental health, reducing burnout, and improving workplace wellbeing."
        backgroundImage="/banner-vet.jpg"
      />

      {/* Mental Health Crisis Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Mental Health Crisis in Veterinary Medicine</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Veterinary professionals face unique challenges that significantly impact their mental health and wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-3xl font-bold text-[#CC5500] mb-2 stat-number">42%</div>
              <p className="text-sm text-gray-700">Experience medium to high psychological distress</p>
              <p className="text-xs text-gray-500 mt-1">(Pohl et al., 2022)</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2 stat-number">55%</div>
              <p className="text-sm text-gray-700">Burnout rate in early career veterinarians</p>
              <p className="text-xs text-gray-500 mt-1">(Osca et al., 2024)</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-3xl font-bold text-[#CC5500] mb-2 stat-number">83.3%</div>
              <p className="text-sm text-gray-700">Of veterinarians classified as anxious</p>
              <p className="text-xs text-gray-500 mt-1">(Pohl et al., 2022)</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2 stat-number">42%</div>
              <p className="text-sm text-gray-700">Experience medium psychological distress</p>
              <p className="text-xs text-gray-500 mt-1">(Pohl et al., 2022)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Issues Without OWSW */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Mental Health Issues in Veterinary Teams</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Euthanasia Impact */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-[#CC5500] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Euthanasia-Related Trauma
              </h3>
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>American Context:</strong> Over 2.4 million healthy cats and dogs are euthanized each year in the US - most being homeless animals in shelters.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    "Shelter workers are caught in a dilemma because they are charged with caring for an animal and they may ultimately end that animal's life"
                  </p>
                </div>
                <p className="text-gray-700">
                  This causes significant guilt leading to <strong>depression, anxiety, insomnia, greater family-work conflict, and low job satisfaction</strong>.
                </p>
                <p className="text-sm text-gray-500">Source: American Psychological Association, 2019</p>
              </div>
            </div>

            {/* Ethical Dilemmas */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Ethical Dilemmas
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Fundamental Problem:</strong> "The person who gives consent to any form of treatment is not the patient."
                  </p>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>57%</strong> of UK veterinarians experience 1-2 ethical dilemmas per week</li>
                  <li>• <strong>37%</strong> involved in informing companion about pet loss</li>
                  <li>• <strong>100%</strong> of veterinary team respondents experience ethical or quality of life concerns about client pets</li>
                </ul>
                <p className="text-sm text-gray-500">Sources: Stetina & Krouzecky, 2022 (UK); Hoy-Gerlach et al., 2025</p>
              </div>
            </div>

            {/* Burnout Statistics */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-orange-100 text-[#CC5500] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Burnout Rates
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-orange-50 rounded">
                    <div className="text-2xl font-bold text-[#CC5500] stat-number">55%</div>
                    <p className="text-sm text-gray-700">Australian early career burnout</p>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded">
                    <div className="text-2xl font-bold text-[#CC5500] stat-number">22%</div>
                    <p className="text-sm text-gray-700">Personal burnout</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded">
                    <div className="text-2xl font-bold text-blue-600 stat-number">19.7%</div>
                    <p className="text-sm text-gray-700">Work-related burnout</p>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded">
                    <div className="text-2xl font-bold text-blue-600 stat-number">16.6%</div>
                    <p className="text-sm text-gray-700">Client-related burnout</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">Sources: Osca et al., 2024 (Australian); Pohl et al., 2022</p>
              </div>
            </div>

            {/* Depression & Anxiety */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Depression & Anxiety
              </h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Depression Levels:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 7.9% mild depression</li>
                    <li>• 10% moderate depression</li>
                    <li>• 3.8% severe depression</li>
                    <li>• 3.9% extremely severe depression</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Additional Issues:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 83.3% classified as anxious</li>
                    <li>• 42% medium psychological distress</li>
                    <li>• 14% high psychological distress</li>
                    <li>• 70%+ face obstacles causing moderate to severe distress</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-500">Sources: Pohl et al., 2022; RSPCA NSW, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact of OWSW */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How One Welfare Social Workers Help</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-[#CC5500]">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mental Health Support</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>88.9%</strong> use OWSW for mental health/wellness (anxiety/depression)</li>
                  <li>• <strong>77%</strong> debrief with OWSW about client problems</li>
                  <li>• <strong>77.7%</strong> engage OWSW for personal problems</li>
                </ul>
                <p className="text-sm text-gray-500 mt-2">Source: Hoy-Gerlach, Kogan, & McCune, 2025</p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Crisis Intervention</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>22%</strong> of OWSWs perform mental health risk assessments</li>
                  <li>• <strong>67%</strong> provide crisis support for staff members</li>
                  <li>• Early intervention for psychological distress and burnout</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Key Benefits for Veterinary Teams</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Structured Support</h4>
                    <p className="text-gray-600 text-sm">Professional guidance for complex cases and emotional situations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Reduced Burnout</h4>
                    <p className="text-gray-600 text-sm">Address workplace stress and prevent compassion fatigue</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Better Communication</h4>
                    <p className="text-gray-600 text-sm">Improved client interactions and difficult conversations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Crisis Intervention</h4>
                    <p className="text-gray-600 text-sm">Immediate support during mental health crises</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Support Your Veterinary Team?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Learn how One Welfare Social Workers can transform your practice and support your team's mental health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/evidence/pilot" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Research Evidence
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
