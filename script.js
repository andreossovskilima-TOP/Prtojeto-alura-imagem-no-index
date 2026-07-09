document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA DO BOTÃO MENSAGEM MOTIVACIONAL ---
    const botaoMensagem = document.getElementById("btnMensagem");
    const mensagem = document.getElementById("mensagemSucesso");

    botaoMensagem.addEventListener("click", function() {
        if (mensagem.style.display === "block") {
            mensagem.style.display = "none";
            botaoMensagem.textContent = "Ver Mensagem Motivacional";
        } else {
            mensagem.style.display = "block";
            botaoMensagem.textContent = "Esconder Mensagem";
        }
    });

    // --- LÓGICA DO BOTÃO DE CURTIR ---
    const botaoCurtir = document.getElementById("btnCurtir");
    const contadorTexto = document.getElementById("contador-curtidas");

    // Recupera o número de curtidas salvas no navegador, ou começa em 0 se não houver nenhuma
    let curtidas = localStorage.getItem("totalCurtidas") ? parseInt(localStorage.getItem("totalCurtidas")) : 0;
    
    // Atualiza o texto do botão com o valor recuperado
    contadorTexto.textContent = curtidas;

    botaoCurtir.addEventListener("click", function() {
        curtidas++; // Aumenta 1 curtida
        contadorTexto.textContent = curtidas; // Atualiza a tela
        localStorage.setItem("totalCurtidas", curtidas); // Salva o novo valor no navegador
    });
});