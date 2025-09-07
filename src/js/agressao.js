document.addEventListener('DOMContentLoaded', () => {
    const etapas = document.querySelectorAll('.etapa');
    const btnAnterior = document.getElementById('btnAnterior');
    const btnProximo = document.getElementById('btnProximo');
    const btnEnviar = document.getElementById('btnEnviar');

    let etapaAtual = 0; 

    function mostrarEtapaAtual() {
        etapas.forEach((etapa, index) => {
            etapa.classList.toggle('ativa', index === etapaAtual);
        });

        btnAnterior.style.display = etapaAtual > 0 ? 'inline-block' : 'none';
        btnProximo.style.display = etapaAtual < etapas.length - 1 ? 'inline-block' : 'none';
        btnEnviar.style.display = etapaAtual === etapas.length - 1 ? 'inline-block' : 'none';
    }


    btnProximo.addEventListener('click', () => {
        const idEtapaAtual = etapas[etapaAtual].id;
        if (validarEtapa(idEtapaAtual)) {
            etapaAtual++;
            mostrarEtapaAtual();
        }
    });
    btnAnterior.addEventListener('click', () => {
        etapaAtual--;
        mostrarEtapaAtual();
    });
    mostrarEtapaAtual();
});

function getInfosAgressao() {
    let data = document.getElementById("data").value
    let horario = document.getElementById("horario").value

    let cidade = document.getElementById("cidade").value
    let logradouro = document.getElementById("logradouro").value
    let bairro = document.getElementById("bairro").value
    let numero = document.getElementById("numero").value

    let nomeEnvolvido = document.getElementById("nomeEnvolvido").value
    let telefoneEnvolvido = document.getElementById("telefoneEnvolvido").value
    let sexoEnvolvido = document.getElementById("sexoEnvolvido").value
    let cpfEnvolvido = document.getElementById("cpfEnvolvido").value

    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value
    let sexo = document.getElementById("sexo").value
    let cpf = document.getElementById("cpf").value

    let relatoOcorrido = document.getElementById("relatoOcorrido").value
    
    let infos = {
        data: {
            nome: "Data",
            valor: data
        },
        horario:{
            nome: "Horário",
            valor: horario
        },
        cidade: {
            nome: "Cidade",
            valor: cidade
        },
        logradouro: {
            nome: "Logradouro",
            valor: logradouro
        },
        bairro: {
            nome: "Bairro",
            valor: bairro
        },
        numero:{
            nome: "Número",
            valor: numero
        },
        nomeEnvolvido: {
            nome: "Nome do envolvido",
            valor: nomeEnvolvido
        },
        telefoneEnvolvido: {
            nome: "Telefone do envolvido",
            valor: telefoneEnvolvido
        },
        sexoEnvolvido: {
            nome: "Sexo do envolvido",
            valor: sexoEnvolvido
        },
        cpfEnvolvido: {
            nome: "CPF do envolvido",
            valor: cpfEnvolvido
        },
        nome: {
            nome: "Nome",
            valor: nome
        },
        telefone: {
            nome: "Telefone",
            valor: telefone
        },
        sexo: {
            nome: "Sexo",
            valor: sexo
        },
        cpf: {
            nome: "CPF",
            valor: cpf
        },
        relatoOcorrido: {
            nome: "Relato do Ocorrido",
            valor: relatoOcorrido
        }
    }
    console.log(infos)
    return JSON.stringify(infos)
}

function validarEtapa(idDaEtapa) {
    const etapa = document.getElementById(idDaEtapa);
    const camposObrigatorios = etapa.querySelectorAll('[required]');
    
    let etapaValida = true;

    for (const campo of camposObrigatorios) {
        if (campo.value.trim() === "") {
            alert(`Por favor, preencha todos os campos`)
            etapaValida = false;
            break; 
        }
    }

    return etapaValida;
}

function armazenarInfosAgressao() {
    sessionStorage.setItem("denuncia", getInfosAgressao())
}

function enviarDenuncia(){
    armazenarInfosAgressao()
    window.location = "./denuncia.html"
}