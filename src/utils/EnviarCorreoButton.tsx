
const enviarCorreoDesdeReact = async () => {
  const data = {
    destinatario: 'obrasjacconstructor@gmail.com',
    asunto: 'Notificacion',
    contenido: 'Cuerpo del correo',
  };

  try {
    const response = await fetch('/api/enviarCorreo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result.mensaje);
  } catch (error) {
    console.error('Error al enviar la solicitud:', error);
  }
};

const EnviarCorreoButton: React.FC = () => {
  return (
    <button onClick={enviarCorreoDesdeReact}>Enviar Correo</button>
  );
};

export default EnviarCorreoButton;