import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart3,
  ClipboardList,
  UserCheck,
  MessageCircle,
  GraduationCap,
  Eye,
  Shield,
  Users,
  Zap,
  Lightbulb,
  Rocket,
  Heart,
} from "lucide-react";

export default function SkillsSection() {
  const { t } = useTranslation();

  const skills = [
    {
      icon: BarChart3,
      title: t('skills.analyzeRetranscribe'),
      description: t('skills.analyzeDescription'),
    },
    {
      icon: ClipboardList,
      title: t('skills.methodology'),
      description: t('skills.methodologyDescription'),
    },
    {
      icon: UserCheck,
      title: t('skills.patientAdaptation'),
      description: t('skills.adaptationDescription'),
    },
    {
      icon: MessageCircle,
      title: t('skills.relationalSkills'),
      description: t('skills.relationalDescription'),
    },
    {
      icon: GraduationCap,
      title: t('skills.pedagogy'),
      description: t('skills.pedagogyDescription'),
    },
    {
      icon: Eye,
      title: t('skills.vigilance'),
      description: t('skills.vigilanceDescription'),
    },
  ];

  const qualities = [
    { icon: Shield, title: t('skills.rigor') },
    { icon: UserCheck, title: t('skills.autonomy') },
    { icon: Zap, title: t('skills.dynamism') },
    { icon: Users, title: t('skills.teamwork') },
    { icon: Lightbulb, title: t('skills.creativity') },
    { icon: Rocket, title: t('skills.motivation') },
    { icon: Heart, title: t('skills.passion') },
    { icon: MessageCircle, title: t('skills.relationnel') },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-br from-blue-100/20 to-sky-100/20 rounded-full blur-3xl transform -translate-x-1/3"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-tl from-sky-100/20 to-blue-100/20 rounded-full blur-3xl transform translate-x-1/3"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('skills.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-sky-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {skill.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Qualities */}
        <div className="gradient-medical rounded-3xl p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold text-center mb-10">
              {t('skills.personalQualities')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {qualities.map((quality, index) => (
                <div key={index} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <quality.icon className="w-10 h-10 mx-auto mb-3" />
                  <p className="text-sm font-semibold">{quality.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
