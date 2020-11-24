function average(Findavg){
    let total =0;
    for (let x = 0; x<Findavg.length; x++){
        total += Findavg[x];
    }
    return total/Findavg.length;
}

var Findavg1 = [1,4,7]
var Findavg2= [10,5]
var Findavg3 = [1.5,3,2.5,1]

console.log(average(Findavg1));
console.log(average(Findavg2));
console.log(average(Findavg3));