let arr1 = [2,3,4,5]
function array(arr){
for(let i=0; i<arr.length ;i++)
{
let v = 2;
arr[i]=arr[i]+v
}
return arr;
}
console.log(array(arr1))