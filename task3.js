/*первое задание*/
const first=['js', 'css', 'html'];
function firstfunc(sender){
    a=first[0];
    document.getElementById('array1').innerHTML = a;
}
/*второе задание*/
let second=[0, 1, false, 2, undefined, '', 3, null];
function secondfunc(sender){
    b=second.filter(Number);
    document.getElementById('array2').innerHTML = b;
}
/*четвертое задание*/
const third=[[1,2], [1,2,3], [1,2,3,4]];
function thirdfunc(sender){
    c=third.find(el => el.length > 3);
    document.getElementById('array3').innerHTML = c;
}
