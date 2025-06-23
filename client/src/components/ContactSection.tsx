import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Download,
  Send,
} from "lucide-react";
import type { InsertContactMessage } from "@shared/schema";

export default function ContactSection() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé",
        description: "Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
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
      toast({
        title: "Erreur",
        description: "Impossible de télécharger le CV. Veuillez réessayer.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">{t('contact.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {t('contact.contactInfo')}
            </h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contact.phone')}</h4>
                  <p className="text-gray-600">{t('contact.phoneNumber')}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contact.email')}</h4>
                  <p className="text-gray-600">{t('contact.emailAddress')}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contact.address')}</h4>
                  <p className="text-gray-600">{t('contact.addressText')}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('contact.linkedin')}</h4>
                  <p className="text-gray-600">{t('contact.linkedinUrl')}</p>
                </div>
              </div>
            </div>

            {/* CV Download */}
            <Card className="mt-8 gradient-medical text-white">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-4">{t('contact.downloadCV')}</h4>
                <p className="mb-4">{t('contact.downloadSubtitle')}</p>
                <Button
                  onClick={downloadCV}
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {t('contact.downloadButton')}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {t('contact.sendMessage')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">
                  {t('contact.fullName')} *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder={t('contact.placeholderName')}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">
                  {t('contact.email')} *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder={t('contact.placeholderEmail')}
                  required
                />
              </div>

              <div>
                <Label htmlFor="subject">{t('contact.subject')}</Label>
                <Input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder={t('contact.placeholderSubject')}
                />
              </div>

              <div>
                <Label htmlFor="message">
                  {t('contact.message')} *
                </Label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={t('contact.placeholderMessage')}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={contactMutation.isPending}
              >
                <Send className="w-4 h-4 mr-2" />
                {contactMutation.isPending ? "Envoi..." : t('contact.sendButton')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
