/* 
Recurso: https://youtu.be/VUd2SA9oB2I

Script para visualizar / ocultar senha na tela de login */
window.onload = function() {
    let btn = document.querySelector (".fa-eye")  /* Cria uma variável (BTN) e atribui a ele a classe do icone */

    btn.addEventListener("click" , ()=>{ /* Adiciona um evento ao botão, no caso, um evento de clique, criando uma arrow function */
        let InputSenha = document.querySelector('#senha') /* variável recebe o valor do campo password de ID 'senha' */
        if (InputSenha.getAttribute("type") == "password"){
            InputSenha.setAttribute ("type", "text") /* muda o atribito de password para text (visível) */
            } else {
                InputSenha.setAttribute ("type", "password") /* muda de text para password (invisível) */
            }
}
)

}

