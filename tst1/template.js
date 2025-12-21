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

//Event listners
//Sem funções anónimas

//btnMostarVeiculos.addEventListener("click",);

//Com funções anónimas


//Funções 



//5º Andar - Botões

// 2. Função para o botão "Aeroportos de Portugal"

if (btnAeroporto) {
    btnAeroporto.addEventListener("click", function () {
        console.log("Botão de aeroportos clicado!");

        // Criando a lista com duas colunas
        conteudo_btn.innerHTML = `
        <div class="coluna">
            <p><strong>Açores Ponta Delgada Aeroporto</p>
            <p><strong>Faro Aeroporto</strong></p>
            <p><strong>Lisboa Aeroporto</strong><p>
        </div>
        <div class="coluna">
            <p><strong>Madeira Aeroporto</strong></p>
            <p><strong>Porto Aeroporto</strong></p>
        </div>
    </div>
            `;
    });
}

// 3. Função para o botão "Balcões em Portugal"
if (btnBalcoes1) {
    btnBalcoes1.addEventListener("click", function () {
        conteudo_btn.innerHTML = `
                <div>falta preencher</div>
            `;
    });
}

if (btnBalcoes2) {
    btnBalcoes2.addEventListener("click", function () {
        conteudo_btn.innerHTML = `
            <div>falta preencher</div>
    `
    });
}

if (btnMundo) {
    btnMundo.addEventListener("click", function () {
        conteudo_btn.innerHTML = `
            <div>falta preencher</div>
        `
    });
}