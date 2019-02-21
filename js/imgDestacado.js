
var cont=0
function cambia() {
cont = cont % 2;

    if (cont==1){
        document.getElementById("fotocambia").src="imgDestacado/destacado1.jpg";
        
    }else{
            document.getElementById("fotocambia").src="imgDestacado/destacado4.jpg";            
        }
        cont++;
    }

function inicio() {
setInterval(cambia, 10000);
}
window.onload=inicio;
