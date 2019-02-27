const nodemailer = require('nodemailer');

module.exports = (formulario) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'leonardoperello96@gmail.com', // Cambialo por tu email
            pass: '39403751' // Cambialo por tu password
        }
    });

    const mailOptions = {
        cc: 'leonardoperello96@gmail.com',
        to: `"${formulario.email}"`,
        from: 'leonardoperello96@gmail.com', // Cambia esta parte por el destinatario
        subject: "Inscripción o consulta",
        html: ` 
    <strong>NO responder a este email<br/>
    <br><br/>
    <strong>Nombre:</strong> ${formulario.nombre} <br/>
    <strong>Apellido:</strong> ${formulario.apellido}  <br/>
    <strong>E-mail:</strong> ${formulario.email}  <br/>
    <strong>Mensaje:</strong> ${formulario.mensaje} <br/>
    <strong>Dni:</strong> ${formulario.doc}  <br/>
    <strong>Telefono:</strong> ${formulario.numero}  <br/>
    <strong>Genero:</strong> ${formulario.gender}  <br/>
    <strong>Nacionalidad:</strong> ${formulario.nacionalidad}
    `
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
}
