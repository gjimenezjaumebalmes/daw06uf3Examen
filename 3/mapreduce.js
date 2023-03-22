function potenciawithoutfilterandmap() {

    const input = [1, 2, 3, 4, 5];

    const pot = input.map(function (num) {
        return Math.pow(num, 2);
    });
    const pots = pot.filter((num) => num < 10);
    const initialValue = 0;
    const sumWithInitial = pots.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
    );

    console.log(pots);
    console.log(sumWithInitial);

}
    potenciawithoutfilterandmap();






