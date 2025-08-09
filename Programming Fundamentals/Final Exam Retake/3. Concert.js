function concert(concertData) {
    let bands = {};
    let bandInsertionOrder = [];

    let idx = 0;
    let command = concertData[idx];
    let time = false;
    let timeAudio = 0;

    while (command !== 'Start!') {
        let parts = command.split('; ');
        let currentCommand = parts[0];
        let bandName = parts[1];

        if (currentCommand === 'Add') {
            let membersArr = parts[2].split(', ');

            if (!bands.hasOwnProperty(bandName)) {
                bands[bandName] = { time: 0, members: [] };
                bandInsertionOrder.push(bandName);
                }

            for (let i = 0; i < membersArr.length; i++) {
                let currentMember = membersArr[i];
                if (!bands[bandName].members.includes(currentMember)) {
                    bands[bandName].members.push(currentMember);
                    if (currentMember !== membersArr[i]); {

                    }
                 }
            }

        } else if (currentCommand === 'Play') {
            let time = Number(parts[2]);

            if (!bands.hasOwnProperty(bandName)) {
                bands[bandName] = { time: 0, members: [] };
                bandInsertionOrder.push(bandName);
            }

            bands[bandName].time += time;
        }

        idx++;
        command = concertData[idx];
    }


    idx++;
    let bandToShow = concertData[idx];

    if (!bandToShow) {
        bandToShow = bandInsertionOrder[0];
    }

     let totalTime = 0;
    let allBandNames = Object.keys(bands);

    for (let i = 0; i < allBandNames.length; i++) {
        totalTime += bands[allBandNames[i]].time;
    }

    console.log(`Total time: ${totalTime}`);

    for (let i = 0; i < bandInsertionOrder.length; i++) {
        let name = bandInsertionOrder[i];
        console.log(`${name} -> ${bands[name].time}`);
    }

    console.log(bandToShow);
    for (let i = 0; i < bands[bandToShow].members.length; i++) {
        console.log(`=> ${bands[bandToShow].members[i]}`);
    }
}

concert(["Play; The Beatles; 2584",
        "Add; The Beatles; John Lennon, George Harrison, Ringo Starr",
        "Add; The Beatles; Paul McCartney, George Harrison",
        "Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards",
        "Play; The Rolling Stones; 4239",
        "Start!"]);

