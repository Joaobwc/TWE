//variáveis
const btnCarros = document.getElementById("btnCarros");
const btnCarrinhas = document.getElementById("btnCarrinhas");
const txtbox1 = document.getElementById("txtbox1");
const btnDevolucao = document.getElementById("btnDevolucao");
const dataDevolucao = document.getElementById("dataDevolucao");
const dataRecolha = document.getElementById("dataRecolha");
const btnMostarVeiculos = document.getElementById("btnMostarVeiculos");
const lista_aeroporto = document.getElementById("lista_aeroportos");
const conteudo_btn = document.getElementById("conteudo_btn")
const btnAeroporto = document.getElementById("btn_aeroporto");
const btnBalcoes1 = document.getElementById("btn_balcoes1");
const btnBalcoes2 = document.getElementById("btn_balcoes2");
const btnMundo = document.getElementById("btn_mundo");
const carrosselTrilho = document.getElementById("carrossel_quarto_andar");
const botoesCarrossel = document.querySelectorAll(".carrossel_btn button");
const textbox1 = document.getElementById("txtbox1");
const txtbox2 = document.getElementById("txtbox2")
const dropdown = document.getElementById("levantamentos");
const listaLevantamento = document.getElementById("lista_levantamentos");
const detalhesLevantamento = document.getElementById("detalhes_levantamento");
const listaDevolucao = document.getElementById("lista_devolucoes");
const detalhesDevolucao = document.getElementById("detalhes_devolucao");
const dropdownDevolucao = document.getElementById("devolucoes");



const iconeAviao = `<svg viewBox="0 0 24 24" width="20" height="20">
    <path d="M22 16v-2l-8.5-5V3.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V9L2 14v2l8.5-2.5V19L8 20.5V22l4-1 4 1v-1.5L13.5 19v-5.5L22 16z"></path>
</svg>`;
const iconeLoja = `<svg viewBox="0 0 24 24" width="20" height="20">
<path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></svg>`;
const iconeComboio = `<svg  viewBox="0 0 24 24" width="20" height="20"q>
<path d="M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.23l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></svg>`
const locais = [
    { icone: iconeLoja, nome: "Lisboa Centro/Estefânia", endereco: "Rua José Estêvão 3, Lisboa, 1150-201, PT", horario: "Seg - Dom: 08:00 - 19:00", feriados: "Feriados: 08:00 - 19:00" },
    { icone: iconeAviao, nome: "Porto Aeroporto", endereco: "Aeroporto Francisco Sá Carneiro, Maia, 4470-558, PT", horario: "Seg - Dom: 07:00 - 23:59", feriados: "Feriados: 07:00 - 23:59" },
    { icone: iconeLoja, nome: "Porto Boavista", endereco: "Avenida Da Boavista, 1203, Porto, 4100-130, PT", horario: "Seg - Dom: 08:00 - 19:00", feriados: "Feriados: 08:00 - 19:00" },
    { icone: iconeLoja, nome: "Lisboa Norte", endereco: "Av. Severiano Falcão Lote 2, Prior Velho, Lisboa, 2685-378, PT", horario: "Seg - Dom: 09:00 - 19:00", feriados: "Feriados: 09-00 - 19:00" },
    { icone: iconeLoja, nome: "Lisboa Centro/Picoas", endereco: "Rua Andrade Corvo 31, Lisboa, 1050-008, PT", horario: "Seg - Dom: 08:00 - 19:00", feriados: "Feriados: 08:00 - 19:00" },
    { icone: iconeAviao, nome: "Lisboa Aeroporto", endereco: "Alameda das Com. Portuguesas, Lisboa, 1700-111, PT", horario: "Seg - Dom: 06:00 - 23:59", feriados: "Feriados: 06:00 - 23:59" },
    { icone: iconeLoja, nome: "Porto Zona Industrial", endereco: "R. Manuel Pinto de Azevedo 114, Porto, 4100-320, PT", horario: "Seg-Sex: 8:30 - 19:00<br> Sáb: 09:00 - 13:00<br>Dom: Fechado", feriados: "Feriados: Fechado" }
];

let posicaoAtual = 0; // Começa na posição zero
//Event listners
//Sem funções anónimas

//btnMostarVeiculos.addEventListener("click",);

//Com funções anónimas

//Funções 

//4º Andar

function moverParaSlide(indice) {
    if (!carrosselTrilho || carrosselTrilho.children.length === 0) return;

    // Calcula a largura de um card + o gap de 20px definido no CSS
    const larguraCard = carrosselTrilho.children[0].offsetWidth + 20;

    // Aplica o movimento negativo para deslizar para a esquerda
    const deslocamento = indice * larguraCard;
    carrosselTrilho.style.transform = `translateX(-${deslocamento}px)`;

    // Atualização visual dos pontos (dots) usando a tua variável botoesCarrossel
    botoesCarrossel.forEach((dot, i) => {
        dot.style.backgroundColor = (i === indice) ? "black" : "#bbb";
    });
}

// O loop forEach já existente ligará corretamente os eventos
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        moverParaSlide(indice);
    });
});

function moverCarrossel(indice) {
    const cards = carrosselTrilho.children;
    if (cards.length === 0) return;

    // Calculamos a largura de um card + o gap
    const larguraCard = cards[0].offsetWidth + 20;
    i
    // Para mostrar sempre de 2 em 2, 
    // o deslocamento máximo não deve deixar o ecrã vazio.
    const deslocamento = indice * larguraCard;

    carrosselTrilho.style.transform = `translateX(-${deslocamento}px)`;

    // Atualização visual dos botões
    const dots = document.querySelectorAll('.carrossel_btn button');
    dots.forEach((dot, i) => {
        dot.style.backgroundColor = (i === indice) ? "#FF5000" : "#bbb";
    });
}
//5º Andar - Botões

// Ao clicar no botão "Aeroportos de Portugal" aparece o seguinte texto
if (btnAeroporto) {
    btnAeroporto.addEventListener("click", function () {
        console.log("Botão de aeroportos clicado!");

        // Criando a lista com duas colunas
        conteudo_btn.innerHTML = `
        <div id="aeroportosPT">
            <ul>
                <li>Açores Ponta Delgada Aeroporto</li>
                <li>Faro Aeroporto</li>
                <li>Madeira Aeroporto</li>
                <li>Porto Aeroporto</li>
                <li>Lisboa Aeroporto</li>

            </ul>
            `;
    });
}
function gerirMenu() {
    const menu = document.getElementById("submenu_lateral");

    // O comando toggle adiciona a classe se ela não existir, 
    // e remove se ela já lá estiver.
    menu.classList.toggle("aberto");
}
// Ao clicar no botão "Balcões em Portugal" aparece o seguinte texto
if (btnBalcoes1) {
    btnBalcoes1.addEventListener("click", function () {
        conteudo_btn.innerHTML = `
            <div class="coluna">
                <ul>
                    <li>Angra do Heroismo</li>
                    <li>Funchal</li>
                    <li>Moreira da Maia</li>
                    <li>Santa Cruz</li>
                    <li>Vila do Porto</li>
                </ul>
            </div>

            <div class="coluna">
                <ul>
                    <li>Bandeiras</li>
                    <li>Horta</li>
                    <li>Ponta Delgada</li>
                    <li>Santa Cruz das Flores</li>
                </ul>
            </div>

            <div class="coluna">
                <ul>
                    <li>Comporta-Carvalhal</li>
                    <li>Lisboa</li>
                    <li>Porto</li>
                    <li>Sines</li>
                </ul>
            </div>

            <div class="coluna">
                <ul>
                    <li>Faro</li>
                    <li>Madalena</li>
                    <li>Praia da Vitória</li>
                    <li>Velas</li>
                </ul>
            </div>
        </div>
        `;
    });
}

// Ao clicar no botão "Balcões em Aeroportos" aparece o seguinte texto

if (btnBalcoes2) {
    btnBalcoes2.addEventListener("click", function () {
        conteudo_btn.innerHTML = `
            <div class="coluna">
                <ul>
                    <li>Amesterdão Schiphol Aeroporto</li>
                    <li>Bruxelas Aeroporto</li>
                    <li>Dubai Aeroporto Terminal 1</li>
                    <li>Frankfurt/Main Aeroporto</li>
                    <li>Los Angeles Aeroporto Interna...</li>
                    <li>Nice Aeroporto</li>
                    <li>Sydney Aeroporto</li>
                </ul>
            </div>

            <div class="coluna">
                <ul>
                    <li>Atlanta Hartsfield Aeroporto</li>
                    <li>Buenos Aires Ezeiza Aeroporto</li>
                    <li>Dublin Aeroporto</li>
                    <li>Genebra Aeroporto</li>
                    <li>Madrid Barajas Aeroporto</li>
                    <li>Paris Charles de Gaulle Aeropo...</li>
                    <li>Tel Aviv Aeroporto Internacional</li>
                </ul>
            </div>

            <div class="coluna">
                <ul>
                    <li>Barcelona Aeroporto</li>
                    <li>Charleroi Aeroporto</li>
                    <li>Edimburgo Aeroporto</li>
                    <li>Lima Aeroporto International</li>
                    <li>México City Aeroporto</li>
                    <li>Roma Fiumicino Aeroporto</li>
                    <li>Viena -Schwechat Aeroporto</li>
                </ul>
            </div>

            <div class="coluna">
                <ul>
                    <li>Belfast Aeroporto Internacional</li>
                    <li>Doha Aeroporto</li>
                    <li>Eindhoven Aeroporto</li>
                    <li>Londres Heathrow Aeroporto</li>
                    <li>Miami Aeroporto Internacional</li>
                    <li>Salzburgo Aeroporto</li>
                    <li>Zurique Aeroporto</li>
                </ul>
            </div>
    `
    });
}

// Ao clicar no botão "Ao redor do mundo " aparece o seguinte texto

if (btnMundo) {
    btnMundo.addEventListener("click", function () {
        conteudo_btn.innerHTML = `
            <div class="coluna">
                <ul>
                    <li>Amesterdão</li>
                    <li>Bruxelas</li>
                    <li>Dubai</li>
                    <li>Joanesburgo</li>
                    <li>Mexico City</li>
                    <li>Porto</li>
                    <li>Estocolmo</li>
                </ul>
            </div>

            <div class="coluna">
                <ul>
                    <li>Barcelona</li>
                    <li>Buenos Aires</li>
                    <li>Dublin</li>
                    <li>Londres</li>
                    <li>Miami</li>
                    <li>Riade</li>
                    <li>Sydney</li>
                </ul>
            </div>

            <div class="coluna">
                <ul>
                    <li>Berlim</li>
                    <li>Copenhaga</li>
                    <li>Edimburgo</li>
                    <li>Los Angeles</li>
                    <li>Munique</li>
                    <li>Roma</li>
                    <li>Viena</li>
                </ul>
            </div>

            <div class="coluna">
                <ul>
                    <li>Berna</li>
                    <li>Doha</li>
                    <li>Helsinki</li>
                    <li>Madrid</li>
                    <li>Paris</li>
                    <li>Singapura</li>
                    <li>Zurique</li>
                </ul>
            </div>
        `
    });
}

function guardarNoHistorico(local) {
    // 1. Vai buscar o que já existe ou cria um array vazio
    let historico = JSON.parse(localStorage.getItem("historico_recente")) || [];

    // 2. Remove o local se ele já lá estiver (evita duplicados)
    historico = historico.filter(item => item.nome !== local.nome);

    // 3. Adiciona o novo local na primeira posição
    historico.unshift(local);

    // 4. Mantém apenas os últimos 2
    historico = historico.slice(0, 2);

    // 5. Guarda de volta no navegador
    localStorage.setItem("historico_recente", JSON.stringify(historico));
}

// Função para renderizar a lista
function desenharLista() {
    // Dados do browser são lidos
    const historico = JSON.parse(localStorage.getItem("historico_recente")) || [];
    // Limpa a ista antes de começar
    listaLevantamento.innerHTML = "";

    // Se houver histórico, escreve
    if (historico.length > 0) {
        listaLevantamento.innerHTML += "<h3>Histórico</h3>";
        historico.forEach(local => {
            const li = criarElementoLi(local);
            listaLevantamento.appendChild(li);
        });
    }
    listaLevantamento.innerHTML += "<h3>Estações Populares</h3>";
    locais.forEach(local => {
        const li = criarElementoLi(local);
        listaLevantamento.appendChild(li);
    });
}

function criarElementoLi(local) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${local.icone}</span> ${local.nome}`;
    li.addEventListener("mouseenter", () => {
        detalhesLevantamento.innerHTML = `
            <ul id="info_aeroporto">
                <li>${local.icone}</li>
                <li><h2>${local.nome}</h2></li>
                <li>${local.endereco}</li>
                <li><h3>Horário de funcionamento</h3></li>
                <li>${local.horario}</li>
                <li>${local.feriados}</li>
                <li id="detalhes_estacao">Detalhes da estação</li>
            </ul>`;
    });

    li.addEventListener("click", (e) => {
        e.stopPropagation();
        txtbox1.value = local.nome
        guardarNoHistorico(local);
        dropdown.classList.remove("active");
    });

    return li;
}

// Evento para abrir
txtbox1.addEventListener("focus", () => {
    desenharLista(); // Cria os itens
    dropdown.classList.add("active"); // Mostra o container
});

// Fechar ao clicar fora
document.addEventListener("click", (e) => {
    if (!txtbox1.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
    }
});
function desenharListaDevolucoes() {
    const historico = JSON.parse(localStorage.getItem("historico_recente")) || [];

    // 1. CORREÇÃO: Limpar a lista antes de desenhar para evitar acumulação
    listaDevolucao.innerHTML = "";

    if (historico.length > 0) {
        // Criar o título como elemento (mais seguro que innerHTML += string)
        const titulo = document.createElement("h3");
        titulo.innerText = "Histórico";
        listaDevolucao.appendChild(titulo);

        historico.forEach(local => {
            const li = document.createElement("li");

            li.innerHTML = `<span>${local.icone}</span> <strong>${local.nome}</strong>`;

            // EVENTO: Mouse Enter (Hover)
            li.addEventListener("mouseenter", () => {
                detalhesDevolucao.innerHTML = `
                    <ul id="info_aeroporto">
                        <li>${local.icone}</li>
                        <li><h2>${local.nome}</h2></li>
                        <li>${local.endereco}</li>
                        <li><h3>Horário de funcionamento</h3></li>
                        <li>${local.horario}</li>
                        <li>${local.feriados}</li>
                        <li id="detalhes_estacao"><strong>Detalhes da estação</strong></li>
                    </ul>`;
            });

            // EVENTO: Click (Selecionar)
            li.addEventListener("click", (e) => {
                e.stopPropagation(); // Previne fechar o dropdown imediatamente
                txtbox2.value = local.nome;
                dropdownDevolucao.classList.remove("active");

                // Opcional: Atualizar detalhes finais ou fazer outra ação ao escolher
            });

            listaDevolucao.appendChild(li);
        });
    }
}

// --- Event Listeners ---

txtbox2.addEventListener("focus", () => {
    // Fecha o dropdown de levantamento se existir (assumindo que o ID é 'levantamento' ou similar)
    // Nota: O teu código original tinha 'devoloucoes' aqui, o que parece ser um erro de lógica
    const outroDropdown = document.getElementById("dropdownLevantamento"); // Ajusta este ID
    if (outroDropdown) {
        outroDropdown.classList.remove("active");
    }

    desenharListaDevolucoes();
    dropdownDevolucao.classList.add("active");
});

document.addEventListener("click", (e) => {
    // Fecha se o clique for fora da caixa de texto E fora do dropdown
    if (!txtbox2.contains(e.target) && !dropdownDevolucao.contains(e.target)) {
        dropdownDevolucao.classList.remove("active");
    }
});