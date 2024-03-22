const homeLink = document.getElementById("homeLink");
const personagensLink = document.getElementById("personagensLink");
const localizacoesLink = document.getElementById("localizacoesLink");
const historiaLink = document.getElementById("historiaLink");                                                               

// Adicionando eventos de clique aos links
homeLink.addEventListener("click", function(event) {
    event.preventDefault(); // Impede que o link recarregue a página
    // Redireciona para a página home (pode ser a mesma página ou outra)
    window.location.href = "home.html";
});

personagensLink.addEventListener("click", function(event) {
    event.preventDefault();
    // Redireciona para a página de personagens
    window.location.href = "personagens.html";
});

localizacoesLink.addEventListener("click", function(event) {
    event.preventDefault();
    // Redireciona para a página de localizações
    window.location.href = "localizacoes.html";
});

historiaLink.addEventListener("click", function(event) {
    event.preventDefault();
    // Redireciona para a página de história
    window.location.href = "historia.html";
});