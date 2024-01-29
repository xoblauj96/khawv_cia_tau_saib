// user = [{
//     "username": "sor1",
//     "phone": "96218422",
//     "email": "sorlor@gmail.com",
//     "id": "920f81ca-d0ff-49da-aa32-b0f62bf5e4c1"
// }, {
//     "username": "sor2",
//     "phone": "96218422",
//     "email": "sorlor@gmail.com",
//     "id": "920f81ca-d0ff-49da-aa32-b0f62bf5e4c2"
// }, {
//     "username": "sor3",
//     "phone": "96218422",
//     "email": "sorlor@gmail.com",
//     "id": "920f81ca-d0ff-49da-aa32-b0f62bf5e4c3"
// }]

// u = user.filter((i) => i.id == '920f81ca-d0ff-49da-aa32-b0f62bf5e4c3')
// console.log(u);
// console.log(user)
// console.log("______________________________________");
// u = user.find(i => i.id == '920f81ca-d0ff-49da-aa32-b0f62bf5e4c3')
// u.name = "xob"
// u.lname = "lauj"
// console.log(u);
// console.log(user)

// console.log("+++++++++++++++++++++++++++++++++++++");
// u = user.map(u=> u.id =='920f81ca-d0ff-49da-aa32-b0f62bf5e4c3')
// console.log(u);


// If you want to respond without the "id" field, you can create a new array without that field before sending the response. Here's an example in JavaScript:

// javascript
// Copy code
const originalData = [
  {
    "username": "sor1",
    "phone": "96218422",
    "email": "sorlor@gmail.com",
    "id": "18ea908d-9dd6-4bbe-a560-7b4d10d8fb41"
  }
];

// Create a new array without the 'id' field
const responseData = originalData.map(({ id, ...rest }) => rest);

// Now, `responseData` does not have the 'id' field
console.log(responseData);