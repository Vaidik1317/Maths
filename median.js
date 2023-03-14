function Median()
{
    let m1 = parseFloat(document.getElementById("m1").value);
    let m2 = parseFloat(document.getElementById("m2").value);
    let m3 = parseFloat(document.getElementById("m3").value);
    let m4 = parseFloat(document.getElementById("m4").value);
    let m5 = parseFloat(document.getElementById("m5").value);

  let M = math.median(m1 , m2, m3, m4, m5);
    document.getElementById("M").value = M;

}