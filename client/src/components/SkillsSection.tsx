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
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('skills.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-gray-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-blue-600 text-3xl mb-4">
                  <skill.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Personal Qualities */}
        <div className="gradient-medical rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">
            {t('skills.personalQualities')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {qualities.map((quality, index) => (
              <div key={index} className="text-center p-4">
                <quality.icon className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">{quality.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
