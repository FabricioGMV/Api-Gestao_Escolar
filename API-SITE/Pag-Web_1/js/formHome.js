
const abrirModal = document.getElementById("login");
const modal = document.getElementById("modal-fundo");
const fecharModal = document.getElementById("btnFechar");
const form = document.getElementById("formModal");

abrirModal.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "flex";
});

fecharModal.addEventListener("click", function () {
    modal.style.display = "none";
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = "../../Pag-Web_2/html/index.html";
});

window.addEventListener("click", function (e) {
if (e.target === modal) {
    modal.style.display = "none";
    }
});
