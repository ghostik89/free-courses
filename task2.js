var alpha = "abcdefghijklmnopqrstuvwxyz";
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var begin = process.argv[2], result = "";
var step = Number(process.argv[3]);
var ind1, ind2;

for(var i = 0; i < begin.length; i++){
    if((begin[i] >= 'A')&& (begin[i] <= 'Z')){
        ind1 = begin.charCodeAt(i);
        ind2 = (ind1 % alphabet.charCodeAt(0)) + step;
        if (ind2 > 26) ind2 %= 26;
        result += alphabet[ind2];
    }
    else if ((begin[i] >= 'a') && (begin[i] <= 'z')) {
        ind1 = begin.charCodeAt(i);
        ind2 = (ind1 % alpha.charCodeAt(0)) + step;
        if(ind2 > 26) ind2 %= 26;
        result += alpha[ind2];
    }
}
console.log(result);
