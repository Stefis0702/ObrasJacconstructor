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
      attachments: [] as Attachment[], // Definir el tipo explícitamente como Attachment[]
    },
  };

  if (attachPDF && projectDetails) {
    // Generar el PDF con los datos del formulario
    const pdfBytes = await generateQuoteFormPDF(projectDetails);

    // Convertir el ArrayBuffer a una cadena Base64 usando btoa()
    const pdfBase64 = btoa(String.fromCharCode(...new Uint8Array(pdfBytes)));

    // Adjuntar el PDF al correo electrónico
    emailContent.message.attachments.push({
      filename: 'cotizacion.pdf',
      content: pdfBase64,
      encoding: 'base64', // Indica que el contenido es en Base64
      contentType: 'application/pdf',
    });
  }

  // Enviar el correo electrónico
  try {
    await addDoc(collectionRef, emailContent);
    console.log('Correo electrónico enviado correctamente.');
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    throw new Error('Error al enviar el correo electrónico.');
  }
}

export { sendCustomEmail };