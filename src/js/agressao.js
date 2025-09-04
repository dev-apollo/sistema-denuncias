function getInfosAgressao() {
    let data = document.getElementById("data").value
    let local = document.getElementById("local").value
    let agressor = document.getElementById("agressor").value
    let vitima = document.getElementById("vitima").value
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
        agressor: {
            nome: "Agressor",
            valor: agressor
        },
        vitima: {
            nome: "Vítima",
            valor: vitima
        },
        relato: {
            nome: "Relato",
            valor: relato
        }
    }
    console.log(infos)
    return JSON.stringify(infos)
}

function armazenarInfosAgressao() {
    sessionStorage.setItem("denuncia", getInfosAgressao())
}

function trocarPagina(){
    armazenarInfosAgressao()
    window.location = "./denuncia.html"
}