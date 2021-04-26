function myFunction() {
    let allArguments = [];
    let smallArguments = [];

    for (let i = 0; i < arguments.length; i++) {

        allArguments = Array.from(arguments);

        if (allArguments[i].length == 1) {
            smallArguments += allArguments[i];
        }
    }

    let outPut = "";

    for (let i = 0; i < smallArguments.length; i++) {
        let asciCode = smallArguments.charCodeAt(i);

        if ((asciCode >= 65 && asciCode <= 90) || (asciCode >= 97 && asciCode <= 122)) {
            outPut += smallArguments[i];
        }
    }

    document.getElementById('h1').innerHTML = outPut;

}

myFunction("A", 32, false, "abc", "b", "c", 1, '2', '=', true, '/', 'a', 'd');