import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const downloadCV = async () => {
    try {
      const response = await fetch('/api/cv/download');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'Moncif_CHERRADI_CV.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Error downloading CV:', error);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full z-50 top-0 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-sky-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">
                  {t('hero.fullName').split(' ')[0][0]}{t('hero.fullName').split(' ')[1][0]}
                </span>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                  {t('hero.fullName').split(' ')[0]} {t('hero.fullName').split(' ')[1]}
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  Infirmier Auxiliaire
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('hero')}
              className="relative px-3 py-2 text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium group"
            >
              {t('nav.home')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-sky-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="relative px-3 py-2 text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium group"
            >
              {t('nav.about')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-sky-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="relative px-3 py-2 text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium group"
            >
              {t('nav.experience')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-sky-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="relative px-3 py-2 text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium group"
            >
              {t('nav.skills')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-sky-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="relative px-3 py-2 text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium group"
            >
              {t('nav.contact')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-sky-500 group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center space-x-1 border-l border-gray-200 pl-6">
              <Button
                variant={i18n.language === 'fr' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => changeLanguage('fr')}
                className="text-xs h-8 px-3 rounded-full transition-all duration-300"
              >
                🇫🇷 FR
              </Button>
              <Button
                variant={i18n.language === 'ar' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => changeLanguage('ar')}
                className="text-xs h-8 px-3 rounded-full transition-all duration-300"
              >
                🇲🇦 AR
              </Button>
              <Button
                variant={i18n.language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => changeLanguage('en')}
                className="text-xs h-8 px-3 rounded-full transition-all duration-300"
              >
                🇺🇸 EN
              </Button>
            </div>

            {/* CV Download */}
            <Button 
              onClick={downloadCV} 
              className="bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full px-6"
            >
              <Download className="w-4 h-4 mr-2" />
              {t('nav.downloadCV')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-blue-100">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              >
                {t('nav.experience')}
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              >
                {t('nav.skills')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all font-medium"
              >
                {t('nav.contact')}
              </button>
              
              {/* Mobile Language Switcher */}
              <div className="flex space-x-2 px-4 py-3 border-t border-gray-100 mt-4">
                <Button
                  variant={i18n.language === 'fr' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => changeLanguage('fr')}
                  className="rounded-full flex-1"
                >
                  🇫🇷 FR
                </Button>
                <Button
                  variant={i18n.language === 'ar' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => changeLanguage('ar')}
                  className="rounded-full flex-1"
                >
                  🇲🇦 AR
                </Button>
                <Button
                  variant={i18n.language === 'en' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => changeLanguage('en')}
                  className="rounded-full flex-1"
                >
                  🇺🇸 EN
                </Button>
              </div>
              
              <div className="px-4 py-2">
                <Button 
                  onClick={downloadCV} 
                  className="w-full bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 text-white shadow-lg rounded-full py-3"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t('nav.downloadCV')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
