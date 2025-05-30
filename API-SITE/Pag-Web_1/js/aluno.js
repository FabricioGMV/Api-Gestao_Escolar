const API_URL = "http://127.0.0.1:5000/api/alunos";

// Função de Listar Alunos
document.getElementById("listar-alunos").addEventListener("click", async () => {
  const res = await fetch(API_URL);
  const alunos = await res.json();

  const container = document.getElementById("alunos-lista");
  container.innerHTML =
    alunos
      .map(
        (a) => `
    <br>
    <div>
      <strong>    ${a.nome} </strong> (ID: ${a.id})<br>
      Média:      ${a.media_final} <br>
      Turma:      ${a.turma_id} <br>
    </div>
  `
      )
      .join("");
});