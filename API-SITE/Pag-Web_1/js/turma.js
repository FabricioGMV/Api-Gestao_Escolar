const API_URL_TURMA = "http://127.0.0.1:5000/api/turmas";

document.getElementById("listar-turmas").addEventListener("click", async () => {
  const res = await fetch(API_URL_TURMA);
  const turmas = await res.json();

  const container = document.getElementById("turmas-lista");
  container.innerHTML =
    turmas
      .map(
        (t) => `
    <br>
    <div>
      <strong> ID: ${t.id} </strong> <br>
      Matéria:     ${t.materia} <br>
      Descrição:   ${t.descricao} <br>
      Ativo:       ${t.ativo ? "Sim" : "Não"} <br>
      <strong> Professor ID: ${t.professor_id} </strong> <br>
    </div>
  `
    )
      .join("");
});