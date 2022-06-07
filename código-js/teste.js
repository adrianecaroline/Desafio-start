function capturar() {
    let valor = document.getElementById("valor").value;
    
    let resultado = valor.split(",",3);
    console.log(resultado)

    let var1 = parseInt(resultado[0]);
    let var2 = parseInt(resultado[1]);
    let var3 = parseInt(resultado[2]);

    let caminhoimagem = climaHumor(var1, var2, var3);

    adcImagem(caminhoimagem);
}

function adcImagem(caminhoimagem){

    var img = document.createElement('img');
    img.src = caminhoimagem;
    document.getElementById("valorDigitado").appendChild(img);
    
}

function climaHumor(value1, value2, value3) {

    let comparacao = (value1 > value2);
    let comparacao1 = (value2 <= value3);
    let comparacao2 = (value1 < value2);
    let comparacao3 = (value2 >= value3);
    let comparacao4 = (value1 === value2);
    let comparacao5 = (value2 < value3);
    let comparacao6 = (value2 > value3);
    let subtracao = (value2 - value1);
    let subtracao1 = (value3 - value2);
    let subtracao2 = (value1 - value2);
    let subtracao3 = (value2 - value3);
    
    switch (true){
        case comparacao && comparacao1:
            return 'assets/c1.png';
        case comparacao2 && comparacao3:
            return 'assets/c2.png';
        case (comparacao2 && comparacao5) && (subtracao > subtracao1):
            return 'assets/c3.png';
        case (comparacao2 && comparacao5) && (subtracao < subtracao1):
            return 'assets/c4.png';
        case (comparacao && comparacao6) && (subtracao2 > subtracao3):
            return 'assets/c5.png';
        case (comparacao && comparacao6) && (subtracao2 == subtracao3):
            return 'assets/c6.png';
        case (comparacao4 && comparacao5):
            return 'assets/c7.png';
        case (comparacao4 && comparacao6):
            return 'assets/c8.png';
        default:
            return 'assets/c9.png';
    }

}
climaHumor()
