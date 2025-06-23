import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 gradient-medical text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-sky-500/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="mb-6">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white/90 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Disponible pour opportunités
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-shadow leading-tight">
              {t('hero.fullName').split(' ')[0]}{' '}
              <span className="text-sky-200 block lg:inline">{t('hero.fullName').split(' ')[1]}</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-sky-100 leading-relaxed font-light">
              {t('hero.tagline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('about')}
                variant="secondary"
                size="lg"
                className="bg-white/95 text-blue-600 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-full px-8 py-3 font-semibold"
              >
                {t('hero.discoverProfile')}
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-2 border-white/80 text-white hover:bg-white/10 hover:border-white transition-all duration-300 rounded-full px-8 py-3 font-semibold backdrop-blur-sm"
              >
                {t('hero.contactMe')}
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-sky-200/20 rounded-full blur-3xl transform scale-110"></div>
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
                alt={`${t('hero.fullName')} - ${t('nav.home')}`}
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full shadow-2xl border-8 border-white/90 object-cover backdrop-blur-sm animate-float"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-xl">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-sky-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
