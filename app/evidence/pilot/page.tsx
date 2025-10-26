import Link from 'next/link';
import Banner from '../../../components/Banner';

export default function PilotEvidence() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <Banner 
        title="Evidence & Research"
        subtitle="Comprehensive research demonstrating the value and impact of One Welfare Social Workers in veterinary teams, based on pilot program data and secondary research."
        backgroundImage="/banner-research.jpg"
      />

      {/* Research Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Foundation</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our evidence base combines pilot program findings with extensive secondary research 
              to demonstrate the measurable benefits of One Welfare Social Workers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-4xl font-bold text-[#CC5500] mb-2 stat-number">Primary</div>
              <p className="text-gray-700">Pilot Program Data</p>
              <p className="text-sm text-gray-500 mt-2">Real-world implementation results</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2 stat-number">Secondary</div>
              <p className="text-gray-700">Research Analysis</p>
              <p className="text-sm text-gray-500 mt-2">Peer-reviewed studies and reports</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-4xl font-bold text-[#CC5500] mb-2 stat-number">ROI</div>
              <p className="text-gray-700">Financial Impact</p>
              <p className="text-sm text-gray-500 mt-2">Measurable return on investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Research Findings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Research Findings</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mental Health Impact */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-orange-100 text-[#CC5500] w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">1</span>
                Mental Health Impact
              </h3>
              <div className="space-y-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Veterinary Team Support</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>88.9%</strong> use OWSW for mental health/wellness support</li>
                    <li>• <strong>77%</strong> debrief with OWSWs about client problems</li>
                    <li>• <strong>77.7%</strong> engage OWSWs for personal problems</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Crisis Intervention</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>22%</strong> of OWSWs perform mental health risk assessments</li>
                    <li>• <strong>67%</strong> provide crisis support for staff members</li>
                    <li>• Early intervention for psychological distress</li>
                  </ul>
                </div>
                
                <p className="text-sm text-gray-500">Source: Hoy-Gerlach, Kogan, & McCune, 2025</p>
              </div>
            </div>

            {/* Client Support Impact */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">2</span>
                Client Support Impact
              </h3>
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Support Services</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>86.6%</strong> support for euthanasia decisions</li>
                    <li>• <strong>73.3%</strong> grief counseling support</li>
                    <li>• <strong>66.7%</strong> client health support</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Community Focus</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>95%</strong> of time devoted to under-served communities</li>
                    <li>• Equitable access to support services</li>
                    <li>• Cultural sensitivity and understanding</li>
                  </ul>
                </div>
                
                <p className="text-sm text-gray-500">Source: Hoy-Gerlach, Kogan, & McCune, 2025</p>
              </div>
            </div>

            {/* Financial Impact */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-orange-100 text-[#CC5500] w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">3</span>
                Financial Impact
              </h3>
              <div className="space-y-6">
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-4xl font-bold text-[#CC5500] mb-2 stat-number">$8.21</div>
                  <p className="text-lg text-gray-700">return for every $1 invested</p>
                  <p className="text-sm text-gray-600">Social Return on Investment</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm text-gray-700">Reduced staff turnover</span>
                    <span className="font-semibold text-green-600">High Impact</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm text-gray-700">Lower recruitment costs</span>
                    <span className="font-semibold text-green-600">High Impact</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-sm text-gray-700">Improved productivity</span>
                    <span className="font-semibold text-green-600">Medium Impact</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500">Source: RSPCA NSW implementation data</p>
              </div>
            </div>

            {/* Workforce Crisis Data */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mr-4">4</span>
                Workforce Crisis Context
              </h3>
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Current Challenges</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>42%</strong> experience psychological distress</li>
                    <li>• <strong>55%</strong> burnout rate in early career veterinarians</li>
                    <li>• <strong>23%</strong> attrition rate from clinical practice</li>
                    <li>• <strong>20%</strong> considering leaving profession</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Recruitment Issues</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>80%+</strong> of practices seeking veterinarians</li>
                    <li>• <strong>30%+</strong> recruitment cases take 12+ months</li>
                    <li>• Only <strong>63%</strong> satisfied with remuneration</li>
                  </ul>
                </div>
                
                <p className="text-sm text-gray-500">Sources: Multiple studies (Pohl et al., 2022; Osca et al., 2024; RSPCA NSW, 2023)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Citations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Research Citations</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Primary Research Sources</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Hoy-Gerlach, J., Kogan, L., & McCune, S. (2025).</strong> The role and scope of practice of veterinary social workers in animal shelters. 
                  <em>Pets, 2(1), 6.</em> <a href="https://www.mdpi.com/2813-9372/2/1/6" className="text-blue-600 hover:underline">https://www.mdpi.com/2813-9372/2/1/6</a>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Mental Health Research</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Stetina, B. U. & Krouzecky, C. (2022).</strong> 
                  Reviewing a decade of change for veterinarians: Past, present and gaps in researching stress, coping and mental health risks. 
                  <em>Animals, 12(22), 3199.</em>
                </p>
                <p>
                  <strong>Pohl, R., Botscharow, J., Böckelmann, I., & Thielmann, B. (2022).</strong> 
                  Stress and strain among veterinarians: A scoping review. 
                  <em>Irish Veterinary Journal, 75(1), 15.</em>
                </p>
                <p>
                  <strong>Osca, A., Millán, L., Vela, L., & Barrado, J. (2024).</strong> 
                  Mental health in the veterinary profession: an individual or organisational issue? 
                  <em>Veterinary Record, 190(5), e10100510.</em>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Workforce & Business Impact</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>RSPCA NSW (2023).</strong> Submission No. 197: Inquiry into veterinary workforce shortage in New South Wales. 
                  Portfolio Committee 4 – Regional NSW. Available at: 
                  <a href="https://www.parliament.nsw.gov.au/lcdocs/submissions/80438/0197%20RSPCA.pdf" className="text-blue-600 hover:underline">https://www.parliament.nsw.gov.au/lcdocs/submissions/80438/0197%20RSPCA.pdf</a>
                </p>
                <p>
                  <strong>American Psychological Association. (2019, August 9).</strong> 
                  When working with animals can hurt your mental health [Press release]. 
                  <a href="https://www.apa.org/news/press/releases/2019/08/working-with-animals-mental" className="text-blue-600 hover:underline">https://www.apa.org/news/press/releases/2019/08/working-with-animals-mental</a>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Ethical & Professional Issues</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  <strong>Stetina, B. U. & Krouzecky, C. (2022).</strong> 
                  Reviewing a decade of change for veterinarians: Past, present and gaps in researching stress, coping and mental health risks. 
                  <em>Animals, 12(22), 3199.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Research Methodology</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pilot Program Data Collection</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Real-world implementation in veterinary settings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Quantitative metrics on service utilization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Qualitative feedback from stakeholders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Financial impact measurement</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secondary Research Analysis</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Peer-reviewed academic studies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Industry reports and surveys</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Professional association data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Cross-referenced findings for validation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Evidence-Based Implementation</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join the growing number of veterinary practices implementing One Welfare Social Workers 
            based on solid research evidence and proven outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Implementation
            </Link>
            <Link 
              href="/" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
