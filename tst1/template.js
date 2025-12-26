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
const btnSeguinte = document.getElementById("seguinte");
const btnAnterior = document.getElementById("anterior");
let posicaoAtual = 0; // Começa na posição zero
const larguraMovimento = 520;
//Event listners
//Sem funções anónimas

//btnMostarVeiculos.addEventListener("click",);

//Com funções anónimas

//Funções 

//4º Andar

if (btnSeguinte && btnAnterior && carrosselTrilho) {
    btnSeguinte.addEventListener("click", () => {
        // Calcula o limite máximo de deslize
        const numCards = carrosselTrilho.children.length;
        const limite = (numCards - 1) * larguraMovimento;

        // Só desliza se não tiver chegado ao fim
        if (Math.abs(posicaoAtual) < limite) {
            posicaoAtual -= larguraMovimento;
            carrosselTrilho.style.transform = `translateX(${posicaoAtual}px)`;
        }
    });

    btnAnterior.addEventListener("click", () => {
        // Só desliza para a direita se não estiver no início (0)
        if (posicaoAtual < 0) {
            posicaoAtual += larguraMovimento;
            carrosselTrilho.style.transform = `translateX(${posicaoAtual}px)`;
        }
    });
}
//5º Andar - Botões

// Ao clicar no botão "Aeroportos de Portugal" aparece o seguinte texto
if (btnAeroporto) {
    btnAeroporto.addEventListener("click", function () {
        console.log("Botão de aeroportos clicado!");

        // Criando a lista com duas colunas
        conteudo_btn.innerHTML = `
        <ul id=aeroportosPT>
            <li>Açores Ponta Delgada Aeroporto</li>
            <li>Faro Aeroporto</li>
            <li>Lisboa Aeroporto</li>
            <li>Madeira Aeroporto</li>
            <li>Porto Aeroporto</li>
        </ul>
        <span><strong>SIXT em Portugal</strong></span>        
            `;
    });
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
                    <li>Sines</strong></li>
                </ul>
            </div>

            <div class="coluna">
                <ul>
                    <li>Faro</strong></strong></li>
                    <li>Madalena</strong></li>
                    <li>Praia da Vitória</li>
                    <li>Velas</strong></li>
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