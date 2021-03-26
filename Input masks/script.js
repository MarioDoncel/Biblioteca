const input = document.querySelector('input[name="price"]') // selecionando onde será aplicada

input.addEventListener("keydown", function (e) { 
    setTimeout(function () {
        let {value} = e.target
        value = value.replace(/\D/g, "")  // Substituir todos os caracteres que não sejam numeros
        // e.target.value = e.target.value.replace(/\D/g, "") // Forma reduzida de executar o mesmo replace

        value = new Intl.NumberFormat('pt-BR', {
            style:'currency',
            currency:'BRL'
        }).format(value/100) // Formatando para reais

        e.target.value = value 
    
    },1) // a cada 1 milissegundo faz  a substituição
})


// ============ Novo Exemplo =====================

const Mask ={
    apply(input, func) { //aplicador com setTimeout .... input neste caso é definido no HTML com o THIS  .. func a mask que deseja aplicar
        setTimeout(function () {
            input.value = Mask[func](input.value)
        },1)
    },
    formatBRL(value) {
    // value = value.replace(/\D/g, "")  // Substituir todos os caracteres que não sejam numeros

    return new Intl.NumberFormat('pt-BR', {
        style:'currency',
        currency:'BRL'
    }).format(value/100) // Formatando para reais
    },
    formatUSD(element, value) {
        value = value.replace(/\D/g, "")  // Substituir todos os caracteres que não sejam numeros
    
        return element.value = new Intl.NumberFormat('en-US', {
            style:'currency',
            currency:'USD'
        }).format(value/100) // Formatando para Dolar
        }
}
