function potenciawithoutfilterandmap(){
    r=0;
    suma=0;
    p=2;
    a=0;
    for (var x = 0; r < 10; x++) {
        a = x;
        var r = Math.pow(p, a);
        suma=suma+r;
        console.log(r)
        a=x+1;

    }
    console.log(suma)
}

potenciawithoutfilterandmap();



