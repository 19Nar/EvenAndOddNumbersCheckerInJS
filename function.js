
var num
num = document.getElementById("check_Number");
//num = Number(document.getElementById("check_Number").value);

function odd_even_Checker(){

if(Number(num.value%2===0))
{
alert("Even Number");
}
else
{
alert("Odd Number");
console.log(num);
}
};

