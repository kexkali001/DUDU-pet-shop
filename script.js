document.getElementById('agendamentoForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById('nome').value;
    const petNome = document.getElementById('petNome').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    // Exibe uma mensagem de confirmação
    const mensagem = `Agendamento feito com sucesso para ${petNome} no dia ${data} às ${hora}.`;
    document.getElementById('mensagem').innerText = mensagem;

    // Limpa o formulário
    this.reset();
});
document.getElementById('agendamentoForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o envio do formulário

    const nome = document.getElementById('nome').value;
    const petNome = document.getElementById('petNome').value;
    const data = document.getElementById('data').value;
    const hora = document.getElementById('hora').value;

    // Cria a mensagem para o WhatsApp
    const mensagem = Olá! Gostaria de agendar um banho e tosa.\n\nNome do Tutor: ${ nome }\nNome do Pet: ${ petNome }\nData: ${ data } \nHora: ${ hora };

    // Codifica a mensagem para uso em URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Número do WhatsApp (substitua pelo número do seu pet shop)
    const numeroWhatsApp = '5516992320582'; // Exemplo: +55 11 99999-9999

    // Gera o link do WhatsApp
    const linkWhatsApp = https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada};

        // Redireciona para o WhatsApp
        window.open(linkWhatsApp, '_blank');

    // Limpa o formulário
    this.reset();
});
