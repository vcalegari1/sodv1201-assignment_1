function MarkToGrade() {
  const markInput = document.getElementById("mark-input-box");
  const validationMessage = document.getElementById("validation-message");
  const result = document.getElementById("result");

  const mark = parseInt(markInput.value);

  // Regex validation for numbers only 
  const numberRegex = /^[0-9]+$/;

  // Validation for the marks entered by the user
  if (isNaN(mark) || mark < 0 || mark > 100 || !numberRegex.test(markInput.value)) { 
    validationMessage.textContent = "Please enter a valid mark between 0 and 100 (numbers only).";
    result.textContent = "";
    return; 
  }

  let grade;
  if (mark >= 90) {
    grade = "A";
  } else if (mark >= 80) {
    grade = "B";
  } else if (mark >= 70) {
    grade = "C";
  } else if (mark >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  // Show the results 
  validationMessage.textContent = ""; 
  result.textContent = "Your grade is: " + grade;
}
