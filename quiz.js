$(document).ready(function(){
    var questions = [
        "1.Great Pyramid of Giza’s is located in which country?",
        "2.Which of the following was the world’s earliest form of paper that was invented by the Egyptians?",
        "3.During which of the following wars the Russian Revolution took place?",
        "4.Which is called the first wonder of the world?",
        "5.Which among the following does not belong to the seven ancient wonders of the world?"
    ];
    var answers = [
        "Egypt",
        "Hieroglyphics",
        "World War I",
        "The Pyramids of Egypt",
        "Great Wall of China"
    ];
    var choice_options = [
        ["Iraq", "Egypt", "Lebanon", "Israel"],
        ["Hieroglyphics", "Papyrus", "Cuneiform", "Bone Script"],
        ["Napoleonic War", "World War II", "World War I", "None of the above"],
        ["The Pyramids of Egypt", "The Hanging Gardens of Babylon", "The Tomb of Mausolus", "The Colossus of Rhodes"],
        ["The Statue of Jupiter Olympus", "The Pharos of Alexandria", "Great Wall of China", "The Pyramids of Egypt"]
    ];
    for (var i = 0; i < questions.length; i++) {
        var question = $("<div>").text(questions[i]);
        var choices = $("<div>").addClass("choices");
        for (var j = 0; j < choice_options[i].length; j++) {
          var choice = $("<label>");
          var radio = $("<input>").attr({
            type: "radio",
            name: "question" + i,
            value: choice_options[i][j]
          });
          choice.append(radio, choice_options[i][j]);
          choices.append(choice);
        }
        $("#quiz-box").append(question, choices);
    }
    var score = 0;
    var total = questions.length;

    $("button").click(function() {
        for (var i = 0; i < questions.length; i++) {
          var answer = $('input[name="question' + i + '"]:checked').val();
          if (answer === answers[i]) {
            score++;}
        }
        $(".score").text("You scored " + score + " out of " + total);
    });
});