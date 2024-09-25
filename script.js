let Ano = parseInt(prompt("Insira seu ano letivo"))

if (Ano <= 5) {
    alert("Voçê esta no ensino fundamental")
    }else if (Ano >=6 && Ano <=9) {
        alert ("Voçê esta no fundamental II")
    }else if (Ano >=10 && Ano <=12) {
        alert ("Voçê esta no ensino médio")
    }else if (Ano >=10 && Ano >=12) {
        alert ("Voçê esta no ensino superior")
    }else{
        alert ("Entrada invalida")
    }