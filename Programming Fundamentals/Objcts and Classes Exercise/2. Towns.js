function towns(arr) {
    let result = [];
    for (let record of arr) {
        [cityName, lat, lon] = record.split(' | ');
        let city = {
            'town': cityName,
            'latitude': Number(lat).toFixed(2),
            'longitude': Number(lon).toFixed(2)
        };
        result.push(city);
        }
    for (let town of result) {
        console.log(town);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);