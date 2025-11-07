import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0e1a]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bghero.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Character */}
      <div className="absolute bottom-0 left-0 w-[55%] h-[85vh] z-5">
        <Image
          src="/hero.svg"
          alt="AgniX Character"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-end min-h-screen mx-auto px-8 lg:px-16">
        {/* Right Content */}
        <div className="w-1/2 space-y-16 mr-24">
          <h1 className="text-5xl lg:text-[78px] font-bold italic">
            <span className="bg-linear-to-r from-[#ED5923] to-[#873314] bg-clip-text text-transparent pr-2">
              Welcome to AgniX !
            </span>
            <span className="text-white text-3xl lg:text-3xl font-medium italic text-center block mt-4">
              Ignite, Innovate, Accelerate
            </span>
          </h1>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-8">
            {/* Primary button with gradient */}
            <button className="bg-linear-to-r from-[#ED5923] to-[#873314] hover:opacity-90 text-white px-12 py-3 rounded-lg font-medium text-2xl transition-all">
              Join AgniX
            </button>

            {/* Secondary button*/}
            <button className="border-2 border-[#ED5923] text-orange-600 hover:bg-linear-to-r from-[#ED5923] to-[#873314] hover:text-white px-12 py-3 rounded-lg font-medium text-2xl transition-colors">
              {" "}
              Explore AgniX{" "}
            </button>
          </div>

          {/* Tagline */}
          <p className="text-white text-xl text-center font-light italic">
            AgniX empowers young founders to turn ideas into impact
          </p>
        </div>
      </div>
    </section>
  );
}
