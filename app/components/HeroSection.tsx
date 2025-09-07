// components/HeroSection.tsx
export default function HeroSection() {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-90"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-100/500 via-orange-200/500 to-orange-300/50 -z-10"></div>

      <div className="flex flex-col  justify-center h-full items-center gap-4 text-white px-4">
        <h1 className="text-6xl md:text-8xl font-bold font-knewave tracking-wider">
          ASHMIT MISHRA
        </h1>
        <h2 className="text-4xl md:text-6xl mt-4 font-light">
          FULL STACK <span className="text-black font-semibold">DEVELOPER</span>
        </h2>
        <h2 className="text-4xl">I BUILD <span className="text-black font-semibold">RESPONSIVE AND SCALABLE</span> WEB APPLICATIONS</h2>
         <button className="mt-4 px-4 py-3 border text-white rounded-3xl font-bold hover:bg-white hover:text-black transition-all duration-300">
        Explore the Portfolio
      </button>
      </div>
     
    </div>
  );
}