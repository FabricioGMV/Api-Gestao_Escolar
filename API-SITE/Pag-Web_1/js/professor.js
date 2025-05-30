const API_URL_PROFESSOR = "http://127.0.0.1:5000/api/professores";

document.getElementById("listar-professores").addEventListener("click", async () => {
  const res = await fetch(API_URL_PROFESSOR);
  const professores = await res.json();

  const container = document.getElementById("professores-lista");
  container.innerHTML =
    professores
      .map(
        (p) => `
      <br>
      <div>
        <strong>    ${p.nome}</strong> (ID: ${p.id})<br>
        Matéria:    ${p.materia}<br>
        Observação: ${p.observacoes}<br>
        Idade:      ${p.idade}<br>
      </div>
    `
      )
        .join("");
  });