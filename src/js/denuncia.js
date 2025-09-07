(() => {
    let infos = JSON.parse(sessionStorage.getItem("denuncia"))
    let divInfos = document.getElementById("infos")
    for(const key in infos){
        if(key === 'veiculos'){
            const veiculosObj = infos.veiculos.valores;
            const numVeiculos = veiculosObj.placas.length;

            let pTitulo = document.createElement("p");
            pTitulo.innerHTML = `<b>${infos.veiculos.nome}:<b>`;
            divInfos.appendChild(pTitulo);
           
            for (let i = 0; i < numVeiculos; i++) {
                let pVeiculo = document.createElement("p");
                pVeiculo.innerHTML = `&nbsp;&nbsp;&nbsp;&nbsp;• Veículo ${i + 1}: ${veiculosObj.tipos[i]} ${veiculosObj.modelos[i]}, cor ${veiculosObj.cores[i]}, placa ${veiculosObj.placas[i]}.`;
                divInfos.appendChild(pVeiculo);
            }
        }else{
            let p = document.createElement("p");
            const item = infos[key];
            const valor = item.valor;
            const valorExibido = (valor && String(valor).trim() !== "") ? valor : "<i>Não identificado</i>";

            p.innerHTML = `<b>${item.nome}:</b> ${valorExibido}`;
            divInfos.appendChild(p);
        }
    }
})()

function confirmarDenuncia(){
    alert("Denúncia registrada!")
    sessionStorage.clear()
    window.location = "index.html"
}