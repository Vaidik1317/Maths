function Proportion()
{
    let p = parseFloat(document.getElementById("p").value);
    let P = parseFloat(document.getElementById("P").value);
   // let Q = parseFloat(document.getElementById("Q").value);
    let n = parseFloat(document.getElementById("n").value);

    UZ= p - P;
    Q = 1 - P;
   // DZ = ((P*Q)/n)^1/2
   dz= (P * Q) / n;
  let DZ1 = Math.sqrt(dz)
   
    Z = UZ / DZ1;
   
   // Z=(p-P) / ((P*Q/n) + (P*Q/n))^0.5//
    document.getElementById("Z").value=Z;
}