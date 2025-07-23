function addAndRemove(commands) {
  let num = 1;
  let result = [];

  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];

    if (command === 'add') {
      result.push(num);
    } else if (command === 'remove') {
      result.pop();
    }

    num++;
  }

  if (result.length === 0) {
    console.log('Empty');
  } else {
    console.log(result.join(' '));
  }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);

