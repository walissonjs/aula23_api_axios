// Vamos criar uma variável api para criar a conexão do projeto com a base da API através da URL criada no RENDER

// ---------------------------------------------------------------- ESTRUTURA DO AXIOS
const api = axios.create({
    baseUrl: "https://aula23-api-axios.onrender.com"
});

// Vamos criar uma estrutura que vai servir para os demais:

let section = "users";
let records = []; 
//Esta array Será preenchida com as informações condidas no bd.json/users

// Vamos criar a variável $ para receber as informaçõs de preço
const $ = selector => document.querySelector(selector);

// Criar a função que vai fazer a listagem dos usuários
async function listar(endpoint = `/${section}`) { 
    // /${section}: é para informar os valores que vão chegar da section que é puxada da api em users | Essa estrutura vai ser reaproveitada em todos os cenários
    try {
        const { data } = await api.get(endpoint); //
        return data;
    } catch (falhas) {
        console.log("Algo não está certo! ", falhas.message) 
        // falhas.message = Aponta o provavel erro identificado pelo catch. "falhas" não é fixo, poderia ser outros nomes, tipo: erro, alerta etc... você pode definir ao gosto esta nomenclatura
    }
}
// ---------------------------------------------------------------- ESTRUTURA DO AXIOS

//RENDERIZER TUDO NA TELA DO USUÁRIO
function render() {
    const isUsers = section === "users";
    $('#page-title').textContet = isUsers ? "Usuários" : "Produtos";
    $('#table-head').innerHTML = isUsers
        ? "<tr><th>ID</th><th>Nome</th><th>E-mail</th></tr>"
        : "<tr><th>ID</th><th>Produtos</th><th>Preço</th></tr>";
    $('#table-body').innerHTML = records.map(item => `
        <tr>
            <td>${item.id ?? "-"}</td>
            <td>${item.name ?? "-"}</td>
        </tr>
    `);
}
render();


// ----- CRIANDO FUNÇÃO PARA CARREGAR OS DADOS DO RENDER
async function carregar () {
    records = await listar();
    console.log(records);
}
carregar();

