function argsFlags(args) {
    let commandLine = args.toString().replace(/,/g, " ");
    var spaceMarker = '<SP>';
    while (commandLine.indexOf(spaceMarker) > -1) spaceMarker += '@';
    var noSpacesInQuotes = commandLine.replace(/"([^"]*)"?/g, (fullMatch, capture) => {
        return capture.replace(/ /g, spaceMarker);
    });
    var mangledParamArray = noSpacesInQuotes.split(/ +/);
    args = mangledParamArray.map((mangledParam) => {
        return mangledParam.replace(RegExp(spaceMarker, 'g'), ' ');
    });
    let output = {
        "unsorted": []
    }
    args.forEach((arg, index) => {
        if (arg.startsWith("--")) {
            output[args[index].slice(2)] = args[index + 1]
            args.splice(index, 1);
        } else {
            output.unsorted.push(arg)
        }
    })
    return output
}

module.exports = argsFlags