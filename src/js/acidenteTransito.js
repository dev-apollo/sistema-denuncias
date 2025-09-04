function getInfosAcidenteTransito() {
    let data = document.getElementById("data").value
    let local = document.getElementById("local").value
    let vitima = document.getElementById("vitima").value
    let placaVitima = document.getElementById("placaVitima").value
    let veiculoVitima = document.getElementById("veiculoVitima").value
    let infrator = document.getElementById("infrator").value
    let placaInfrator = document.getElementById("placaInfrator").value
    let veiculoInfrator = document.getElementById("veiculoInfrator").value
    let relato = document.getElementById("relato").value
    let infos = {
        data: {
            nome: "Data",
            valor: data
        },
        local: {
            nome: "Local",
            valor: local
        },
        vitima: {
            nome: "Vítima",
            valor: vitima
        },
        placaVitima: {
            nome: "Placa da vítima",
            valor: placaVitima
        },
        veiculoVitima: {
            nome: "Veículo da vítima",
            valor: veiculoVitima
        },
        infrator: {
            nome: "Infrator",
            valor: infrator
        },
        placaInfrator: {
            nome: "Placa do infrator",
            valor: placaInfrator
        },
        veiculoInfrator: {
            nome: "Veículo do infrator",
            valor: veiculoInfrator
        },
        relato: {
            nome: "Relato",
            valor: relato
        }
    }
    console.log(infos)
    return JSON.stringify(infos)
}

function armazenarInfosAcidenteTransito() {
    sessionStorage.setItem("denuncia", getInfosAcidenteTransito())
}

function trocarPagina(){
    armazenarInfosAcidenteTransito()
    window.location = "./denuncia.html"
}