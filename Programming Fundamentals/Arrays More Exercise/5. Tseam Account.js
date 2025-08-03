function tseamAccount(input) {

    let gameArr = input.shift().split(' ');
    let index = 0;
    let command = input[index];

    while(command !== 'Play!') {
        let [currentCommand, currentGame] = command.split(' ');

        switch(currentCommand) {
            case 'Install':
            if (!gameArr.includes(currentGame)) {
                gameArr.push(currentGame);
            }
                break;
            case 'Uninstall':
            if (gameArr.includes(currentGame)) {
                gameArr.splice(gameArr.indexOf(currentGame), 1);
            }
                break;
            case 'Update':
            if (gameArr.includes(currentGame)) {
                let currentGameIndex = gameArr.indexOf(currentGame, 0);
                gameArr.push(currentGame);
                gameArr.splice(currentGameIndex, 1,);
            }
                break;
            case 'Expansion':
            if (gameArr.includes(currentGame.split('-')[0])) {
                let currentGameIndex = gameArr.indexOf(currentGame.split('-')[0], 0);
                let updatedGame = currentGame.split('-')[0] + ':' + currentGame.split('-')[1];
                gameArr.splice(currentGameIndex + 1, 0, updatedGame);
            }
                break;
            default:
                console.log(`Error`)
        }

        index++;
        command = input[index];
    }

    console.log(gameArr.join(' '));
}

tseamAccount(['CS WoW Diablo',
                'Install LoL',
                'Uninstall WoW',
                'Update Diablo',
                'Expansion CS-Go',
                'Play!']);

tseamAccount(['CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!']);