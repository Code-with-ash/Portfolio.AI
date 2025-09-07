import React from 'react';
const AboutSection = () => {
  return (
    // Section container with a dark background and padding
    <div className=" h-screen w-full bg-gradient-to-b from-[#e7c8b2] via-[#e8bd92] to-[#edc4a7] text-white py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full w-full ">
        
        {/* Left Column: Image */}
        <div className="w-full h-auto flex justify-center">
          <img
            src="./pexels-thisisengineering-3861951.jpg"
            alt="A professional photo of Ashmit Mishra"
            width={400}
            height={400}
            className="rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Column: Text Content */}
        <div className='flex flex-col justify-center'>
          <h2 className="text-4xl md:text-6xl font-bold font-knewave mb-6 text-[#d68f61]">
            ABOUT ME
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            I'm Ashmit , a Full-Stack Developer passionate about building Fast, Scalable, and User-friendly web applications. My expertise lies in crafting Modern digital experiences with a Robust backend.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            With a strong foundation in Next.js, Prisma, and PostgreSQL, I enjoy solving complex problems and turning ideas into reality. When I'm not coding, I enjoy exploring new technologies.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;