function addM()
{
    let x1 = parseInt(document.getElementById("x1").value); 
    let x2 = parseInt(document.getElementById("x2").value);
    let x3 = parseInt(document.getElementById("x3").value);
    let x4 = parseInt(document.getElementById("x4").value);
    let x5 = parseInt(document.getElementById("x5").value);
    
    EX = x1+x2+x3+x4+x5;
   // document.getElementById("ans").value = EX; 


    let f1 = parseInt(document.getElementById("f1").value); 
    let f2 = parseInt(document.getElementById("f2").value);
    let f3 = parseInt(document.getElementById("f3").value);
    let f4 = parseInt(document.getElementById("f4").value);
    let f5 = parseInt(document.getElementById("f5").value);
    
    EY = f1+f2+f3+f4+f5;
   // document.getElementById("ansY").value = EY;

    Mean = ((x1*f1) + (x2*f2) + (x3*f3) + (x4*f4) + (x5*f5)) / EY ;
    document.getElementById("Mn").value = Mean;

    const text  = "The answer of  mean displaed";
    
    
    const utterance = new  SpeechSynthesisUtterance(text);
     utterance.pitch = 5;
    
    window.speechSynthesis.speak(utterance);
    
}

