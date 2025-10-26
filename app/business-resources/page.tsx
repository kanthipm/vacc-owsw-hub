import Link from 'next/link';
import Banner from '../../components/Banner';

export default function BusinessResources() {
  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <Banner 
        title="For Business Owners"
        subtitle="Emergency veterinary hospitals, then clinics: How One Welfare Social Workers deliver measurable ROI through improved staff retention, reduced burnout, and enhanced client satisfaction."
        backgroundImage="/banner-business.jpg"
      />

      {/* ROI Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Return on Investment</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Organizations implementing One Welfare Social Workers see significant financial returns and operational improvements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-orange-50 p-8 rounded-lg border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-[#CC5500] mb-4">Social Return on Investment</h3>
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-[#CC5500] mb-2 stat-number">$8.21</div>
                  <p className="text-lg text-gray-700">return for every $1 invested</p>
                </div>
                <p className="text-gray-700 text-center">
                  Based on RSPCA NSW implementation data showing measurable improvements in staff wellbeing, 
                  client satisfaction, and operational efficiency.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">Reduced</div>
                  <p className="text-sm text-gray-700">Recruitment Costs</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#CC5500] mb-1">Improved</div>
                  <p className="text-sm text-gray-700">Staff Retention</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">Higher</div>
                  <p className="text-sm text-gray-700">Client Satisfaction</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#CC5500] mb-1">Lower</div>
                  <p className="text-sm text-gray-700">Burnout Rates</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Financial Benefits Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="font-medium text-gray-700">Reduced Staff Turnover</span>
                  <span className="font-bold text-green-600">High Impact</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="font-medium text-gray-700">Lower Recruitment Costs</span>
                  <span className="font-bold text-green-600">High Impact</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="font-medium text-gray-700">Improved Productivity</span>
                  <span className="font-bold text-green-600">Medium Impact</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="font-medium text-gray-700">Enhanced Client Retention</span>
                  <span className="font-bold text-green-600">Medium Impact</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="font-medium text-gray-700">Reduced Sick Leave</span>
                  <span className="font-bold text-green-600">Medium Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workforce Crisis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">The Veterinary Workforce Crisis</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-[#CC5500]">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Challenges Without OWSW</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">Recruitment Crisis</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>80%+</strong> of survey respondents working in practice settings seeking to employ veterinarians</li>
                      <li>• <strong>30%+</strong> of recruitment cases take over 12 months</li>
                      <li>• Australian attrition rate of <strong>23%</strong> from clinical practice</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">Retention Issues</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Australian attrition rate of <strong>23%</strong> from clinical practice prior to retirement</li>
                      <li>• <strong>20%</strong> of Australian veterinarians considering leaving profession in the following year</li>
                      <li>• <strong>43.7%</strong> likely to leave roles within 2 years (UK data)</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">Job Satisfaction</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Only <strong>63%</strong> of clinically and non-clinically employed veterinarians satisfied with remuneration</li>
                      <li>• Unsustainable workforce conditions</li>
                      <li>• High stress and burnout contributing to turnover</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-4">Source: RSPCA NSW, 2023</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">How OWSW Addresses These Issues</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">Improved Retention</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Addresses root causes of burnout and stress</li>
                      <li>• Provides ongoing mental health support</li>
                      <li>• Creates more sustainable work environment</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">Reduced Recruitment Needs</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Lower staff turnover means less hiring</li>
                      <li>• Attracts quality candidates to supportive practices</li>
                      <li>• Reduces time and cost of recruitment</li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded">
                    <h4 className="font-semibold text-gray-900 mb-2">Enhanced Job Satisfaction</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Better work-life balance</li>
                      <li>• Improved team dynamics and support</li>
                      <li>• Greater sense of purpose and fulfillment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost-Benefit Analysis */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Cost-Benefit Analysis</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-orange-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-[#CC5500] mb-6">Cost Without OWSW</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">High staff turnover costs</span>
                  <span className="font-bold text-red-600">$$$</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">Extended recruitment periods</span>
                  <span className="font-bold text-red-600">$$$</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">Lost productivity from burnout</span>
                  <span className="font-bold text-red-600">$$</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">Client dissatisfaction</span>
                  <span className="font-bold text-red-600">$$</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">Increased sick leave</span>
                  <span className="font-bold text-red-600">$</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-blue-800 mb-6">Benefits With OWSW</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">Improved staff retention</span>
                  <span className="font-bold text-green-600">+$8.21 ROI</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">Reduced recruitment needs</span>
                  <span className="font-bold text-green-600">High Savings</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">Increased worker productivity</span>
                  <span className="font-bold text-green-600">High Impact</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">Better client satisfaction</span>
                  <span className="font-bold text-green-600">Medium Impact</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded">
                  <span className="text-gray-700">Lower absenteeism</span>
                  <span className="font-bold text-green-600">Medium Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Implementation Benefits for Your Practice</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Staff Wellbeing</h3>
              <p className="text-gray-600 mb-4">
                Create a supportive work environment that reduces burnout and improves job satisfaction.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Reduced stress and anxiety</li>
                <li>• Better work-life balance</li>
                <li>• Professional support for difficult cases</li>
                <li>• Higher output and increased productivity</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Financial Returns</h3>
              <p className="text-gray-600 mb-4">
                Achieve measurable ROI through improved retention and reduced operational costs.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• $8.21 return per $1 invested</li>
                <li>• Lower recruitment costs</li>
                <li>• Reduced turnover expenses</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">😊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Client Satisfaction</h3>
              <p className="text-gray-600 mb-4">
                Enhance client experience through better communication and emotional support.
              </p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Improved client relationships</li>
                <li>• Better communication during difficult times</li>
                <li>• Enhanced reputation and referrals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Practice?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join forward-thinking veterinary practices that are already seeing the benefits of One Welfare Social Workers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Implementation
            </Link>
            <Link 
              href="/evidence/pilot" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
