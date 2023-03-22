function potenciawithoutfilterandmap() {

    const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const pot = input.map(function (num) {
        return Math.pow(num, 2);
    });
    const pots = pot.filter((num) => num < 10);
    const initialValue = 0;
    const sumWithInitial = pots.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
    );
    console.log(pot); // Muestra valores potencia de 2
    console.log(pots);  // Muestra valores potencia de 2 mas pequeños de 10
    console.log(sumWithInitial); // Muestra valores potencia de 2 mas pequeños de 10 sumados

}
    potenciawithoutfilterandmap();






