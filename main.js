function encrypt(){
    var text = document.getElementById("domTextElement").value.toLowerCase();
    var resultados=text.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.getElementById("valueInput").value=resultados;
}
function Decrypt(){
    var text = document.getElementById("domTextElement").value.toLowerCase();
    var resultados=text.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.getElementById("valueInput").value=resultados;
}
function copiar(){
    let textarea = document.getElementById("valueInput");
    textarea.select();
    document.execCommand("copy");
}