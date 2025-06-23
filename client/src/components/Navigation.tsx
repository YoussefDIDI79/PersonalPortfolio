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
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold text-blue-600">
              {t('hero.fullName').split(' ')[0]} {t('hero.fullName').split(' ')[1]}
            </div>
            <div className="hidden md:block ml-2 text-sm text-gray-500">
              {t('nav.home')}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              {t('nav.experience')}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              {t('nav.skills')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              {t('nav.contact')}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 border-l pl-4">
              <Button
                variant={i18n.language === 'fr' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => changeLanguage('fr')}
                className="text-xs"
              >
                FR
              </Button>
              <Button
                variant={i18n.language === 'ar' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => changeLanguage('ar')}
                className="text-xs"
              >
                AR
              </Button>
              <Button
                variant={i18n.language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => changeLanguage('en')}
                className="text-xs"
              >
                EN
              </Button>
            </div>

            {/* CV Download */}
            <Button onClick={downloadCV} className="bg-blue-600 hover:bg-blue-700">
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
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-3 py-2 text-gray-500 hover:text-blue-600"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-500 hover:text-blue-600"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="block w-full text-left px-3 py-2 text-gray-500 hover:text-blue-600"
              >
                {t('nav.experience')}
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left px-3 py-2 text-gray-500 hover:text-blue-600"
              >
                {t('nav.skills')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-500 hover:text-blue-600"
              >
                {t('nav.contact')}
              </button>
              
              {/* Mobile Language Switcher */}
              <div className="flex space-x-2 px-3 py-2">
                <Button
                  variant={i18n.language === 'fr' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => changeLanguage('fr')}
                >
                  FR
                </Button>
                <Button
                  variant={i18n.language === 'ar' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => changeLanguage('ar')}
                >
                  AR
                </Button>
                <Button
                  variant={i18n.language === 'en' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => changeLanguage('en')}
                >
                  EN
                </Button>
              </div>
              
              <div className="px-3 py-2">
                <Button onClick={downloadCV} className="w-full bg-blue-600 hover:bg-blue-700">
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
