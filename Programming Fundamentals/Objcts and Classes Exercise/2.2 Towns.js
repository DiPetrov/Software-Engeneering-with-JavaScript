function towns(input) {

    let newTown = {};

    for (let i = 0; i < input.length; i++) {
        let townName = input[i].split(' | ')[0];
        let latitude = Number(input[i].split(' | ')[1]);
        let longitude = Number(input[i].split(' | ')[2]);

        newTown.town = townName;
        newTown.latitude = latitude.toFixed(2);
        newTown.longitude = longitude.toFixed(2);

        console.log(newTown)
    }
}

towns(['Sofia | 42.696552 | 23.32601',
       'Beijing | 39.913818 | 116.363625']);