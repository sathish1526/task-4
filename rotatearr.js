
var num = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var k=4;

for(i=0;i<k;i++){
    let temp=num[num.length-1];
    for(j=num.length-2;j>=0;j--){
        num[j+1]=num[j];
    }
    num[j+1]=temp;
}
console.log(num);