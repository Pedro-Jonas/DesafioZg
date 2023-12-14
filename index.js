const musica = document.querySelector('.musica');

const menssagem = 
`Qual parte da música deseja mostra? \n 
digite 1 para primeira parte \n
digite 2 para segunda parte \n
digite 3 para a música inteira`;

const senhor = `os filhos do Senhor`;

let parte = prompt(`${menssagem}`);

while (parte != 1 && parte != 2 && parte != 3) {
    parte = prompt(`Ops, opção inválida! ${menssagem}`)
};

if (parte == 1) {
    parte_1()
} else if (parte == 2) {
    parte_2()
} else {
    parte_1()
    musica.innerHTML+= `<br>E atenção agora, porque<br>`;
    parte_2()
};

function parte_1() {
    musica.innerHTML+= erguei() + animais(`O elefante`, `os passarinhos`) +
    animais(`A minhoquinha`, `os pinguins`) + animais(`O canguru`, `o sapinho`)
    + arca() + erguei().repeat(3);
};

function parte_2() {
    musica.innerHTML+= filhos(`Todos`) + filhos() + corpo(1) + filhos()
    + corpo(2) + filhos() +  corpo() + filhos() + corpo() + acao(1) + filhos()
    + corpo() + acao(2) + filhos() +  corpo() + acao(3) + filhos() + corpo() + acao();
};

function erguei() {
    const repete = `Erguei as mãos`; 
    return(`<br> ${repete} e dai glória a Deus <br>
    ${repete} e dai glória a Deus <br>
    ${repete} <br>
    E cantai como ${senhor}<br>`)
};

function animais(animal1, animal2) {
    const repete = `Os animaizinhos subiram de dois em dois`;
    return(`<br> ${repete} <br>
    ${repete} <br>
    ${animal1} <br>
    E ${animal2}, como ${senhor} <br>`)
};

function arca() {
    const repete = `Deus disse a Noé: Constrói uma arca <br>`;
    return(`<br> ${repete}
    ${repete}
    Que seja feita <br>
    De madeira para ${senhor} <br>
    <br> Por isso...!`)
};

function filhos(qtd = `Muitos`){
    return(`<br> O senhor tem muitos filhos <br>
    ${qtd} filhos ele tem <br>
    Eu sou um deles, você também <br>
    Louvemos ao senhor <br>`)
};

function corpo (qtd = 0) {
    const repete = `<br> Braço direito, braço esquerdo <br>`;
    if (qtd == 1){
        return(repete)
    } else if (qtd == 2) {
        return(`${repete} Perna direita <br>`)
    }
    return(`${repete} Perna direita, perna esquerda <br>`)
};

function acao (qtd = 0) {
    if (qtd == 1){
        return(`<br> Balança a cabeça`)
    } else if (qtd == 2) {
        return(`<br> Balança a cabeça, dá uma voltinha`)
    } else if (qtd == 3) {
        return(`Balança a cabeça, dá uma voltinha <br>
        Dá um pulinho <br>`)
    }
    return(`Balança a cabeça, dá uma voltinha <br>
    Dá um pulinho e abraça o irmão <br>`)
};