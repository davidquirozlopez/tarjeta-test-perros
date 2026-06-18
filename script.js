document.addEventListener("DOMContentLoaded", function() {
  const whatsappBtn = document.getElementById("shareWhatsAppBtn");

  whatsappBtn.addEventListener("click", function() {
    // Texto del mensaje que recibirá el cliente final
    // Recuerda cambiar la URL_DEL_TEST por el enlace correspondiente
    const message = "Hola, te comparto el enlace para la evaluación de *Arquetipos de Alteraciones Emocionales*.\n\nPor favor, complétalo antes de nuestra sesión ingresando aquí:\nhttps://www.maestrianimal.com/test\n\nCualquier duda, me comentas. ¡Un saludo!";

    // Codificación segura del texto para la URL
    const encodedMessage = encodeURIComponent(message);
    
    // Generación del enlace universal de WhatsApp sin número definido
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedMessage}`;

    // Apertura en pestaña nueva para no interrumpir el flujo del profesional
    window.open(whatsappUrl, "_blank");
  });
});
