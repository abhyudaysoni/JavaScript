const printJson = (obj) => {
    // your code here which print all the values of the json object
    // if jsonObj = { a: 1, b: 2 } print 1 2
    // if jsonObj = { b: { c: 2} } print 2

    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            console.log(element);
        }
    }
};
printJson();
