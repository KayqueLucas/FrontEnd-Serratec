const container = document.getElementById("container");
const titulo = document.createElement("h2");
titulo.innerText = "Tarefas da Equipe";
container?.appendChild(titulo);

const form = ` <div class="nova">
<input type="text" id="texto" placeholder="Digite a tarefa">
<button onclick="criarNota()" id="botao">Criar</button>
</div>`;

const div = document.createElement("div");
div.innerHTML = form;
container.appendChild(div);

const area = document.createElement("ul");
container?.appendChild(area);

function novaNota(texto) {
  const item = document.createElement("li");
  area?.appendChild(item);
  item.innerText = texto;
}

const lista = [];

lista.push("Estudar js");
lista.push("Criar elementos");
lista.push("Trafegar Json");
lista.push("Seletores irmão adjacente");
lista.push("Lading page");
lista.push("Laços de repetição");
lista.push("For, While, interados");
lista.push("Bootstrap e Frameworks Css");

for (let i = 0; i < lista.length; i++) {
  const item = lista[i];
  novaNota(lista[i]);
}

function criarNota(params) {
  const texto = document.getElementById("texto");
  lista.push(texto.value);
  novaNota(texto.value);
}
