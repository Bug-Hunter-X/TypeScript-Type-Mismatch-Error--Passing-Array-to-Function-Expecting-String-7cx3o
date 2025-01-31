function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}

let user = ["Jane", "Doe"];

console.log(greeter(user[0])); // Correct: Accessing the first element
console.log(greeterArray(user)); // Correct: Using a function that handles arrays