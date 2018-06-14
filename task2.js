var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var begin = process.argv[2], result = "";
var step = Number(process.argv[3]);
var ind1, ind2;

for(var i = 0; i < begin.length; i++){
    if((begin[i] >= 'A')&& (begin[i] <= 'Z'))
        alphabet.toUpperCase();
    else if ((begin[i] >= 'a') && (begin[i] <= 'z'))
        alphabet.toLowerCase();
    ind1 = begin.charCodeAt(i);
    ind2 = (ind1 - alphabet.charCodeAt(0)) + step;
    result += alphabet[ind2];
}
console.log(result);