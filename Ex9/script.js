function apagar(){

    vermelho.style.background =
    "#1e293b";

    amarelo.style.background =
    "#1e293b";

    verde.style.background =
    "#1e293b";

}

function acender(cor){

    apagar();

    if(cor=="red"){
        vermelho.style.background =
        "red";
    }

    if(cor=="yellow"){
        amarelo.style.background =
        "yellow";
    }

    if(cor=="green"){
        verde.style.background =
        "green";
    }

}
