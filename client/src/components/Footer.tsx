import { useTranslation } from "react-i18next";
import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">{t('hero.fullName')}</h3>
          <p className="text-gray-400 mb-6">{t('footer.tagline')}</p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="mailto:moncifcherradi240@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-8 h-8" />
            </a>
            <a
              href="tel:0644452157"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-8 h-8" />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
