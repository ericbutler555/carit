document.addEventListener('DOMContentLoaded', function () {
  // define the 4 courses for each grade level:
  const courses = [
    [
      'MATH 1113: Precalculus',
      'MATH 1190: Calculus I',
      'POLS 1101: American Government',
      'HIST 1100: Survey of World History'
    ],
    [
      'TCOM 2010: Technical Writing',
      'CSE 1321: Programming and Problem Solving I',
      'CSE 2300: Discrete Structures for Computing',
      'STAT 2332: Probability and Data Analysis'
    ],
    [
      'IT 3123: Hardware and Software Concepts',
      'IT 3203: Introduction to Web Development',
      'IT 3223: Software Acquisition and Project Management',
      'IT 3423: Operating Systems Concepts and Administration'
    ],
    [
      'IT 3883: Advanced Application Development',
      'IT 4323: Data Communications and Networking',
      'IT 4683: Management of IT and Human Computer Interaction',
      'IT 4823: Information Security Administration and Privacy'
    ]
  ];
  // initialize the student's status:
  let studentStatus = 0;

  // get student status whenever the user changes its value:
  document.getElementById('studentStatus').addEventListener('change', function (event) {
    // update the student status:
    studentStatus = event.target.value;

    // hide the class list if the user resets the student status and stop any further processing:
    if (studentStatus == 0) {
      document.querySelector('.apply-step-2').style.display = 'none';
      return false;
    }

    // display appropriate courses based on student's selected status:
    for (let i = 0; i < 4; i++) {
      document.querySelector('.course-item-' + (i + 1)).textContent = courses[studentStatus - 1][i];
    }
    document.querySelector('.apply-step-2').style.display = 'block';
  });

  // listen for the form's submit event:
  document.getElementById('eligibilityForm').addEventListener('submit', function (event) {
    // prevent browser's normal form handling:
    event.preventDefault();
    // store the form element for easy reference:
    const thisForm = this;

    // get the user's stated grade values:
    let gradeTotal = 0;
    for (let j = 1; j <= 4; j++) {
      gradeTotal += parseFloat(thisForm.elements['course-grade-' + j].value);
    }
    // calculate the user's average grade to the nearest hundredth:
    const gradeAverage = (gradeTotal / 4).toFixed(2);

    // display the result:
    let resultMessage;
    if (gradeAverage >= 2.5) {
      resultMessage = '<h2>Congratulations!</h2><p>Based on your grades above, we calculated your average GPA to be <strong>' + gradeAverage + '</strong>. As a result, we welcome you to apply for our open positions. Click the button to continue to our Application Form.</p><a class="button-link" href="#" onclick="event.preventDefault(); alert(\'The Application Form page does not actually exist.\');">Apply Now &rarr;</a>';
    } else {
      resultMessage = '<h2>Thanks</h2><p>Based on your grades above, we calculated your average GPA to be <strong>' + gradeAverage + '</strong>. We appreciate your interest in applying. If we think you are a good fit for any of our open positions, we will contact you shortly.</p>';
    }
    document.querySelector('.apply-result').innerHTML = resultMessage;
  });
});
