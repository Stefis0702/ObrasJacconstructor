import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { ProjectDetails } from '../Context/Context';


async function generateQuoteFormPDF(projectDetails: ProjectDetails): Promise<Uint8Array> {
  const selectedOption = projectDetails.constructionType;
  const additionalServices = projectDetails.paintingOptions;
  const customerInfo = projectDetails;
  const termsAgreed = true;
  

  // Crear un nuevo documento PDF
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();

  // Definir las fuentes a utilizar
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // Definir el tamaño de fuente
  const fontSize = 12;

  // Definir la posición inicial de escritura
  let yPosition = page.getHeight() - 50;

  // Función para añadir texto al PDF
  const addTextToPDF = (text: string) => {
    page.drawText(text, {
      x: 50,
      y: yPosition,
      size: fontSize,
      font: font,
      color: rgb(0, 0, 0),
    });
    yPosition -= fontSize + 10; // Espacio entre líneas
  };

  // Añadir título del formulario
  addTextToPDF('PRESUPUESTO');

  // Añadir tipo de presupuesto
  addTextToPDF(`Tipo de Presupuesto: ${selectedOption}`);

  // Añadir opciones específicas del tipo de presupuesto
  if (selectedOption === 'reformar') {
    // Añadir opciones de reforma
    // ...

  } else if (selectedOption === 'construccion') {
    // Añadir opciones de construcción
    // ...

  } else if (selectedOption === 'demolicion') {
    // Añadir opciones de demolición
    // ...
  }

  // Añadir ubicación del proyecto
  addTextToPDF(`Ubicación del Proyecto: ${projectDetails.location}`);

  // Añadir otros detalles
  addTextToPDF(`Otros detalles: ${additionalServices}`);

  // Añadir nombre del cliente
  addTextToPDF(`Nombre: ${customerInfo.name}`);

  // Añadir email del cliente
  addTextToPDF(`Email: ${customerInfo.email}`);

  // Añadir teléfono del cliente
  addTextToPDF(`Teléfono: ${customerInfo.phone}`);

  // Añadir aceptación de términos y condiciones
  addTextToPDF(`Acepto los términos y condiciones: ${termsAgreed ? 'Sí' : 'No'}`);

  // Guardar el documento PDF como un ArrayBuffer
  const pdfBytes = await pdfDoc.save();
  
  return pdfBytes;
}

export { generateQuoteFormPDF };
