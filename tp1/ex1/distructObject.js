let user = {
  firstName: "hamza",
  lastName: "bejaoui",
  age: 24,
}
user = { ...user, jobTitle: "dev" }
console.log(user)

const {jobTitle,age}=user
console.log(jobTitle,age)
