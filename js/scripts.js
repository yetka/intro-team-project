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

//method to add student to 'all students' list
Student.prototype.displayStudent = function() {
  $("#studentList").append("<li><span class='clickStudent'>" + this.fullName + "</span></li>");
}

//method to add student to language specific list
Student.prototype.studentLanguage = function() {
  console.log(this.currentClass);
  if (this.currentClass === "C#") {
    $("#cSharpClassList").append("<li><span class='studentLanguage'>" + this.fullName + "</span></li>");
  }
  if (this.currentClass === "Ruby") {
    $("#rubyClassList").append("<li><span class='studentLanguage'>" + this.fullName + "</span></li>");
  }
  if (this.currentClass === "Android") {
    $("#androidClassList").append("<li><span class='studentLanguage'>" + this.fullName + "</span></li>");
  }
}

//method to display student info when clicked
Student.prototype.showInfo = function() {
  clearFields();
  $(".studentInfo").show();
  $("#displayName").text(this.fullName);
  $("#displayEmail").text(this.contactInfo);
  $("#displayCurrentClass").text(this.currentClass);
  $("#displayPreviousJob").text(this.previousJob);
  $("#displayHobbies").text(this.hobby);
  this.languages.forEach(function(language) {
    $("#displayLanguages").append("<li>" + language.language + " " + language.confidence + "</li>");
  })
}

//method to clear student display on new click
var clearFields = function() {
  $("#displayName").text("");
  $("#displayEmail").text("");
  $("#displayCurrentClass").text("");
  $("#displayPreviousJob").text("");
  $("#displayHobbies").text("");
  $("#displayLanguages").text("");
}

//method to clear form on submission
var clearForm = function() {
  $("#name").val("");
  $("#contact").val("");
  $("#current-class").val("");
  $(".extraForm").remove();
  $("#work").val("");
  $("#hobby").val("");
}

var hideAll = function() {
  $(".allStudents").hide();
  $(".cSharpClass").hide();
  $(".rubyClass").hide();
  $(".androidClass").hide();
  $(".html").hide();
  $(".css").hide();
  $(".cSharp").hide();
  $(".java").hide();
  $(".php").hide();
  $(".ruby").hide();
  $(".javaScript").hide();
  $(".android").hide();
  $(".design").hide();
  $(".drupal").hide();
  $(".dotNet").hide();
  $(".rails").hide();
  $(".react").hide();
}


//initialize global variables
var students = [];

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

    //assign language and confidence to new object, push to langauge object for student
    $(".newLanguage").each(function() {
      var language = $(this).find(".current-language").val();
      var confidence = $(this).find(".skill").val();
      var newLanguage = new Language (language, confidence);
      newStudent.languages.push(newLanguage);
    })

    //call methods to add student to correct lists
    newStudent.displayStudent();
    newStudent.studentLanguage();
    clearForm();

    //function to display selected student details
    $(".clickStudent").last().click(function() {
      newStudent.showInfo();
    })

    $(".studentLanguage").last().click(function() {
      newStudent.showInfo();
    })
  });

  //click functions to display desired list
  $("#class-cSharp").click(function() {
    hideAll();
    $(".cSharpClass").show();
  })
  $("#class-ruby").click(function() {
    hideAll();
    $(".rubyClass").show();
  })
  $("#class-android").click(function() {
    hideAll();
    $(".androidClass").show();
  })
});
