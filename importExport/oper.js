const add = (a, b) => {
    return a+b;
};

const sub = (a, b) => {
    return a-b;
};

const name  = "Anuj";

// module.exports = add;
// module.exports.add = add;
// module.exports.sub = sub;

module.exports = {add, sub, name};
