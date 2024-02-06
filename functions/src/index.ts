const functions=require('firebase-functions');
const nodemailer=require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "obrasjacconstructor@gmail.com",
        pass: "ifdnlkvavtexcbic",
    },
});
 
const sendContactForm=(form: { message: any; })=>{
    return transporter.sendMail({
        from: "obrasjacconstructor@gmail.com",
        bcc: "obrasjacconstructor@gmail.com",
        subject: "Nuevo mensaje de obrasjacconstructor",
        text: form.message
    })
    .then((r: { accepted: any; rejected: any; })=>{
        console.log("Accepted", r.accepted);
        console.log("Rejected", r.rejected);
    })
    .catch((e: any)=>{
        console.log("Error", e);
    })

}

export const contactFunction = functions.https.onRequest((request: { body: { secret?: any; message?: any; }; }, response: { send: (arg0: string) => any; }) => {
    if(request.body.secret !== "firebaseIsCool")return response.send("Missing secret");
    const contactFormData = {
        message: request.body.message,
        
    };
    
    sendContactForm(contactFormData);
    response.send("sending email");
    
  
})
