function movies(input) {



    class movies {
        constructor(name, director, date) {
            name = name,
                director = director,
                date = date
        };
    };

    for (let element of input) {
        if (element.includes('addMovie')) {
        input.shift();

        }
    }
}

movies([
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen']);