import {db} from "../FireBase/Firebase"
import { collection, addDoc } from "firebase/firestore"

async function sendCustomEmail(email:string,subject:string,body:string) {

    const collectionRef= collection(db,"emails");
    const emailContent = {
        to: email,
        message: {
          subject: subject,
          text: body,
          html: `<p>${body}</p>`,
        },
        
    };
    return await addDoc(collectionRef,emailContent);
}
export default sendCustomEmail