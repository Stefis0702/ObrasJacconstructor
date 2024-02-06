import { db } from "../FireBase/Firebase";
import { collection, addDoc } from "firebase/firestore";



async function sendCustomEmail(email: string, subject: string, body: string) {

    const collectionRef = collection(db, "mail");
    const emailContent = {
        to: email,
        message: {
            attachments: [{}],
            subject: "Gracias por conectarte con nosotros",
            html: `<p>Estimado <strong>${subject}</strong><br>
          te has contactato con nosotros<br>
          Aquí está una copia de tu mensaje<br>
          ${body}</p>`,
        },

    };
   
    return await addDoc(collectionRef,emailContent);
}
export default sendCustomEmail;
