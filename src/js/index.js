function trocarPagina(){
    let tipoDenuncia = document.getElementById("selectTipoDenuncia").value
    if(tipoDenuncia != ""){
        switch(tipoDenuncia){
            case "acidenteTransito": {
                window.location = "/acidenteTransito.html";
                break;    
            }
            case "agressao": {
                window.location = "/agressao.html";
                break;    
            }
            default: {
                alert("Erro ao trocar de página");
                break;
            }
        }
    }else{
        alert("O tipo da denúncia não foi selecionada.");
    }
}