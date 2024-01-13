const awesomeFunction = (req, res, next) => {
    res.json('Spencer Wilson');
};

const anotherPerson = (req, res, next) => {
    res.json('Another person');
};

module.exports = { awesomeFunction, anotherPerson};