document.getElementById('btnSaudacao').addEventListener('click', function() {
    document.getElementById('saudacao').innerText = 'Olá, amante dos pets! Obrigado por visitar nosso site!';
});

document.getElementById('btnWhatsApp').addEventListener('click', function() {
    const mensagem = encodeURIComponent("Olá, gostaria de fazer um pedido!");
    const numeroWhatsApp = "5516992320582";
    const urlWhatsApp = https://wa.me/${numeroWhatsApp}?text=${mensagem};
    window.open(urlWhatsApp, '_blank');
});
