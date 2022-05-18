const findTheOldest = function(people) {
    const oldest = people.reduce((oldestPerson, person) => {
        if ("yearOfDeath" in person === false ){
            person.yearOfDeath = new Date().getFullYear();
        }
        const age = person.yearOfDeath - person.yearOfBirth;
        if (age > oldestPerson.yearOfDeath - oldestPerson.yearOfBirth) {
            return person;
        } else {
            return oldestPerson;
        }
    }, {
        name: "name",
        yearOfBirth: 0,
        yearOfDeath: 0,

    })
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;
