import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGooglePlay, FaApple } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white px-6 md:px-16 pt-12 pb-6 mt-10">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">

        <div>
          <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">Company</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">About Us</a></li>
            <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">View Website in</h4>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 text-base">✓</span>
            <span className="text-gray-400 text-sm">English</span>
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">Need Help?</h4>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">Visit Help Center</a></li>
            <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-200">Share Feedback</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold tracking-widest uppercase mb-5">Connect with Us</h4>

          <div className="flex gap-4 mb-6">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white/50 transition-all duration-200"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white/50 transition-all duration-200"
            >
              <FaXTwitter size={16} />
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="flex items-center gap-3 bg-black border border-white/20 hover:border-white/50 rounded-lg px-3 py-2 w-fit transition-all duration-200"
            >
              <FaGooglePlay size={20} className="text-white" />
              <div className="flex flex-col leading-tight">
                <span className="text-gray-400 text-[9px] uppercase tracking-widest">Get it on</span>
                <span className="text-white text-sm font-semibold">Google Play</span>
              </div>
            </a>

            {/* App Store */}
            <a
              href="#"
              className="flex items-center gap-3 bg-black border border-white/20 hover:border-white/50 rounded-lg px-3 py-2 w-fit transition-all duration-200"
            >
              <FaApple size={22} className="text-white" />
              <div className="flex flex-col leading-tight">
                <span className="text-gray-400 text-[9px] uppercase tracking-widest">Download on the</span>
                <span className="text-white text-sm font-semibold">App Store</span>
              </div>
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 mb-5" />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <p className="text-gray-600 text-xs tracking-wide">© 2026 STAR. All Rights Reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="text-gray-600 text-xs hover:text-gray-400 transition-colors duration-200">Terms Of Use</a>
          <a href="#" className="text-gray-600 text-xs hover:text-gray-400 transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="text-gray-600 text-xs hover:text-gray-400 transition-colors duration-200">FAQ</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;