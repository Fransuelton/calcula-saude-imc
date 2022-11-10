function calcular() {
    var m = window.document.getElementById('txtn1')
    var a = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var massa = Number(m.value)
    var altura = Number(a.value)
    var imc = massa / (altura * altura)

    if (massa == 0 && altura == 0) {
        res.innerHTML = `Preencha os dados corretamente!`
    }

    if (imc < 17) {
        res.innerHTML = `Seu IMC é: ${imc.toFixed(1)} Você está muito abaixo do peso`
    } else {
        if (imc >= 17 && imc <= 18.5) {
            res.innerHTML = `IMC: ${imc.toFixed(1)} Você está abaixo do peso`
        } else {
            if (imc >= 18.5 && imc <= 25) {
                res.innerHTML = `IMC: ${imc.toFixed(1)} Você está no peso ideal`
            } else {
                if (imc >= 25 && imc <= 30) {
                    res.innerHTML = `IMC: ${imc.toFixed(1)} Você está em sobrepeso`
                } else {
                    if (imc >= 30 && imc <= 35) {
                        res.innerHTML = `IMC: ${imc.toFixed(1)} Você está em obesidade`
                    } else {
                        if (imc >= 35 && imc <= 40) {
                            res.innerHTML = `IMC: ${imc.toFixed(1)} Você está em obesidade severa`
                        } else {
                            if (imc > 40) {
                                res.innerHTML = `IMC: ${imc.toFixed(1)} Você em obesidade mórbida`
                            }
                        }
                    }
                }
            }
        }
    }
}