//14. Basic Narrowing
//Define a function that receive number | string and return: if is number the double and if is string uppercase

function doubleOrUpperCase(value: string | number) {
    return typeof value === "string"
        ? value.toUpperCase()
        : value * 2;
}
