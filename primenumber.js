var array=[1,2,3,4,5,6,7,8,9,10,11];

var prime = array.filter(function(arr){
        var valid=true;
        if(arr==2)return true;
        for(j=2;j<arr;j++){
            if(arr%j==0){
                valid=false;
            }
        if(valid)
        return true;
    }
});

console.log(prime);