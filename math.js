function add()
{
let n1 = parseInt(document.getElementById("one").value);
let n2 = parseInt(document.getElementById("two").value);
let n3 = parseInt(document.getElementById("three").value);
let n4 = parseInt(document.getElementById("four").value);
let n5 = parseInt(document.getElementById("five").value);
let n6 = parseInt(document.getElementById("six").value);
let n7 = parseInt(document.getElementById("seven").value);
let n8 = parseInt(document.getElementById("eight").value);
let n9 = parseInt(document.getElementById("nine").value);
let n10 = parseInt(document.getElementById("ten").value);

EX = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10;
document.getElementById("ans").value = EX;
}