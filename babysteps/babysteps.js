
console.log(process.argv.slice(2).reduceRight(function(acc, curr){
    return +acc + +curr;
}));