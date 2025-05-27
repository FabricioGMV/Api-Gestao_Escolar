const API_URL_PROFESSOR =
  "http://127.0.0.1:5000/api/professores";

document
  .getElementById("professor-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      nome: form.nome.value,
      materia: form.materia.value,
      observacoes: form.observacoes.value,
      idade: form.idade.value,
    };

    const response = await fetch(API_URL_PROFESSOR, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    alert("Professor cadastrado!");
    console.log(result);
    form.reset();
  });

document
  .getElementById("listar-professores")
  .addEventListener("click", async () => {
    const res = await fetch(API_URL_PROFESSOR);
    const professores = await res.json();

    const container = document.getElementById("professores-lista");
    container.innerHTML =
      "<h2>Lista de Professores</h2>" +
      professores
        .map(
          (p) => `
    <div>
      <strong>${p.nome}</strong> (ID: ${p.id})<br>
      Matéria: ${p.materia}<br>
      Observação: ${p.observacoes}<br>
      Idade: ${p.idade}<br>
      <button onclick="editarProf(${p.id})">Editar</button>
      <button onclick="excluirProf(${p.id})">Excluir</button>
    </div>
  `
        )
        .join("");
  });

// Função de Editar prof
async function editarProf(id) {
  const res = await fetch(`${API_URL_PROFESSOR}/${id}`);
  const professor = await res.json();

  console.log(professor);

    // Ajuste conforme a estrutura real da resposta
    const profData = professor.professor || professor; 

    // Preenchendo o formulário de edição
    document.getElementById("Prof-id").value = profData.id;
    document.getElementById("update-nome").value = profData.nome;
    document.getElementById("update-materia").value = profData.materia;
    document.getElementById("update-observacao").value = profData.observacoes;
    document.getElementById("update-idade").value = profData.idade;
  // Exibindo o pop-up para edição
  document.getElementById("edit-popup-Prof").style.display = "block";
}

// Função de Atualizar Prof
document.getElementById("update-form-Prof").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const profID = document.getElementById("Prof-id").value;
  const data = {
    nome: form ["update-nome"].value,
    materia: form ["update-materia"].value,
    observacoes:form ["update-observacao"].value,
    idade: parseInt(form["update-idade"].value,),
  };
  console.log(data);
 
  const response = await fetch(`${API_URL_PROFESSOR}/${profID}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  alert("Professor atualizado com sucesso!");
  console.log(result);
  form.reset();

  // Fechar o pop-up após a atualização
  document.getElementById("edit-popup-Prof").style.display = "none";
});

// Função de Excluir Prof
async function excluirProf(id) {
  const response = await fetch(`${API_URL_PROFESSOR}/${id}`, {
    method: "DELETE",
  });

  const result = await response.json();
  alert("Prof excluído com sucesso!");
  console.log(result);

  // Atualizar a lista de Prof
  document.getElementById("listar-professores").click();
}

// Função para fechar o pop-up de edição
document.getElementById("close-popup-Prof").addEventListener("click", () => {
  document.getElementById("edit-popup-Prof").style.display = "none";
});