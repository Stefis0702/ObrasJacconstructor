import { db } from '../FireBase/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import { generateQuoteFormPDF } from '../utils/Generarpdf';
import { ProjectDetails } from '../Context/Context';

interface Attachment {
  filename: string;
  content: string;
  encoding: string;
  contentType: string;
}

async function sendCustomEmail(email: string, subject: string, body: string, attachPDF = false, projectDetails: ProjectDetails | null = null) {
  const collectionRef = collection(db, 'mail');
  const emailContent = {
    to: email,
    message: {
      subject: subject,
      html: `<p>${body}</p>`,
      attachments: [] as Attachment[], 
    },
  };

  if (attachPDF && projectDetails) {
    
    const pdfBytes = await generateQuoteFormPDF(projectDetails);

    
    const pdfBase64 = btoa(String.fromCharCode(...new Uint8Array(pdfBytes)));

   
    emailContent.message.attachments.push({
      filename: 'cotizacion.pdf',
      content: pdfBase64,
      encoding: 'base64', 
      contentType: 'application/pdf',
    });
  }

 
  try {
    await addDoc(collectionRef, emailContent);
    console.log('Correo electrónico enviado correctamente.');
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    throw new Error('Error al enviar el correo electrónico.');
  }
}

export { sendCustomEmail };