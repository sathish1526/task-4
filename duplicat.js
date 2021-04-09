var a=['milk','cake','milk','sweet','1','2','1'];

uniqueArray = a.filter(function(item, pos) {
    return a.indexOf(item) == pos;
})
console.log(uniqueArray);