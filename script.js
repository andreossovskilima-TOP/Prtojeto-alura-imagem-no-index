// Aguarda que o HTML seja totalmente carregado antes de executar o script
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o botão e a mensagem oculta através dos seus IDs/Classes
    const botao = document.getElementById("btnMensagem");
    const mensagem = document.getElementById("mensagemSucesso");

    // Adiciona um evento de clique ao botão
    botao.addEventListener("click", function() {
        // Verifica se a mensagem está escondida ou visível
        if (mensagem.style.display === "block") {
            mensagem.style.display = "none";
            botao.textContent = "Ver Mensagem Motivacional";
        } else {
            mensagem.style.display = "block";
            botao.textContent = "Esconder Mensagem";
        }
    });
});
