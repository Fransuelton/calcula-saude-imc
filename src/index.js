function calcular() {
    var m = window.document.getElementById('txtn1')
    var a = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var massa = Number(m.value)
    var altura = Number(a.value)
    var imc = massa / (altura * altura)

    res.innerHTML = `IMC: ${imc.toFixed(1)}`

    if (massa == 0 && altura == 0) {
        alert("ERRO 148! Verifique os dados e tente novamente!")
        res.innerHTML = `Preencha os dados corretamente!`
    }

    if (imc < 17) {
        faixa.innerHTML = "Você está muito abaixo do peso"
    } else {
        if (imc >= 17 && imc <= 18.5) {
            faixa.innerHTML = "Você está abaixo do peso"
        } else {
            if (imc >= 18.5 && imc <= 25) {
                faixa.innerHTML = "Você está no peso ideal"
            } else {
                if (imc >= 25 && imc <= 30) {
                    faixa.innerHTML = "Você está em sobrepeso"
                } else {
                    if (imc >= 30 && imc <= 35) {
                        faixa.innerHTML = "você está em obesidade"
                    } else {
                        if (imc >= 35 && imc <= 40) {
                            faixa.innerHTML = "Você está em obesidade severa"
                        } else {
                            if (imc > 40) {
                                faixa.innerHTML = "Você está em obesidade mórbida"
                            }
                        }
                    }
                }
            }
        }
    }
}
