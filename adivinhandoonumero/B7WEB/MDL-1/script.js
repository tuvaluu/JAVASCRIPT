function prcImvl() {
   let m2 = 3000
   let preco = 0;

   switch (quartos) {
        case 1: 
        default:
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * (m2 * 1.2);
            break;
        case 3:
            preco = metragem * (m2 * 1.5);
            break;   
   }
   return preco;
}
let metragem = 58;
let quartos = 4;
let preco = prcImvl(metragem, quartos);
console.log (`A minha casa custa R$${preco}`);
















function validar(usuario, senha){
    if (usuario === 'guilhermim' && senha === 'guilherme') {
        return true;
    } else {
        return false;
    }
    

}

let usuario = 'adrn123';
let senha = 'guilherme';
let validacao = validar(usuario, senha);

if (validacao) {
    console.log ('Acesso concedido.');
    
} else {
    console.log ('Acesso negado.')
    
}











const sobrenome = sob => 'Guilherme ' + sob;

console.log (sobrenome('Carvalho'))

