import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Heart, Users } from "lucide-react";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-sky-100/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-sky-100/30 to-blue-100/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fadeInUp">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Healthcare professional"
              className="rounded-xl shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-sky-500 rounded-xl flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t('about.professionalProfile')}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.profileText')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t('about.motivation')}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.motivationText')}
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center justify-center bg-green-50 rounded-xl p-4 border border-green-100">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                <span className="font-semibold text-green-700">{t('about.graduated2024')}</span>
              </div>
              <div className="flex items-center justify-center bg-red-50 rounded-xl p-4 border border-red-100">
                <Heart className="w-6 h-6 text-red-600 mr-3" />
                <span className="font-semibold text-red-700">{t('about.passionate')}</span>
              </div>
              <div className="flex items-center justify-center bg-blue-50 rounded-xl p-4 border border-blue-100">
                <Users className="w-6 h-6 text-blue-600 mr-3" />
                <span className="font-semibold text-blue-700">{t('about.teamSpirit')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
