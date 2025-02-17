/* 1. How will you create a new copy of the object below while updating the value of
address.details[0] to "5“? */

const data = {
  name: "Harry Potter",
  age: 12,
  address: {
    details: ["4", "Privet Drive"],
    area: "Little Whinging",
    city: "Surrey",
    state: "England",
  },
};

//const updateData = data;
const updateData = JSON.parse(JSON.stringify(data));

updateData.address.details[0] = "5";

console.log("original data : \n", data);

console.log("updated Data: \n ", updateData);

//output

/* original data : 
 {
  name: 'Harry Potter',
  age: 12,
  address: {
    details: [ '4', 'Privet Drive' ],
    area: 'Little Whinging',
    city: 'Surrey',
    state: 'England'
  }
}
updated Data: 
  {
  name: 'Harry Potter',
  age: 12,
  address: {
    details: [ '5', 'Privet Drive' ],
    area: 'Little Whinging',
    city: 'Surrey',
    state: 'England'
  }
} */
