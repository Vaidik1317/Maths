function SMZ()
{
    let X = parseFloat(document.getElementById("X").value);
    let U = parseFloat(document.getElementById("U").value);
    let S = parseFloat(document.getElementById("S").value);
    let n = parseFloat(document.getElementById("n").value);
    n1 = Math.sqrt(n);
    Z= (X - U) / (S / n1 )
    document.getElementById("Z").value=Z;
}