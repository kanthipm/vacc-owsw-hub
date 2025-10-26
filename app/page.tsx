import Link from 'next/link';
import Card from '../components/Card';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <Banner 
        title="One Welfare Social Workers"
        subtitle="Supporting Veterinary Teams, Business Owners, and Animal Companions"
        backgroundImage="/banner-home.jpg"
      />

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Challenge</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Veterinary teams struggle to understand the value and role of One Welfare Social Workers, 
              despite overwhelming evidence of their positive impact on mental health, retention, and client care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-4xl font-bold text-[#CC5500] mb-2 stat-number">83.3%</div>
              <p className="text-gray-700">Of veterinarians classified as anxious</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2 stat-number">55%</div>
              <p className="text-gray-700">Burnout rate in early career veterinarians</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-4xl font-bold text-[#CC5500] mb-2 stat-number">23%</div>
              <p className="text-gray-700">Attrition rate from veterinary practice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stakeholder Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Benefits from OWSWs?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our evidence-based approach supports three key stakeholder groups with measurable outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title="Veterinary Teams"
              description="Emergency veterinary hospitals, then clinics: Veterinarians, nurses, technicians, and assistants receive structured support for complex cases, reducing workplace stress and improving mental health outcomes."
              stats={[
                "77% debrief with OWSW about client problems",
                "88.9% access mental health support",
                "77.7% engage OWSW for personal problems"
              ]}
              link="/vet-resources"
              linkText="Learn More for Veterinary Teams"
              color="blue"
            />
            
            <Card
              title="Business Owners"
              description="Clinic owners and practice managers see improved staff retention, reduced burnout, and better client satisfaction with measurable ROI."
              stats={[
                "$8.21 return per $1 invested",
                "Improved staff retention",
                "Reduced recruitment costs"
              ]}
              link="/business-resources"
              linkText="Learn More for Business Owners"
              color="orange"
            />
            
            <Card
              title="Animal Companions"
              description="Pet owners receive better communication, emotional support during difficult decisions, and access to community resources."
              stats={[
                "86.6% support for euthanasia",
                "73.3% grief counseling",
                "66.7% client health support"
              ]}
              link="/companions"
              linkText="Learn More for Pet Owners"
              color="blue"
            />
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Objectives</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#CC5500]">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collect Pilot Data</h3>
              <p className="text-gray-600">
                Gather primary data from our pilot program to demonstrate the real-world impact 
                of One Welfare Social Workers in veterinary teams.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Educational Tool</h3>
              <p className="text-gray-600">
                Create an evidence-based educational platform using secondary research to 
                educate stakeholders about OWSW value and implementation.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#CC5500]">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Marketing Materials</h3>
              <p className="text-gray-600">
                Develop comprehensive marketing materials highlighting the benefits of 
                One Welfare Social Workers based on collected data and evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Veterinary Practice?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join the movement to integrate One Welfare Social Workers into veterinary teams 
            and see the measurable benefits for your staff, clients, and business.
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
              View the Evidence
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
