let valor = false;
const btn_copiar = document.getElementById("copiar");
const mensaje = document.querySelector(".mensaje");
const rectangle = document.querySelector(".rectangle");

btn_copiar.addEventListener('click', function(){
    btn_copiar.style.backgroundColor = "#D8DFE8";
});


function encriptar(input){
    let texto = document.getElementById("texto").value;
    let img = document.querySelector("#img");
    /*let mensaje = document.getElementById("ningun").value;*/
    let textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    
    if(texto.length>0)
    {
        texto = textoCifrado;
        mensaje.style.height = "410px";
        document.getElementById("demo").innerHTML = texto;
        //img.style.visibility="hidden";
        input.value="Mostrar";
        document.getElementById("ningun").innerHTML = "";
        if(valor==false){
            valor=true;
            img.remove();
            btn_copiar.style.visibility = "visible";
            rectangle.style.height = "564px";
        }
    }else{
        //img.style.visibility="visible";
        if(valor==true){
            img = document.createElement("img");
            img.src = "img/Muñeco.png";
            img.id = "img";
            document.querySelector(".muñeco").appendChild(img);
            mensaje.style.height = "200px";
            rectangle.style.height = "";
            valor = false;
            btn_copiar.style.visibility = "hidden";
        }
        input.value="Ocultar";
        document.getElementById("ningun").innerHTML = "Ningún mensaje fue encontrado";
        document.getElementById("demo").innerHTML = "Ingresa el texto desees encriptar o desencriptar";
    }
}


function desencriptar(input){
    let veces=0;
    let texto = document.getElementById("texto").value;
    let img = document.querySelector("#img");
    //let mensaje = document.getElementById("ningun").value;
    let textoDecifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if(texto.length>0)
        {
            texto = textoDecifrado;
            document.getElementById("demo").innerHTML = texto;
            //img.style.visibility="hidden";
            input.value="Mostrar";
            document.getElementById("ningun").innerHTML = "";
            if(valor==false){
                valor=true;
                img.remove();
                btn_copiar.style.visibility = "visible";
                mensaje.style.height = "410px";
            }
        }else{
            //img.style.visibility="visible";
            if(valor==true){
                img = document.createElement("img");
                img.src = "img/Muñeco.png";
                img.id = "img";
                document.querySelector(".muñeco").appendChild(img);
                mensaje.style.height = "200px";
                valor=false;
            }
            input.value="Ocultar";
            document.getElementById("ningun").innerHTML = "Ningún mensaje fue encontrado";
            document.getElementById("demo").innerHTML = "Ingresa el texto desees encriptar o desencriptar";
        }
}

function copiarContenido(){
    let texto = document.getElementById("texto").value;
    if(texto.length>0){
        let copia = document.getElementById("demo").innerHTML;
        try {
            navigator.clipboard.writeText(copia);
            console.log('Contenido copiado al portapapeles');
          } catch (err) {
            console.error('Error al copiar: ', err);
          }
    }
}