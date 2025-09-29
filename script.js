function testar() {
    // Criando contadores
    let contOctane = 0
    let contFennec = 0
    let contDominus = 0
    let contScarab = 0

    // Obtendo radios
    const radios = document.querySelectorAll('input[type="radio"]:checked')
    console.log(radios)

    for(const resposta of radios){
        valor = resposta.value
        switch (valor) {
            case 'Octane':
                contOctane++
                break;
            case 'Fennec':
                contFennec++
                break;
            case 'Dominus':
                contDominus++
                break;
            case 'Scarab':
                contScarab++
                break;
        }
    }

    function maiorValor() {
        let maior = contOctane
        let nome = 'Octane'
        if (contFennec > maior) {
            maior = contFennec
            nome = 'Fennec'
        } else if (contDominus > maior) {
            maior = contDominus
            nome = 'Dominus'
        } else if (contScarab > maior) {
            maior = contScarab
            nome = 'Scarab'
        }

        return nome
    }

    let resultado = maiorValor()

    // Obtendo o h1 do resultado
    let h1 = document.querySelector('#resultado')
    h1.style.opacity = '1'
    h1.innerHTML = `Seu carro ideal é o <span class="carro-final">${resultado}!</span>`
}