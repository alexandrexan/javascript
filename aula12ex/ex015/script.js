function verificar() {
    var data = new Date();
    var anoAtual = data.getFullYear();
    var fano = document.getElementById('ano').value;
    var res = document.getElementById('res');
    if (fano.length == 0 || fano > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    }
    else {
        var fsex = document.getElementsByName('sexo');
        var idade = anoAtual - Number(fano);
        var genero = '';
        var img = document.createElement('img'); // cria um elemento de imagem
        img.setAttribute('id', 'foto'); // define um id para a imagem
        if (fsex[0].checked) {
            genero = 'Masculino';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/menino.jpg');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem-h.jpg');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/h-adulto.jpg');
            } else {
                // Idoso
                img.setAttribute('src', 'img/idoso.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino';
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'img/menina.jpg');
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'img/jovem-m.jpg');
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'img/m-adulta.jpg');
            } else {
                // Idoso
                img.setAttribute('src', 'img/idosa.jpg');
            }
        }
        res.innerHTML= `Sexo ${genero} com ${idade} anos.`;
        res.style.padding = '20px';
        res.style.textAlign = 'center';
        res.appendChild(img); // adiciona a imagem ao elemento de resultado
    }

}