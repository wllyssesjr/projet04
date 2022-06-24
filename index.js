let botao = document.querySelector('#btn')
botao.addEventListener('click', () => {
    let morangos = document.getElementById('morango')
    let morango = Number(morangos.value)
    let macas = document.getElementById('maca')
    let maca = Number(macas.value)
    let quantFrutas = morango + maca
    let resultado = document.getElementById('res')

    if(morango <= 5 ) {
        precoMorango = morango * 2.50
    } else if(morango > 5) {
        precoMorango = morango * 2.20
    }

    if(maca <= 5) {
        precoMaca = maca * 1.80
    } else if(maca > 5) {
        precoMaca = maca * 1.50
    }

    totalFrutas = precoMorango + precoMaca
    desconto = (10 / 100) * totalFrutas

    if(quantFrutas > 8 || totalFrutas > 25) {
        resultado.style.color = 'white'
        resultado.innerHTML = `<p>Valor(Morango): R$${precoMorango.toFixed(2)} <br>Valor(Maçã): R$${precoMaca.toFixed(2)} <br>Valor total: R$${(totalFrutas).toFixed(2)} <br>Desconto: R$${desconto.toFixed(2)} <br>Valor final: R$${(totalFrutas - desconto).toFixed(2)}</p>`
    } else {
        resultado.style.color = 'white'
        resultado.innerHTML = `<p>Valor(Morango): R$${precoMorango.toFixed(2)} <br> Valor(Maçã): R$${precoMaca.toFixed(2)} <br>Valor total: R$${(totalFrutas).toFixed(2)}</p>`
    }
})