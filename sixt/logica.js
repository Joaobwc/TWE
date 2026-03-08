window.onload = function () {
    init(); 
};

//variáveis
const btnCarros = document.getElementById("btnCarros");
const btnCarrinhas = document.getElementById("btnCarrinhas");
const lista_aeroporto = document.getElementById("lista_aeroportos");
const conteudo_btn = document.getElementById("conteudo_btn")
const btnAeroporto = document.getElementById("btn_aeroporto");
const btnBalcoes1 = document.getElementById("btn_balcoes1");
const btnBalcoes2 = document.getElementById("btn_balcoes2");
const btnMundo = document.getElementById("btn_mundo");
const carrosselTrilho = document.getElementById("carrossel_quarto_andar");
const botoesCarrossel = document.querySelectorAll('.carrossel_btn button');


//formulário
const form = document.querySelector("form"); 

//inputs de texto
const txtLocalLevantamento = document.getElementById("txtLocalLevantamento");
const txtLocalDevolucao = document.getElementById("txtLocalDevolucao");

//checkbox e div
const checkboxDevolucao = document.getElementById("btnDevolucao");
const divLocalDevolucao = document.getElementById("divLocalDevolucao");

const checkboxTarifa = document.getElementById("checkboxTarifa");

//datas e Botão 
const dataRecolha = document.getElementById("dataRecolha");
const dataDevolucao = document.getElementById("dataDevolucao");
const btnMostrarVeiculos = document.getElementById("btnMostrarVeiculos");

//div para resultado dos veículos
const resultadosVeiculos = document.getElementById("resultadosVeiculos");

//Base de dados dos carros
const frota = {
    carro:[
        {veiculo:"carro-1", marca:"Fiat", modelo: "500", imagem: "Carros_Aluguer/500_lrg.png"},
        {veiculo:"carro-2", marca:"Mercedes", modelo: "Class C", imagem:"Carros_Aluguer/c_class_lrg.png"},
        {veiculo:"carro-3", marca:"Volkswagen", modelo: "Golf", imagem:"Carros_Aluguer/golf_lrg.png"},
        {veiculo:"carro-4", marca:"Ford", modelo: "Mustang", imagem:"Carros_Aluguer/mustang_gt_lrg.png"},

    ],
    carrinhas:[
        {veiculo:"carrinha-1", marca:"BMW", modelo: "X5", imagem:"Carros_Aluguer/x5_lrg.png"},
        {veiculo:"carrinha-2", marca:"Citroen", modelo: "C3", imagem:"Carros_Aluguer/c3_aircross_lrg.jpg"},
        {veiculo:"carrinha-3", marca:"Dacia", modelo: "Sandero", imagem:"Carros_Aluguer/stepway_lrg.jpg"},
        {veiculo:"carrinha-4", marca:"Skoda", modelo: "Scala", imagem:"Carros_Aluguer/scala_lrg.jpg"},
    ]
}




let posicaoAtual = 0; // Começa na posição zero


//Event listners

form.addEventListener("submit", function(event){
    event.preventDefault();
});

//validar o formulário
btnMostrarVeiculos.addEventListener("click", validaFormulario);

checkboxDevolucao.addEventListener("change", alterarVisibilidadeDevolucao);

btnCarros.addEventListener("click", function(){
    mudarCategoria("carros");
});

btnCarrinhas.addEventListener("click", function(){
    mudarCategoria("carrinhas");
})

//limpar erro
txtLocalLevantamento.addEventListener("input", resetErros);
txtLocalDevolucao.addEventListener("input", resetErros);
dataRecolha.addEventListener("input", resetErros);
dataDevolucao.addEventListener("input", resetErros);

//Funções 

function init(){
    mudarCategoria("carros")
    btnCarros.classList.add("ativo");
    alterarVisibilidadeDevolucao();

}

//Escolher qual a categoria de veículo
function mudarCategoria(tipo){
    if (tipo=="carros"){
        btnCarros.classList.add("ativo");
        btnCarrinhas.classList.remove("ativo"); //retira ou adiciona uma class a um elemento html
    }
    else{
        btnCarrinhas.classList.add("ativo");
        btnCarros.classList.remove("ativo");
    }
}

//Função da visibilidade do checkbox da devolução
function alterarVisibilidadeDevolucao(){
    if(checkboxDevolucao.checked){
        // mostra o campo input devolução noutro local e torna-o obrigatório
        divLocalDevolucao.style.display="flex";
        txtLocalDevolucao.required = true;
        
    } else{
        // Decolver no mesmo local
        divLocalDevolucao.style.display = "none";
        txtLocalDevolucao.required = false;
    }

}

//Função de validação
function validaFormulario(){
    debugger
    if (txtLocalLevantamento.value === ""){
        //mensagem de erro 
        txtLocalLevantamento.setCustomValidity("Por favor, escolha o local de levantamento.");
        txtLocalLevantamento.reportValidity();
        return;
    }
    if(checkboxDevolucao.checked){
        if(txtLocalDevolucao.value === ""){
            txtLocalDevolucao.setCustomValidity("Por favor, escolha o local de devolução.");
            txtLocalDevolucao.reportValidity();
            return;
        }
    }
    
    //verificar inputs das datas
    if (dataRecolha.value=== "" ){
        //mensagem de erro 
        dataRecolha.setCustomValidity("Por favor, preencha a data de recolha.");
        dataRecolha.reportValidity();
        return;
    }
    if (dataDevolucao.value===""){
        //mensagem de erro 
        dataDevolucao.setCustomValidity("Por favor, preencha a data de devolução.");
        dataDevolucao.reportValidity();
        return;
    }
    
    //Validação das datas
    const dtInicio = new Date(dataRecolha.value); //tornar a string numa data
    const dtFim = new Date (dataDevolucao.value);
    //Data de devolução <= data de recolha
    if (dtFim <= dtInicio ){
        dataDevolucao.setCustomValidity("A data de devolução tem que ser posterior à de recolha.");
        dataDevolucao.reportValidity();
        return;
    }
    //Local de devolução 
    let localFinalLevantamento = txtLocalLevantamento.value;
    let localFinalDevolucao;
    if (checkboxDevolucao.checked){
        //Se marcado o local de devolução diferente do levantamento, gera novo input
        localFinalDevolucao = txtLocalDevolucao.value;
    }
    else{
        localFinalDevolucao = localFinalLevantamento;
    }
    //alert("Validação com sucesso! A pesqueisar veiculos");

    //Após a validação confirmada
    debugger
    //Calcular Preço
    const detalhesPreco = CalcularPreco();

    //Criar a informação em html dos veiculos
    gerarVeiculos(detalhesPreco);

    //Mostar o div
    resultadosVeiculos.style.display = "flex";



}

//Reset aos erros 
function resetErros(){
    txtLocalLevantamento.setCustomValidity("");
    txtLocalDevolucao.setCustomValidity("");
    dataRecolha.setCustomValidity("");
    dataDevolucao.setCustomValidity("");
}

//calculo do preço
debugger
function CalcularPreco(){
    const inicio = new Date(dataRecolha.value);
    const fim = new Date(dataDevolucao.value);

    const carro = btnCarros.classList.contains("ativo");

    let categoria;
    let precoSemana;
    let precoFimSemana;

    if (carro){
        categoria = "carro"
        precoSemana = 6;
        precoFimSemana = 15;
    }
    else{
        categoria = "carrinha";
        precoSemana = 12;
        precoFimSemana = 20; 
    }

    let valorTotalBase = 0;
    let numDias = 0;
    
    //Loop para verificar se é semana (1 a 5) ou Fsemana (0 e 6)
    let dataAtual = new Date(inicio);

    while (dataAtual <= fim) {
        const diaSemana = dataAtual.getDay(); 

        if (diaSemana === 0 || diaSemana ===6){
            valorTotalBase+=precoFimSemana;
        }
        else{
            valorTotalBase+=precoSemana;
        }

        dataAtual.setDate(dataAtual.getDate()+1);
        numDias++;
    }

    //descontos empresariais
    let desconto = 0;
    let nomeDesconto = "Sem desconto";

    if (checkboxTarifa && checkboxTarifa.checked){
        if(numDias< 3){
            desconto = 0.10;
            nomeDesconto = "Empresarial (10%)";
        }
        else{
            desconto = 0.20;
            nomeDesconto = "Empresarial (20%)"
        }
    }

    const valorDesconto = valorTotalBase * desconto;
    let valorTotalDesconto= valorTotalBase - valorDesconto;

    //taxa de local de devolução diferente
    let taxaDevDiferente = 0;
    if (checkboxDevolucao.checked){
        taxaDevDiferente = 30;
    } 

    const precoFinal = valorTotalDesconto + taxaDevDiferente;

    return{
        dia: numDias,
        valorBase: valorTotalBase,
        descValor: valorDesconto,
        descNome: nomeDesconto,
        taxaDevolucao: taxaDevDiferente,
        preco: precoFinal,
        categoria: categoria,
        precoDiarioMedio: (precoFinal/numDias).toFixed(2)
    };

}

//Criar o html
function gerarVeiculos(dadosPreco){
    resultadosVeiculos.innerHTML= "";

    let listaVeiculos;
    if (dadosPreco.categoria==="carro"){
        listaVeiculos = frota.carro;
    }
    else{
        listaVeiculos = frota.carrinhas;
    }

    const local = txtLocalLevantamento.value;
    
    listaVeiculos.slice(0,4).forEach(function(veiculo, index){ //Como???

        //formatar os ids??????
        const idVeiculo = `${dadosPreco.categoria}-${index + 1}`;

        //Criar o Html para os carros
        const carrosHTML = `
            <div class="card-veiculo">
                <div class="card-header">
                    <h3>${veiculo.modelo}</h3>
                    <span class="categoria-badge">${dadosPreco.categoria} semelhante</span>
                </div>
                
                <img src="${veiculo.imagem}" alt="${veiculo.modelo}">
                
                <div class="card-info">
                    <p>Levantamento: <strong>${local}</strong></p>
                    <p>Ref: ${idVeiculo}</p>
                </div>

                <div class="card-preco">
                    <p class="preco-dia">Média: ${dadosPreco.precoDiarioMedio}€ / dia</p>
                    <p class="preco-total">Total: <strong>${dadosPreco.preco.toFixed(2)}€</strong></p>
                    
                    <button type="button" class="btn-detalhes" onclick="toggleDetalhes('${idVeiculo}')">
                        (ver detalhes)
                    </button>
                    
                    <div id="detalhes-${idVeiculo}" class="detalhes-painel" style="display:none;">
                        <p>Base (${dadosPreco.dia} dias): ${dadosPreco.valorBase}€</p>
                        <p>Desconto (${dadosPreco.descNome}): -${dadosPreco.descValor.toFixed(2)}€</p>
                        <p>Taxa Local Diferente: ${dadosPreco.taxaDevolucao}€</p>
                        <hr>
                        <p><strong>Total: ${dadosPreco.preco.toFixed(2)}€</strong></p>
                    </div>
                </div>
                
                <button class="btn-reservar">Selecionar</button>
            </div>
        `;
        resultadosVeiculos.innerHTML += carrosHTML;
    });

} 

//Mostar/ Esconder detalhes
function toggleDetalhes(id) {
    const painel = document.getElementById(`detalhes-${id}`);
    if (painel.style.display === "none") {
        painel.style.display = "block";
    } else {
        painel.style.display = "none";
    }
}

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
+Local de devolução diferente            </div>

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

