let sb = parseInt(prompt('Informe o seu salário Bruto.'));
let dps = sb * (10/100);
let di = (sb - dps) * (5/100);
let sl = (sb - dps) - di;

console.log(`O seu salário líquido é: ${sl}`);
