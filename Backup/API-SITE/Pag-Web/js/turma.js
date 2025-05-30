const API_URL_TURMA = "http://127.0.0.1:5000/api/turmas";

document.getElementById("turma-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    materia: form.materia.value,
    descricao: form.descricao.value,
    ativo: form.ativo.value === "true",
    professor_id: parseInt(form.professor_id.value),
  };

  const response = await fetch(API_URL_TURMA, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  alert("Turma cadastrada!");
  console.log(result);
  form.reset();
});

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
      <strong>Professor ID: ${t.professor_id} </strong> <br>
      <button onclick="editarTurma(${t.id})">Editar</button>
      <button onclick="excluirTurma(${t.id})">Excluir</button>
    </div>
  `
      )
      .join("");
});

// Função de Editar Aluno
async function editarTurma(id) {
  const res = await fetch(`${API_URL_TURMA}/${id}`);
  const turma = await res.json();

  console.log(turma.turma);

  //Ajuste
  const turmaData = turma.turma || turma

    // Preenchendo o formulário de edição
    document.getElementById("Turma-id").value = turmaData.id;
    document.getElementById("update-materia").value = turmaData.materia;
    document.getElementById("update-descricao").value = turmaData.descricao;    
    document.getElementById("update-ativo").value = turmaData.ativo ? "true" : "false";
    document.getElementById("update-professor-id").value = turmaData.professor_id;

    // Exibindo o pop-up para edição
  document.getElementById("edit-popup-Turma").style.display = "block";
  
}

// Função de Atualizar Turma
document.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target
  const turmaID = document.getElementById("Turma-id").value;
  const data = {
    materia: form["update-materia"].value,
    descricao: form["update-descricao"].value,
    ativo: form["update-ativo"].value === "true",
    professor_id: parseInt(form["update-professor-id"].value)
  };
  console.log(data);

  const response = await fetch(`${API_URL_TURMA}/${turmaID}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  alert("Turma atualizada com sucesso!");
  console.log(result);
  form.reset();

    // Fechar o pop-up após a atualização
    document.getElementById("edit-popup-Turma").style.display = "none";
});

// Função de Excluir Prof
async function excluirTurma(id) {
  const response = await fetch(`${API_URL_TURMA}/${id}`, {
    method: "DELETE",
  });

  const result = await response.json();
  alert("Turma excluído com sucesso!");
  console.log(result);

  // Atualizar a lista de Prof
  document.getElementById("listar-Turma").click();
}

// Função para fechar o pop-up de edição
document.getElementById("close-popup-Turma").addEventListener("click", () => {
  document.getElementById("edit-popup-Turma").style.display = "none";
});