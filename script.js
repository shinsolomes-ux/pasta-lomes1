function verificarResposta(substitutaCorreta) {
    const campoResultado = document.getElementById('resultado');
    
    if (substitutaCorreta) {
        campoResultado.innerText = "🎉 Correto! A irrigação por gotejamento evita o desperdício de água.";
        campoResultado.style.color = "#2e7d32"; // Texto verde para acerto
    } else {
        campoResultado.innerText = "❌ Tente novamente! Essa atitude não ajuda o planeta.";
        campoResultado.style.color = "#d32f2f"; // Texto vermelho para erro
    }
}
