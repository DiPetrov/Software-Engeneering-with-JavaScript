function substring(str, start, end) {

    str = str.substring(start, start - end);
    console.log(str);
}

substring('ASentence', 1, 8);