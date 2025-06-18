const findTheOldest = function (people) {
  const getAge = (yearOfBirth, yearOfDeath) => {
    return yearOfDeath - yearOfBirth;
  };
  const oldestPerson = people.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );

    return oldestAge < currentAge ? currentPerson : oldest;
  });
  return oldestPerson;
};

const people = [
  { name: "Isaac Newton", yearOfBirth: 1643, yearOfDeath: 1727 },
  { name: "Leonardo da Vinci", yearOfBirth: 1452, yearOfDeath: 1519 },
  { name: "William Shakespeare", yearOfBirth: 1564, yearOfDeath: 1616 },
  { name: "George Washington", yearOfBirth: 1732, yearOfDeath: 1799 },
  { name: "Thomas Jefferson", yearOfBirth: 1743, yearOfDeath: 1826 },
  { name: "Napoleon Bonaparte", yearOfBirth: 1769, yearOfDeath: 1821 },
  { name: "Abraham Lincoln", yearOfBirth: 1809, yearOfDeath: 1865 },
  { name: "Charles Darwin", yearOfBirth: 1809, yearOfDeath: 1882 },
  { name: "Albert Einstein", yearOfBirth: 1879, yearOfDeath: 1955 },
  { name: "Winston Churchill", yearOfBirth: 1874, yearOfDeath: 1965 },
  { name: "Nelson Mandela", yearOfBirth: 1918, yearOfDeath: 2013 },
  { name: "Rosa Parks", yearOfBirth: 1913, yearOfDeath: 2005 },
  { name: "Anne Frank", yearOfBirth: 1929, yearOfDeath: 1945 },
];

console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
