/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function desencriptarTexto(texto) {
    var text = texto.split(''); //split permite convertir en array un string
    for (i = 0; i < text.length; i++) {
      if ((text[i] + text[i + 1] + text[i + 2] + text[i + 3] + text[i + 4]) == "enter") {
        text.splice(i, 5, ("e"));      //splice elemina elemento y reemplaza por el indicado
      }
      else if ((text[i] + text[i + 1] + text[i + 2] + text[i + 3]) == "imes") {
        text.splice(i, 4, ("i"));
      }
      else if ((text[i] + text[i + 1]) == "ai") {
        text.splice(i, 2, ("a"));
      }
      else if ((text[i] + text[i + 1] + text[i + 2] + text[i + 3]) == "ober") {
        text.splice(i, 4, ("o"));
      }
      else if ((text[i] + text[i + 1] + text[i + 2] + text[i + 3]) == "ufat") {
        text.splice(i, 4, ("u"));
      }
    }
    return text.join('');
   
  }
  
  console.log(desencriptarTexto("entersenter"))

//printChar(desencriptarTexto(texto))


const alfabeto = ["A","B","C","D","E","F","G","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const inputOriginal = document.getElementById('input-original');
   
const cifrador = document.getElementById('cifrador');
const resultado = document.getElementById('resultado');

var texto = "";
function convertir(inputOriginal) {
 
    var textoConvertido = "";
    for (var i = 0; i < inputOriginal.length; i++) {//4-1=3
        console.log(texto[i]);
        console.log(letra);
        var letra = inputOriginal[i];
        console.log(texto);
        console.log(letra);
        if (letra == "e") {
            letra = "enter";
        } else if (letra == "i") {
            letra = "imes";
        } else if (letra == "a") {
            letra = "ai";
        } else if (letra == "o") {
            letra = "ober";
        } else if (letra == "u") {
            letra = "ufat";
        }
        textoConvertido += letra;
        console.log(textoConvertido);
        
    }
    return textoConvertido;
}


function shifMessage() {
    
    const wordArray = convertir(inputOriginal.value);
    printChar(0, wordArray);
//alert(inputOriginal.value);
}


const printChar = (currentLetterIndex, wordArray) => {
    
    if(wordArray.length === currentLetterIndex) return;
    
    
    inputOriginal.value = inputOriginal.value.substring(1)
    const spanChar = document.createElement("span");
    resultado.appendChild(spanChar);
    animateChar(spanChar)
        .then( () => {
            const charSinCodificar = wordArray[currentLetterIndex];
            spanChar.innerHTML = alfabeto.includes(charSinCodificar) ? 
                alfabeto[(alfabeto.indexOf(charSinCodificar) + parseInt(rango.value)) % alfabeto.length] : 
                charSinCodificar
            printChar(currentLetterIndex + 1, wordArray);
        });
}

const animateChar = spanChar => {
    let cambiosDeLetra = 0;
    return new Promise(resolve => {
        const intervalo = setInterval(() => {
            spanChar.innerHTML = alfabeto[Math.floor(Math.random() * alfabeto.length)];
            cambiosDeLetra++;
            if(cambiosDeLetra === 3) {
                clearInterval(intervalo);
                resolve();
            }
        }, 50);
    });
}

const submit = e => {
    e.preventDefault();
    resultado.innerHTML = '';
    shifMessage()
}

cifrador.onsubmit = submit;
//









//console.log(desencriptarTexto(inputOriginalx))

   // console.log(desbloquear("fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!"));


