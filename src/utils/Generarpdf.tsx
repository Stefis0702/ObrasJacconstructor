import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { ProjectDetails } from '../Context/Context';


async function generateQuoteFormPDF(projectDetails: ProjectDetails): Promise<Uint8Array> {
  const selectedOption = projectDetails.constructionType;
  const additionalServices = projectDetails.paintingOptions;
 // const customerInfo = projectDetails;
  const termsAgreed = true;

  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();


  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const fontSize = 12;


  let yPosition = page.getHeight() - 50;

 
  const addTextToPDF = (text: string) => {
    page.drawText(text, {
      x: 50,
      y: yPosition,
      size: fontSize,
      font: font,
      color: rgb(0, 0, 0),
    });
    yPosition -= fontSize + 10; 
  };

 
  addTextToPDF('PRESUPUESTO');
  addTextToPDF(`Tipo de Presupuesto: ${selectedOption}`);

  if (selectedOption === 'reformar') {
   

  } else if (selectedOption === 'construccion') {
    

  } else if (selectedOption === 'demolicion') {
    
  }

  
  addTextToPDF(`Ubicación del Proyecto: ${projectDetails.location}`);

 
  addTextToPDF(`Otros detalles: ${additionalServices}`);

  // Añadir nombre del cliente
  // addTextToPDF(`Nombre: ${customerInfo.name}`);

  // Añadir email del cliente
  // addTextToPDF(`Email: ${customerInfo.email}`);

  // Añadir teléfono del cliente
  // addTextToPDF(`Teléfono: ${customerInfo.phone}`);

  // Añadir aceptación de términos y condiciones
  addTextToPDF(`Acepto los términos y condiciones: ${termsAgreed ? 'Sí' : 'No'}`);

 
  const pdfBytes = await pdfDoc.save();
  
  return pdfBytes;
}

export { generateQuoteFormPDF };