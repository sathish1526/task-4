let arr = ['carecar', 1344, 12321, 'did', 'cannot'];
let ispallendrom=((item)=>{
    let str=String(item);
    i=0;
    j=str.length-1;
    while(i<j){
        if(str[i]===str[j]){
            i++;
            j--;
        }
        else
            return false;
    }
    return true;
});
let findpallendrom=function(arr){
    return arr.filter(item=>ispallendrom(item));
};
console.log(findpallendrom(arr));
