import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

export default function EducationSection() {
  const { t } = useTranslation();

  const languages = [
    {
      flag: "🇲🇦",
      name: t('education.arabic'),
      level: t('education.motherTongue'),
      dots: 5,
      color: "bg-green-600",
    },
    {
      flag: "🇫🇷",
      name: t('education.french'),
      level: t('education.fluent'),
      dots: 4,
      color: "bg-blue-600",
    },
    {
      flag: "🇺🇸",
      name: t('education.english'),
      level: t('education.schoolLevel'),
      dots: 2,
      color: "bg-sky-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t('education.title')}
            </h2>
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white p-3 rounded-full mr-4 mt-1">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {t('education.auxiliaryNurseDiploma')}
                      </h3>
                      <p className="text-blue-600 font-medium mb-2">
                        {t('education.ifsiKhouribga')}
                      </p>
                      <p className="text-gray-600">{t('education.year2024')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white p-3 rounded-full mr-4 mt-1">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {t('education.baccalaureate')}
                      </h3>
                      <p className="text-green-600 font-medium mb-2">
                        {t('education.lifeEarthSciences')}
                      </p>
                      <p className="text-gray-600">{t('education.academicTraining')}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t('education.languages')}
            </h2>
            <div className="space-y-6">
              {languages.map((language, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-4">{language.flag}</span>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {language.name}
                          </h3>
                          <p className="text-gray-600">{language.level}</p>
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className={`w-3 h-3 rounded-full ${
                              dotIndex < language.dots
                                ? language.color
                                : "bg-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
