function recursion(arg) {
    console.log(arg);
    if (arg <= 1) {
        return;
    } else {
        recursion(arg - 1);
    }
}

recursion(3);

