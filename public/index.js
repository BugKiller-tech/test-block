var database = firebase.database();


function writeUserData() {
  let pageName = document.getElementById("username").value;
  let pageCompanyName = document.getElementById("companyName").value;
  let pageEmail = document.getElementById("email").value;
  let pageJobPosition = document.getElementById("jobPosition").value;
  let pageJobDescription = document.getElementById("jobDescription").value;
  let pageUrl = document.getElementById("jobUrl").value;
  firebase.database().ref('app' + pageName).set({

    company: pageCompanyName,
    email: pageEmail,
    jobPosition : pageJobPosition,
    jobDescription: pageJobDescription,
    jobUrl: pageUrl
  });
}
