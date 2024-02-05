const emailjs = require('emailjs-com');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { destinatario, asunto, contenido } = req.body;

    // Configura tu servicio de emailjs utilizando las variables de entorno
    emailjs.init(process.env.USER_EMAILJS);

    // Configura el mensaje
    const templateParams = {
      to_email: destinatario,
      subject: asunto,
      content: contenido,
    };

    try {
      // Envía el correo utilizando las variables de entorno
      const response = await emailjs.send(
        process.env.SERVICE_EMAILJS,
        process.env.TEMPLATE_EMAILJS,
        templateParams
      );

      console.log('Correo enviado con éxito:', response);
      res.status(200).json({ mensaje: 'Correo enviado con éxito' });
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).json({ error: 'Error al enviar el correo' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}