
/* Scripts para visualizar / ocultar senha na tela de cadastro (senha e ConfirmaSenha) 

        - Recurso: https://youtu.be/VUd2SA9oB2I
        criar no HTML um id para cada icone dos INPUTs
        - criar um id para cada btn da página (btnversenha e btnverconfirma) 
        - Criar uma variável para cada armazenar o vallor do campo (InputVerSenha e InputConfirmSenha)
        - Este id será colocado como valor de entrada do btn
        - */

        window.onload = function() {
            let btnversenha = document.querySelector ("#ver-senha")  /* Cria uma variável (BTN) e atribui a ele O ID do icone */

            btnversenha.addEventListener("click" , ()=>{ /* Adiciona um evento ao botão, no caso, um evento de clique, criando uma arrow 
                                                            function */
                let InputVerSenha = document.querySelector('#senha') /* variável recebe o valor do campo password de ID DO ICONE */
                if (InputVerSenha.getAttribute("type") == "password"){
                    InputVerSenha.setAttribute ("type", "text") /* muda o atribito de password para text (visível) */
                    } else {
                        InputVerSenha.setAttribute ("type", "password") /* muda de text para password (invisível) */
                    }
            }
            )
            
            let btnverconfirma = document.querySelector ("#ver-confirma")  /* Cria uma variável (btnverconfirma) e atribui a ele a classe 
                                                                            do icone */
                    
                btnverconfirma.addEventListener("click" , ()=>{ /* Adiciona um evento ao botão, no caso, um evento de clique, criando uma 
                                                            arrow function */
                let InputConfirmSenha = document.querySelector('#confirmarsenha') /* variável recebe o valor do campo password de ID DO ICONE */
                if (InputConfirmSenha.getAttribute("type") == "password"){
                    InputConfirmSenha.setAttribute ("type", "text") /* muda o atribito de password para text (visível) */
                    } else {
                        InputConfirmSenha.setAttribute ("type", "password") /* muda de text para password (invisível) */
                    }
            }
            )    

        }
        