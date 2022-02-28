var cont = 0;

function acao() {
    cont++;

    if (cont <= 3) {
        document.write("Executando..." + cont + "<br/>");
    } else
        clearInterval(timer);

}



//executa de tempo em tempo
var timer = setInterval(acao, 1000);

//executa e para
//setTimeout(acao, 3000);