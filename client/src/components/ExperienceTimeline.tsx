import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Hospital, Activity, Baby, Ambulance, MapPin } from "lucide-react";

export default function ExperienceTimeline() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('experience.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">{t('experience.subtitle')}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-600 hidden lg:block"></div>

          {/* Hospital Hassan II */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                <Card className="lg:ml-auto lg:max-w-md shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                        <Hospital className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {t('experience.hospitalHassan')}
                        </h3>
                        <p className="text-gray-600">{t('experience.khouribga')}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-sky-50 p-3 rounded-lg text-center">
                        <Activity className="w-6 h-6 text-sky-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">
                          {t('experience.medicine')}
                        </p>
                      </div>
                      <div className="bg-sky-50 p-3 rounded-lg text-center">
                        <Hospital className="w-6 h-6 text-sky-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">
                          {t('experience.surgery')}
                        </p>
                      </div>
                      <div className="bg-sky-50 p-3 rounded-lg text-center">
                        <Baby className="w-6 h-6 text-sky-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">
                          {t('experience.pediatrics')}
                        </p>
                      </div>
                      <div className="bg-sky-50 p-3 rounded-lg text-center">
                        <Ambulance className="w-6 h-6 text-sky-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">
                          {t('experience.emergency')}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {t('experience.hospitalDescription')}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline dot */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

              <div className="lg:w-1/2 lg:pl-8">
                <img
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Modern medical equipment"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Health Centers */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row-reverse items-center">
              <div className="lg:w-1/2 lg:pl-8 mb-8 lg:mb-0">
                <Card className="lg:mr-auto lg:max-w-md shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-600 text-white p-3 rounded-full mr-4">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {t('experience.healthCenters')}
                        </h3>
                        <p className="text-gray-600">{t('experience.centers')}</p>
                      </div>
                    </div>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-4 h-4 text-green-600 mr-3" />
                        <span className="text-sm">Centre Zitouna</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-4 h-4 text-green-600 mr-3" />
                        <span className="text-sm">Centre El Qods</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <MapPin className="w-4 h-4 text-green-600 mr-3" />
                        <span className="text-sm">Centre El Brik</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {t('experience.centersDescription')}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline dot */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>

              <div className="lg:w-1/2 lg:pr-8">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                  alt="Healthcare center environment"
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
