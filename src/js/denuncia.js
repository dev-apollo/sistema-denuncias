(() => {
    let infos = JSON.parse(sessionStorage.getItem("denuncia"))
    let divInfos = document.getElementById("infos")
    for(const key in infos){
        let p = document.createElement("p")
        p.innerHTML = `${infos[key].nome}: ${infos[key].valor}`
        divInfos.appendChild(p)
    }
})();

function confirmarDenuncia(){
    alert("Denúncia registrada!")
    sessionStorage.clear()
    window.location = "index.html"
}