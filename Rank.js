function Rank()
{
    let n1 = parseInt(document.getElementById("rx1").value);
    let n2 = parseInt(document.getElementById("rx2").value);
    let n3 = parseInt(document.getElementById("rx3").value);
    let n4 = parseInt(document.getElementById("rx4").value);
    let n5 = parseInt(document.getElementById("rx5").value);

    let m1 = parseInt(document.getElementById("ry1").value);
    let m2 = parseInt(document.getElementById("ry2").value);
    let m3 = parseInt(document.getElementById("ry3").value);
    let m4 = parseInt(document.getElementById("ry4").value);
    let m5 = parseInt(document.getElementById("ry5").value);

    let n = 5;
    
    Ed = (rx1 - ry1) + (rx2 - ry2) + (rx3 - ry3) + (rx4 - ry4) + (rx5 - ry5);
    Ed2 = Math.pow(Ed, 2);
    N = Math.pow(n, 3);

    UR = 6 * Ed2;
    DR = N -n;

    R = 1 - (UR / DR);
    
    document.getElementById("R").value=R;
}    