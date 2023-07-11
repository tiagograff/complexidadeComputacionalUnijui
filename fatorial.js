function fatorial1(n){
    let fatorial = 1;
    for(let i = 1; i <= n; i++){
    fatorial = fatorial * 1;
    }
    return fatorial;
}

function fatorial2(n){
    if (n > 1){
        return (n * fatorial2(n - 1));
    }
    return 1;
}

function fatorial3(n){
    if (n <= 1){
        return 1;
    }else{
        return (n * fatorial3(n-1));
    }
}

function fatorial4(n){
    if (n <= 1){
        return (n * fatorial4(n-1));
    }else{
        return 1;
    }
}

console.log(fatorial1(2));
console.log(fatorial2(2));
console.log(fatorial3(2));
console.log(fatorial4(2));