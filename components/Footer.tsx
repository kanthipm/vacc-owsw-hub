import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">VACC</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Veterinary and Community Care - Supporting veterinary teams through One Welfare Social Workers 
              to improve mental health, retention, and client care outcomes.
            </p>
            <p className="text-sm text-gray-400">
              Visit our main website: <a href="https://vacc.charity" className="text-blue-400 hover:text-blue-300">vacc.charity</a>
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">For Stakeholders</h4>
            <ul className="space-y-2">
              <li><Link href="/vet-resources" className="text-gray-300 hover:text-white">Veterinary Teams</Link></li>
              <li><Link href="/business-resources" className="text-gray-300 hover:text-white">Business Owners</Link></li>
              <li><Link href="/companions" className="text-gray-300 hover:text-white">Animal Companions</Link></li>
              <li><Link href="/evidence/pilot" className="text-gray-300 hover:text-white">Research & Evidence</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/register" className="text-gray-300 hover:text-white">Get Involved</Link></li>
              <li><a href="https://vacc.charity" className="text-gray-300 hover:text-white">Main VACC Website</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 VACC - Veterinary and Community Care. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Educational tool for One Welfare Social Workers in veterinary teams
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
