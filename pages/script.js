function busca() {
    let dig = document.querySelector('input#buscar');

    if(dig.value.length == 0) {
        window.alert('ERRO! O úsuario não digitou nada.')
    } else if(dig.value.toLowerCase() == 'hiv' || dig.value.toLowerCase() == 'aids'){
        window.location = 'HIV.html'
    } else if(dig.value.toLowerCase() == 'malaria') {
        window.location = 'Malaria.html'
    } else if(dig.value.toLowerCase() == 'tuberculose') {
        window.location = 'Tuberculose.html'
    } else {
        window.location.href = `https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/${dig.value.charAt(0).toLowerCase()}/${dig.value.toLowerCase()}`
    }
}
