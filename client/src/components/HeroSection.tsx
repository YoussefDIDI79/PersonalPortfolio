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
    <section id="hero" className="pt-16 gradient-medical text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-shadow">
              {t('hero.fullName').split(' ')[0]}{' '}
              <span className="text-sky-200">{t('hero.fullName').split(' ')[1]}</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-sky-100">
              "{t('hero.tagline')}"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection('about')}
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
              >
                {t('hero.discoverProfile')}
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600"
              >
                {t('hero.contactMe')}
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
              alt={`${t('hero.fullName')} - ${t('nav.home')}`}
              className="w-80 h-80 rounded-full shadow-2xl border-8 border-white object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
