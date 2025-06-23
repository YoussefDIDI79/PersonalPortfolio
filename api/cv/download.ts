import type { VercelRequest, VercelResponse } from '@vercel/node';
import PDFDocument from 'pdfkit';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

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
      .text('Email: moncifcherradi240@gmail.com', 50, 170)
      .text('Téléphone: 06.44.45.21.57', 50, 185)
      .text('Adresse: 162 Partie 1 Lotissement zaitouna, Khouribga', 50, 200);

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
      .text('• Savoir analyser et retranscrire l\'information', 50, 415)
      .text('• Être méthodique', 50, 430)
      .text('• Savoir s\'adapter à chaque patient', 50, 445)
      .text('• Avoir un excellent sens du relationnel', 50, 460)
      .text('• Faire preuve de pédagogie', 50, 475)
      .text('• Être vigilant', 50, 490);

    // Languages
    doc.fontSize(14).text('LANGUES', 50, 520);
    doc.fontSize(10)
      .text('• Arabe (langue maternelle)', 50, 540)
      .text('• Français (courant)', 50, 555)
      .text('• Anglais (niveau scolaire)', 50, 570);

    // Personal Qualities
    doc.fontSize(14).text('QUALITÉS PERSONNELLES', 50, 600);
    doc.fontSize(10)
      .text('La rigueur • L\'autonomie • Le dynamisme • L\'esprit d\'équipe', 50, 620)
      .text('La créativité • La motivation • La passion • Le bon relationnel', 50, 635);

    doc.end();
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: "Error generating CV" 
    });
  }
}