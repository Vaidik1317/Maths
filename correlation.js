function cor()
{
    let x1 = parseFloat(document.getElementById("x1").value);
    let x2 = parseFloat(document.getElementById("x2").value);
    let x3 = parseFloat(document.getElementById("x3").value);
    let x4 = parseFloat(document.getElementById("x4").value);
    let x5 = parseFloat(document.getElementById("x5").value);
    let x6 = parseFloat(document.getElementById("x6").value);
    let y1 = parseFloat(document.getElementById("y1").value);
    let y2 = parseFloat(document.getElementById("y2").value);
    let y3 = parseFloat(document.getElementById("y3").value);
    let y4 = parseFloat(document.getElementById("y4").value);
    let y5 = parseFloat(document.getElementById("y5").value);
    let y6 = parseFloat(document.getElementById("y6").value);

    let n = 6;
      Ex = x1 + x2 + x3 + x4 + x5;
      Ey = y1 + y2 + y3 + y4 + y5;
      Exy = (x1*y1) + (x2*y2) + (x3*y3) + (x4*y4) + (x5*y5);

   let Ey2 = Math.pow(y1,2) + Math.pow(y2,2) + Math.pow(y3,2) + Math.pow(y4,2) + Math.pow(y5,2);
   let py = Math.pow(Ey , 2);
   let px = Math.pow(Ex, 2);
   let Ex2 = Math.pow(x1,2) + Math.pow(x2,2) + Math.pow(x3,2) + Math.pow(x4,2) + Math.pow(x5,2); 
   
     A = Ex2 - (px / n);
     B = Ey2 - (py / n);

    let CA = Math.sqrt(A);
    let CB = Math.sqrt(B);

   UP = Exy - ((Ex * Ey) / n) ;
   D = CA * CB;

   r = UP / D;
      document.getElementById("r").value=r;
}