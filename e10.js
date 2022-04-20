function removeFirstOccurrence(str, searchStr) {
    let index = str.indexOf(searchStr);
    if (index === -1) {
    return str;
    }
    return str.slice(0, index) + str.slice(index + searchStr.length);
    }
    console.log(removeFirstOccurrence("The quick brown fox jumps over the lazy dog", 'the'));
