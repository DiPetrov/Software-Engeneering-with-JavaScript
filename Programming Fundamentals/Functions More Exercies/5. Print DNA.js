function printDNA(a) {
    function workDNA(x) {
        let helix = 'ATCGTTAGGG';
        let result = '';
        for (let i = 0; i < x; i++) {
            let base = (i * 2) % helix.length;
            let currentHelix = helix[base];
            let currentHelix2 = helix[(base + 1) % helix.length];

            if (helix[base] == 0 && helix[(base + 1) % helix.length] == 1) {
                result += `**${currentHelix}${currentHelix2}**` + '\n'
                // console.log(`**${currentHelix}${currentHelix2}**`);
            } else if (currentHelix === 'C' && currentHelix2 === 'G') {
                result += `**${currentHelix}${currentHelix2}**` + '\n'
                // console.log(`*${currentHelix}--${currentHelix2}*`);
            } else if (currentHelix === 'T' && currentHelix2 === 'T') {
                result += `${currentHelix}----${currentHelix2}` + '\n'
                // console.log(`${currentHelix}----${currentHelix2}`);
            } else if (currentHelix === 'A' && currentHelix2 === 'G') {
                result += `*${currentHelix}--${currentHelix2}*` + '\n'
                // console.log(`*${currentHelix}--${currentHelix2}*`);
            } else if (currentHelix === 'G' && currentHelix2 === 'G') {
                result += `**${currentHelix}${currentHelix2}**` + '\n'
            } else if (currentHelix === 'A' && currentHelix2 === 'T') {
                result += `*${currentHelix}--${currentHelix2}*` + '\n'
            }
        }
        return result;
    }

    let resultFinal = workDNA(a);
    console.log(resultFinal)
}

// printDNA(4);
printDNA(10);