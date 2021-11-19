

const calcular = document.getElementById('calcular');

function poupanca(){
    const nome = document.getElementById('nome').value;
    const quantidade = document.getElementById('quantidade').value;
    const taxa = document.getElementById('taxa').value;
    const tempo = document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');

    if (nome != '' && quantidade != '' && tempo != '' && taxa != '') {
        const i = taxa / 100;
        const wi = ((1+i)**tempo)-1;
        const valorfinal = 100*(wi/i).toFixed(2);
           
        resultado.textContent = `Olá ${nome}, se você aplicar R$${quantidade}, com uma taxa de ${taxa}% em ${tempo} meses, acumulará aproximadamente uma poupança de R$${valorfinal}.`;

    }else {
        resultado.textContent = 'Para que o calculo seja efetuado preencha todos os campos.';
    }

}
calcular.addEventListener('click', poupanca);