//constructor for student object
function Student (fullName, contactInfo, currentClass, previousJob, hobby) {
  this.fullName = fullName;;
  this.languages = [];
  this.contact = contactInfo;
  this.currentClass = currentClass;
  this.previousJob = previousJob;
  this.hobby = hobby;
}

//constructor for language object
function Language (language, confidence) {
  this.language = language;
  this.confidence = confidence;
}

Student.prototype.displayStudent = function() {
  $("#studentList").append("<li><span class='clickStudent'>" + this.fullName + "</span></li>");
  if (this.currentClass === "C#") {
    $("#studentCList").append("<li><span class='clickStudent'>" + this.fullName + "</span></li>");
  }
  if (this.currentClass === "Ruby") {
    $("#studentRubyList").append("<li><span class='clickStudent'>" + this.fullName + "</span></li>");
  } else {
    $("#studentAndroidList").append("<li><span class='clickStudent'>" + this.fullName + "</span></li>");
  }
}

Student.prototype.showInfo = function(index) {
  $(".studentInfo").show();
  clearFields();
  $("#displayName").text(this.fullName);
  $("#displayEmail").text(this.contactInfo);
  $("#displayCurrentClass").text(this.currentClass);
  $("#displayPreviousJob").text(this.previousJob);
  $("#displayHobbies").text(this.hobby);
  this.languages.forEach(function(language) {
    $("#displayLanguages").append("<li>" + language.language + " " + language.confidence + "</li>");
  })
}

var clearFields = function() {
  $("#displayName").text("");
  $("#displayEmail").text("");
  $("#displayCurrentClass").text("");
  $("#displayPreviousJob").text("");
  $("#displayHobbies").text("");
  $("#displayLanguages").text("");
}

var clearForm = function() {
  $("#name").val("");
  $("#contact").val("");
  $("#current-class").val("");
  $(".extraForm").remove();
  $("#work").val("");
  $("#hobby").val("");
}


//initialize global variables
var students = [];
var index = 0;

$(document).ready(function() {

  //add form option to input multiple languages
  $("#add-language").click(function() {
    $("#newLanguage").append('<div class="extraForm">' +
      '<div class="newLanguage">' +
        '<div class="form-group">' +
          '<label for="current-class">Select another Language:</label>' +
          '<select class="form-control current-language">' +
            '<option>HTML</option>' +
            '<option>CSS</option>' +
            '<option>C#</option>' +
            '<option>Java</option>' +
            '<option>PHP</option>' +
            '<option>Ruby</option>' +
            '<option>JavaScript</option>' +
            '<option>Android</option>' +
            '<option>Design</option>' +
            '<option>Drupal</option>' +
            '<option>.NET</option>' +
            '<option>Rails</option>' +
            '<option>React</option>' +
          '</select>' +
        '</div>' +
        '<div class="form-group">' +
          '<label for="skill">How confident are you in this language:</label>' +
          '<select class="form-control skill">' +
            '<option>not really</option>' +
            '<option>ok</option>' +
            '<option>pretty good</option>' +
            '<option>expert</option>' +
          '</select>' +
        '</div>' +
      '</div>' +
    '</div>');
  })

  //collect info from user
  $("#info").submit(function(event) {
    event.preventDefault();

    var fullName = $("#name").val();
    var contactInfo = $("#contact").val();
    var currentClass = $("#current-class").val();
    var previousJob = $("#work").val();
    var hobby = $("#hobby").val();

    //create student object
    var newStudent = new Student (fullName, contactInfo, currentClass, previousJob, hobby);
    students.push(newStudent);
    index = students.indexOf(newStudent);

    //assign language and confidence to new object, push to langauge object for student
    $(".newLanguage").each(function() {
      var language = $(this).find(".current-language").val();
      var confidence = $(this).find(".skill").val();
      var newLanguage = new Language (language, confidence);
      newStudent.languages.push(newLanguage);
    })
    newStudent.displayStudent();

    clearForm();
    $(".clickStudent").last().click(function() {
      newStudent.showInfo();
    })
  });
});
