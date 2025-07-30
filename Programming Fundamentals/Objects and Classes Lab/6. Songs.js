function songs(data) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = data[0];

    let allSongs = [];

    for (let i = 1; i <= numberOfSongs; i++) {
        let parsedData = data[i].split('_');

        let typeList = parsedData[0];
        let name = parsedData[1];
        let time = parsedData[2];

        let song = new Song(typeList, name, time);

        allSongs.push(song);
    }

    let searchTerm = data.pop();

    if (searchTerm !== 'all') {
        allSongs = allSongs
            .filter(s => s.typeList === searchTerm);
    }

    let songNames = allSongs.map(s => s.name);

    for (let songName of songNames) {
        console.log(songName);
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);