$(document).ready(function() {
        $("#blanks").submit(function() {
          var inputPerson1 = $("input#person1").val();
          var inputPerson2 = $("input#person2").val();
          var inputAnimal = $("input#animal").val();
          var inputExclamation = $("input#exclamation").val();
          var inputVerb = $("input#verb").val();
          var inputNoun = $("input#noun").val();

          $(".person1").append(inputPerson1);
          $(".person2").append(inputPerson2);
          $(".animal").append(inputAnimal);
          $(".exclamation").append(inputExclamation);
          $(".verb").append(inputVerb);
          $(".noun").append(inputNoun);

          $("#story").show();

          event.preventDefault();
        });
      });
