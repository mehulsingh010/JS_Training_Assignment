const originalData = [
  {
    id: 1,
    first_name: "Nicki",
    email: "ncrozier0@squarespace.com",
    date_of_birth: "2009/05/09",
  },
  {
    id: 2,
    first_name: "Raychel",
    email: "rmcgrady1@cpanel.net",
    date_of_birth: "1996/11/05",
  },
  {
    id: 3,
    first_name: "Demetris",
    email: "dkilshall2@elpais.com",
    date_of_birth: "2018/12/31",
  },
  {
    id: 4,
    first_name: "Amata",
    email: "abraiden3@canalblog.com",
    date_of_birth: "2012/05/23",
  },
  {
    id: 5,
    first_name: "Venita",
    email: "vheap4@clickbank.net",
    date_of_birth: "2020/10/04",
  },
  {
    id: 6,
    first_name: "Fairfax",
    email: "fcrichton5@merriam-webster.com",
    date_of_birth: "2009/12/23",
  },
  {
    id: 7,
    first_name: "Kathleen",
    email: "kvasyukhnov6@devhub.com",
    date_of_birth: "2010/12/20",
  },
  {
    id: 8,
    first_name: "Sam",
    email: "scorck7@sitemeter.com",
    date_of_birth: "2020/08/30",
  },
  {
    id: 9,
    first_name: "Virgilio",
    email: "vferandez8@e-recht24.de",
    date_of_birth: "2000/09/07",
  },
  {
    id: 10,
    first_name: "Townie",
    email: "tpetyt9@upenn.edu",
    date_of_birth: "2018/09/01",
  },
];

const duplicateData = JSON.parse(JSON.stringify(originalData));

/* What makes a method mutating or non mutating in Javascript? Find out whether each of
the following methods are mutating or non-mutating. How can you verify this?:
○ push
○ pop
○ filter
○ find
○ sort
○ map */

console.log("original data", originalData);

//push

duplicateData.push({
  id: 11,
  first_name: "marsh",
  email: "marsh0@squarespace.com",
  date_of_birth: "2003/05/09",
});

console.log(duplicateData);

//push method is mutable
console.log("length of duplicate data push method", duplicateData.length); //11

console.log("length of original data", originalData.length); //10

//POP METHOD

duplicateData.pop();
console.log("length of duplicate data after pop method", duplicateData.length);

//filter

const filterData = duplicateData.filter((data) =>
  data.first_name.includes("o")
);
console.log("Filter Data :", filterData);

console.log(
  "duplicateData length after performing filtermethod: ",
  duplicateData.length
);

//Filter method is non mutable

//Find Method

console.log(
  "Find Method \n",
  duplicateData.find((data) => data.id === 1)
);

console.log(
  "duplicateData length after performing find Method: ",
  duplicateData.length
);

//find method non mutable

//SORT METHOD

const sortData = duplicateData.sort(
  (a, b) => new Date(a.date_of_birth) - new Date(b.date_of_birth)
);

console.log(
  "comaptrinf SortSData and suplicatedAta",
  duplicateData == sortData
);
console.log("Duplicate data after the sort method ", duplicateData);

//sort method is mutable

//map method

const emailData = duplicateData.map((item) => item.email);

console.log("All emails : ", emailData);

console.log(
  "Comparing the emailData and duplicateData ",
  emailData == duplicateData
); //false

//map method is non mutable , creates a new array
