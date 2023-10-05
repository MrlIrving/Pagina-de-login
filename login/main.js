//selecionar o formulario de login
const form = document.querySelector('.login-form')

//seleciona o campo de entrada do usuario
const usuarioInput = form.querySelector("input[type='text']")

// dessa forma identificamos a tag pelo tipo do input dela, usamos o form ao inves do documento para indicar onde o codigo deve procurar esse input
const senhaInput = form.querySelector("input[type='password']")
//seleciona o campo de entrada da senha

form.addEventListener('submit', (event) =>{
      //adicionar o event.preventDefault() evita que a pagina seja recarregada quando o botão for apertado
     event.preventDefault();

     //obtem os valores dos campos de entrada do usuario e senha

     const usuario = usuarioInput.value.trim();
     const senha = senhaInput.value.trim();
     // verifica se os campos de usuario e senha estao preenchidos
     if(usuario === '' || senha === ''){
        alert("Por favor, preencha os campos");
     }else if (usuario === 'usuario' && senha === 'senha'){
        //verifica se as informações de login estao corretas
        alert("Bem vindo!")
        location.replace("./tarefa/index.html", "_self")
     }else {
        //exibe uma mensagem de erro se as informaçoes estiverem erradas
        alert("Usuário ou senha incorreto, tente novamente")
     }
     

})