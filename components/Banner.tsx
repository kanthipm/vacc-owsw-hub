interface BannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function Banner({ title, subtitle, backgroundImage = "/banner-default.jpg" }: BannerProps) {
  return (
    <section 
      className="relative h-[500px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImage}')`
      }}
    >
      {/* Navigation overlay - this will be handled by the Nav component */}
      <div className="absolute inset-0 flex items-center justify-center pt-16">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 
            className="font-playfair font-bold mb-6 leading-tight banner-title"
            style={{ fontSize: '45px' }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
