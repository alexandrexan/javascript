function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas ` + `e ${minuto} minutos.`;
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.jpg';
        document.body.style.background = '#e2cd9f';
        msg.innerHTML += '<p>Bom dia!</p>';
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.jpg';
        document.body.style.background = '#b9846f';
        msg.innerHTML += '<p>Boa tarde!</p>';
    } else {
        img.src = 'imagens/noite.jpg';
        document.body.style.background = '#515154';
        msg.innerHTML += '<p>Boa noite!</p>';
    }
}