var parameters = process.argv;
var sum = 0;

for (var index = 2; index < parameters.length; index++) {
    var parameter = Number(parameters[index]);

    if (!isNaN(parameter))
        sum += parameter;
}

console.log(sum);

