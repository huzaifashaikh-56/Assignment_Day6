

let marks = parseFloat(prompt("Enter your marks (0-100):"));
let grade;

if (marks >= 90 && marks <= 100) {
  grade = "A";
} else if (marks >= 80) {
  grade = "B";
} else if (marks >= 70) {
  grade = "C";
} else if (marks >= 60) {
  grade = "D";
} else if (marks >= 0) {
  grade = "F";
} else {
  grade = "Invalid input";
}

console.log("\nTask 3: Grade Checker");
console.log("Marks:", marks);
console.log("Grade:", grade);