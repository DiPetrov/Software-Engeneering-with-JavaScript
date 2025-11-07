function registration(input) {
    let Num = Number(input[0]);
    let registrationCount = 0;

    function isUsernameValid(username) {
        if (username.length < 3) return false;
        if (!(username[0] >= 'A' && username[0] <= 'Z')) return false;
        for (let i = 1; i < username.length; i++) {
            if (!(username[i] >= 'a' && username[i] <= 'z')) return false;
        }
        return true;
    }

    function isPasswordValid(password) {
        if (password.length < 6) return false;

        let i = 0;
        while (i < password.length) {
            let ch = password[i];
            if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
                i++;
            } else {
               break;
            }
        }

        if (i < 5) return false;
        if (i === password.length) return false;

        for (let j = i; j < password.length; j++) {
            let ch = password[j];
            if (!(ch >= '0' && ch <= '9')) return false;
        }
        return true;
    }

    let isValid = true;
    for (let i = 1; i <= Num; i++) {
        let line = input[i];

        let firstUsername = line.indexOf('U$') + 2;
        let secondUsername = line.indexOf('U$', firstUsername);
        let firstPassvord = line.indexOf('P@$') + 3;
        let secondPassvord = line.indexOf('P@$', firstPassvord);

        if (firstUsername > 1 && secondUsername > -1 && firstPassvord > 2 && secondPassvord > -1) {
            let username = line.slice(firstUsername, secondUsername);
            let password = line.slice(firstPassvord, secondPassvord);

            if (isUsernameValid(username) && isPasswordValid(password)) {
                console.log('Registration was successful');
                console.log(`Username: ${username}, Password: ${password}`);
                registrationCount++;
                isValid = false;
                continue;
            }
        }
        console.log('Invalid username or password');
    }

    console.log(`Successful registrations: ${registrationCount}`);
}

registration([
    "3",
    "U$MichaelU$P@$asdqwe123P@$",
    "U$NameU$P@$PasswordP@$",
    "U$UserU$P@$ad2P@$"
]);