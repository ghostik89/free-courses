function func(a, z) {
    if (z == 0) return 1;
    if (z == 1) return a;
    if (z % 2 == 1)
        return func(a, z-1)*a;
    else{
        var b = func(a,z/2);
        return b * b;
    }
}

var n = Number(process. argv[3]);
var e = Number(process.argv[2]);
var sum = (e * (func(e,n) - 1))/(e - 1);

console.log(sum);