function Regression()
{
    let x1 = parseInt(document.getElementById("x1").value);
    let x2 = parseInt(document.getElementById("x2").value);
    let x3 = parseInt(document.getElementById("x3").value);
    let x4 = parseInt(document.getElementById("x4").value);
    let x5 = parseInt(document.getElementById("x5").value);
    let y1 = parseInt(document.getElementById("y1").value);
    let y2 = parseInt(document.getElementById("y2").value);
    let y3 = parseInt(document.getElementById("y3").value);
    let y4 = parseInt(document.getElementById("y4").value);
    let y5 = parseInt(document.getElementById("y5").value);

    let n = 5
      Ex = x1 + x2 + x3 + x4 + x5;
      Ey = y1 + y2 + y3 + y4 + y5;
      Exy = (x1*y1) + (x2*y2) + (x3*y3) + (x4*y4) + (x5*y5);

   let Ey2 = Math.pow(y1,2) + Math.pow(y2,2) + Math.pow(y3,2) + Math.pow(y4,2) + Math.pow(y5,2);
   let py = Math.pow(Ey , 2);
   
   UP =Exy - ((Ex * Ey) / n) ;
   D = Ey2 - (py / n);
    byx =  UP / D;
      document.getElementById("byx").value=byx;
}