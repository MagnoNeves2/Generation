let ht = parseInt(prompt('Informe as horas trabalhadas no mês.'));
let vh = parseInt(prompt('Informe o valor por hora de serviço.'));
let pd = parseInt(prompt('Informe o percentual de desconto.'));
let sb = ht * vh;
let td = (pd/100) * sb;
let sl = sb - td;

console.log(`Os valores calculados são: ${ht}(Horas trabalhadas), ${sb}(Salário Bruto), ${td}(Descontos) e ${sl}(Salário Líquido)`);
