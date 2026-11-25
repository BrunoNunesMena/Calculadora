let number1 = "";
let number2 = "";
let resultado = 0;
let calculado = false;
let operacao = null; //as variáveis

const ver = document.getElementById("resultado");//diz que independente do local o id "resultado" se torna uma "constante" chamada "ver"
const tecla = document.getElementById("teclas");//mesma coisa só que para as teclas, coloquei nome diferente pra evitar confusão

tecla.addEventListener("click", (event) => //verifica se clicou em uma tecla, teclas foram definidas pela classe logo acima chamadas de "teclas"
{
    if (event.target.classList.contains("numero") && operacao === null && calculado === false)
    //puxa o evento ou seja "clicar" e se estiver mirando na class "numero" faz o que tá abaixo */  
    {
        number1 += event.target.textContent; //diz que o conteúdo de texto vai se tornar variável number1
        console.log("Número selecionado: " + number1);//apenas pra verificar no log
        ver.textContent = "Resultado: " + number1;//para tornar visível na tela puxou a const(ver) que já informaque tá puxando o conteúdo do h2 "resultado"
    }
    else if (event.target.classList.contains("numero") && calculado === true && operacao === null) 
    {
        limpar()
        number1 = event.target.textContent;
        ver.textContent = "Resultado: " + number1;
        calculado = false
    }
    if (event.target.classList.contains("opera") && number1 !== "" && operacao === null && calculado === false)
    //agora puxa o evento se estiver na class "opera", funciona se number1 for diferente de "" e se a operação for igual a Null         
    {
        operacao = event.target.textContent; //mesma coisa só que para a operação
        console.log("Operação selecionada: ", operacao);
        ver.textContent = "Resultado: " + number1 + " " + operacao;
    }
    else if (event.target.classList.contains("opera") && calculado === true && operacao === null) 
    {
        number1 = resultado
        number2 = ""
        resultado = 0
        operacao = event.target.textContent;
        ver.textContent = "Resultado: " + number1 + " " + operacao;
        console.log("Operação selecionada: ", operacao);
        calculado = false
    }
    if (event.target.classList.contains("numero") && operacao !== null && calculado === false)
    //se a operação for diferente de "null" e for da class que contém "numero" então
    {
        number2 += event.target.textContent;
        console.log("Segundo número:" + number2);
        ver.textContent = "Resultado: " + number1 + " " + operacao + " " + number2
    }
    //se contém
    if (event.target.classList.contains("calc")) {
        calcular()//solicita o cálculo
        console.log("Resultado: ", resultado)
    }
    else if (event.target.classList.contains("opera") && calculado === false && number2 !== "")
    //Para calcular automatico ao clicar numa operação com 2 números já selecionados, continua do resultado
    {
        calcular()
        operacao = event.target.textContent
        number1 = resultado
        ver.textContent = "Resultado: " + number1 + " " + operacao
        calculado = false
        console.log("Operação selecionada: ", operacao);
    }
    if (event.target.classList.contains("clear")) 
    {
        limpar()
        //solicita a função "limpar"
    }
});
function calcular() 
{
    if (number1 === "" || number2 === "") {
        return//Retornar até digitar os 2 números
    }
    let num1 = Number(number1);//para alterar de String para número
    let num2 = Number(number2);
    if (operacao === "+") { //se a variável "operacao" for + então
        resultado = num1 + num2;
    }
    else if (operacao === "-") {//senao subtração nesse caso
        resultado = num1 - num2;
    }
    else if (operacao === "x") {//multiplicação nesse caso
        resultado = num1 * num2;
    }
    else if (operacao === "/") {//divisão nesse
        if (num2 === 0) {
            console.log("Não é possível dividir por 0");
            limpar()
            ver.textContent = "Resultado: Não é possível dividir por 0";
            return
        }
        resultado = num1 / num2;//resultado da divisão
    }
    resultado = Number(resultado.toFixed(2));
    console.log("Resultado:", resultado);//para consultar no log o resultado
    ver.textContent = "Resultado: " + resultado;
    calculado = true
    operacao = null
    number2 = ""
}
function limpar() 
{
    number1 = "";
    number2 = "";
    operacao = null;
    resultado = 0;
    ver.textContent = "Resultado: ";
    console.log("Calculadora limpa!");
    calculado = false
}
