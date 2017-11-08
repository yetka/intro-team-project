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

//method to add student to class list
Student.prototype.studentClass = function() {
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

//method to add student to list of each language learned
Student.prototype.studentLanguage = function() {
  for (index = 0; index < this.languages.length; index++) {
    if (this.languages[index].language === "HTML") {
      $("#studentHtmlList").append("<li><span class='studentLanguage'>" + this.fullName + "</span><br /> Confidence: " + this.languages[index].confidence);
    } if (this.languages[index].language === "CSS") {
      $("#studentCssList").append("<li><span class='studentLanguage'>" + this.fullName + "</span><br /> Confidence: " + this.languages[index].confidence);
    } if (this.languages[index].language === "C#") {
      $("#studentcSharpList").append("<li><span class='studentLanguage'>" + this.fullName + "</span><br /> Confidence: " + this.languages[index].confidence);
    } if (this.languages[index].language === "Java") {
      $("#studentJavaList").append("<li><span class='studentLanguage'>" + this.fullName + "</span><br /> Confidence: " + this.languages[index].confidence);
    } if (this.languages[index].language === "PHP") {
      $("#studentPhpList").append("<li><span class='studentLanguage'>" + this.fullName + "</span><br /> Confidence: " + this.languages[index].confidence);
    } if (this.languages[index].language === "Ruby") {
      $("#studentRubyList").append("<li><span class='studentLanguage'>" + this.fullName + "</span><br /> Confidence: " + this.languages[index].confidence);
    } if (this.languages[index].language === "JavaScript") {
      $("#studentJavaScriptList").append("<li><span class='studentLanguage'>" + this.fullName + "</span><br /> Confidence: " + this.languages[index].confidence);
    } if (this.languages[index].language === "Android") {
      $("#studentAndroidList").append("<li><span class='studentLanguage'>" + this.fullName + "</span><br /> Confidence: " + this.languages[index].confidence);
    } if (this.languages[index].language === "Design") {
      $("#studentDesignList").append("<li><span class='studentLanguage'>" + this.fullName + "</span><br /> Confidence: " + this.languages[index].confidence);
    } if (this.languages[index].language === "Drupal") {
      $("#studentDrupalList").append("<li><span class='studentLanguage'>" + this.fullName + "</span><br /> Confidence: " + this.languages[index].confidence);
    } if (this.languages[index].language === ".NET") {
      $("#studentDotNetList").append("<li><span class='studentLanguage'>" + this.fullName + "</span><br /> Confidence: " + this.languages[index].confidence);
    } if (this.languages[index].language === "Rails") {
      $("#studentRailsList").append("<li><span class='studentLanguage'>" + this.fullName + "</span><br /> Confidence: " + this.languages[index].confidence);
    } if (this.languages[index].language === "React") {
      $("#studentReactList").append("<li><span class='studentLanguage'>" + this.fullName + "</span><br /> Confidence: " + this.languages[index].confidence);
    }
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
    $("#displayLanguages").append("<li>" + language.language + "<br />Confidence: " + language.confidence + "</li>");
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
  $(".current-language").val("");
  $(".skill").val("");
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
                                  '<option value="">Select One:</option>' +
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
                                  '<option value="">Select One:</option>' +
                                    '<option>Not really</option>' +
                                    '<option>OK</option>' +
                                    '<option>Pretty Good</option>' +
                                    '<option>Expert</option>' +
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
    newStudent.studentClass();
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
  $("#all-students").click(function() {
    hideAll();
    $(".allStudents").show();
  })
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
  $("#html").click(function() {
    hideAll();
    $(".html").show();
  })
  $("#css").click(function() {
    hideAll();
    $(".css").show();
  })
  $("#cSharp").click(function() {
    hideAll();
    $(".cSharp").show();
  })
  $("#java").click(function() {
    hideAll();
    $(".java").show();
  })
  $("#php").click(function() {
    hideAll();
    $(".php").show();
  })
  $("#ruby").click(function() {
    hideAll();
    $(".ruby").show();
  })
  $("#javaScript").click(function() {
    hideAll();
    $(".javaScript").show();
  })
  $("#android").click(function() {
    hideAll();
    $(".android").show();
  })
  $("#design").click(function() {
    hideAll();
    $(".design").show();
  })
  $("#drupal").click(function() {
    hideAll();
    $(".drupal").show();
  })
  $("#net").click(function() {
    hideAll();
    $(".dotNet").show();
  })
  $("#rails").click(function() {
    hideAll();
    $(".rails").show();
  })
  $("#react").click(function() {
    hideAll();
    $(".react").show();
  })
});
