window.onload = iniciar();

var formulario;

function iniciar(){

        formulario = document.getElementsByTagName('form')[0];
        formulario.addEventListener('submit', enviar);
}

function enviar(event){
        cadastrar();
        event.preventDefault();
}

function cadastrar(formulario)
{
        let formData = new FormData(formulario);
        fetch("http://aulapw3.atwebpages.com/cadastrarComputador.php",
        {
                method:'POST',
                body:formData
        }).then(resposta => resposta.text())
          .then(texto => console.log(texto));
        
        return false;
         
}