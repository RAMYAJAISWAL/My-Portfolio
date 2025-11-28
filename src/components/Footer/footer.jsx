import React from 'react'
const Footer=()=>{
    return(
        
    <footer className="bg-slate-800 text-white py-6 ">
      <div className="max-w-6xl mx-auto px-6 text-center">


        {/* Line */}
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 mb-4 rounded-full"></div>

        {/* Bottom Text */}
        <p className="text-white text-sm">
          © {new Date().getFullYear()} Ramya Jaiswal 
        </p>
        <p className="text-white text-sm">
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

    
export default Footer;