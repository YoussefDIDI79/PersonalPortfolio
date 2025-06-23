import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import PDFDocument from "pdfkit";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully", data: message });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Generate and download CV
  app.get("/api/cv/download", (req, res) => {
    try {
      const doc = new PDFDocument();
      
      // Set response headers for PDF download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Moncif_CHERRADI_CV.pdf"');
      
      // Pipe the PDF to the response
      doc.pipe(res);

      // PDF Content
      doc.fontSize(20).text('Moncif CHERRADI', 50, 50);
      doc.fontSize(16).text('Infirmier Auxiliaire Diplômé', 50, 80);
      
      doc.fontSize(12);
      doc.text('Passionné par le soin et le service humain', 50, 110);
      
      // Contact Information
      doc.fontSize(14).text('CONTACT', 50, 150);
      doc.fontSize(10)
        .text('Email: moncif.cherradi@email.com', 50, 170)
        .text('Téléphone: +212 6XX XXX XXX', 50, 185)
        .text('Adresse: Khouribga, Maroc', 50, 200);

      // Education
      doc.fontSize(14).text('FORMATION', 50, 230);
      doc.fontSize(10)
        .text('2024 - Diplôme d\'infirmier auxiliaire, École IFSI, Khouribga', 50, 250)
        .text('Baccalauréat en Sciences de la vie et de la terre', 50, 265);

      // Experience
      doc.fontSize(14).text('EXPÉRIENCE', 50, 295);
      doc.fontSize(10)
        .text('Hôpital Hassan II, Khouribga', 50, 315)
        .text('• Médecine, Chirurgie, Pédiatrie, Urgences', 70, 330)
        .text('Centres de santé: Zitouna, El Qods, El Brik', 50, 350)
        .text('• Soins de proximité et contact avec la communauté', 70, 365);

      // Skills
      doc.fontSize(14).text('COMPÉTENCES', 50, 395);
      doc.fontSize(10)
        .text('• Analyser et retranscrire l\'information', 50, 415)
        .text('• Méthodologie et rigueur', 50, 430)
        .text('• Adaptation aux besoins des patients', 50, 445)
        .text('• Excellent sens relationnel', 50, 460)
        .text('• Pédagogie et vigilance', 50, 475);

      // Languages
      doc.fontSize(14).text('LANGUES', 50, 505);
      doc.fontSize(10)
        .text('• Arabe (langue maternelle)', 50, 525)
        .text('• Français (courant)', 50, 540)
        .text('• Anglais (niveau scolaire)', 50, 555);

      // Personal Qualities
      doc.fontSize(14).text('QUALITÉS PERSONNELLES', 50, 585);
      doc.fontSize(10)
        .text('Rigueur • Autonomie • Dynamisme • Esprit d\'équipe', 50, 605)
        .text('Créativité • Motivation • Passion', 50, 620);

      doc.end();
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Error generating CV" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
