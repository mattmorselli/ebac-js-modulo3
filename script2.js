function armazenarValor(){

    //armazena o valor digitado
    var userInput = document.getElementById("userInput").value;
        if (userInput === "") {
            alert("Por favor preencha o campo");
            return;
        }; 

    //exibe o valor armazenado
    console.log(`Parabéns ${userInput}! Vocë clicou no botão`);

    //atualiza o conteúdo
    document.getElementById("valorInserido").innerText = `Parabéns ${userInput}! Vocë clicou no botão`;
}