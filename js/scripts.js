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
var index = 0;

$(document).ready(function() {

  //add form option to input multiple languages
  $("#add-language").click(function() {
    $("#newLanguage").append(
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
      '</div>');
  })

  //collect info from user
  $("#info").submit(function(event) {
    event.preventDefault();

    var fullName = $("#name").val();
    var contactInfo = $("#contact").val();
    var currentClass = $("#current-class").val();
    //var previousJob = $("#previousJob").val();
    //var origin = $("#origin").val();

    //create student object
    var newStudent = new Student (fullName, contactInfo, currentClass);
    students.push(newStudent);
    index = students.indexOf(newStudent);

    //assign language and confidence to new object, push to langauge object for student
    $(".newLanguage").each(function() {
      var language = $(this).find(".current-language").val();
      var confidence = $(this).find(".skill").val();
      var newLanguage = new Language (language, confidence);
      newStudent.languages.push(newLanguage);
    })
  });
});
