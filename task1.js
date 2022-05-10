function sumInput(sender){
    let arrContainer=document.getElementById("array")
    let arrContainer1=document.getElementById("array1")
    let sum=[];
    let sum1=0;
    for (;;){
        let number=+prompt("Введите число");
        if (!number)break;
        sum.push(number);
        sum.sort();
        sum1+=number;

    }
    alert(sum);
    alert(sum1);
    arrContainer.innerHTML=sum;
    arrContainer1.innerHTML=sum1;
    
}
