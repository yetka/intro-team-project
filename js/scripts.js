//constructor for student object
function Student (fullName, contactInfo, currentClass, previousJob, origin) {
  this.fullName = fullName;;
  this.languages = [];
  this.contact = contactInfo;
  this.currentClass = currentClass;
  this.previousJob = previousJob;
  this.origin = origin;
}

//constructor for language object
function Language (language, confidence) {
  this.language = language;
  this.confidence = confidence;
}

//initialize global variables
var students = [];

$(document).ready(function() {

  //add form to input multiple languages
  $("#addLanguage").submit(function(event() {
    $("#newLanguage").append('<div class="newLanguage">' +)
  })

  //collect info from user
  $("").submit(function(event) {
    event.preventDefault();

    var fullName = $("#firstName").val();
    var contactInfo = $("#contact").val();
    var currentClass = $("#currentClass").val();
    var previousJob = $("#previosJob").val();
    var origin = $("#origin").val();

    //create student object
    var newStudent = new Student (fullName, contactInfo, currentClass, previousJob, origin)
    students.push(newStudent);

    //assign language and confidence to new object, push to langauge object for student
    $(".newLanguage").each(function() {
      var language = $(this).val();
      var confidence = $(this).val();
      var newLanguage = new Language (language, confidence);
      newStudent.languages.push(newLangauge);
    })
  });
});
