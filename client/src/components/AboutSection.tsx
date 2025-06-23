import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Heart, Users } from "lucide-react";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Healthcare professional"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {t('about.professionalProfile')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.profileText')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-sky-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {t('about.motivation')}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t('about.motivationText')}
                </p>
              </CardContent>
            </Card>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-green-600">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">{t('about.graduated2024')}</span>
              </div>
              <div className="flex items-center text-green-600">
                <Heart className="w-5 h-5 mr-2" />
                <span className="font-medium">{t('about.passionate')}</span>
              </div>
              <div className="flex items-center text-green-600">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-medium">{t('about.teamSpirit')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
