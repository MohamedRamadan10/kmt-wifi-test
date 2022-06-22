$(() => {
   $(".menu__btn").click(function () {
      $(".menu .links").toggleClass("active");
   });

   var secondsOne = 10;
   var secondsTwo = 30;
   var secondsThree = 10;
   var fooOne;
   var fooTwo;
   var fooThree;

   function redirectOne() {
      document.location.href =
         "https://mohamedramadan10.github.io/kmt-wifi-test/check.html";
   }

   function updateSecsOne() {
      document.getElementById("secondsOne").innerHTML = secondsOne;
      secondsOne--;
      if (secondsOne == -1) {
         clearInterval(fooOne);
         redirectOne();
      }
   }
   function redirectTwo() {
      document.location.href =
         "https://mohamedramadan10.github.io/kmt-wifi-test/connect.html";
   }

   function updateSecsTwo() {
      document.getElementById("secondsTwo").innerHTML = secondsTwo;
      secondsTwo--;
      if (secondsTwo == -1) {
         clearInterval(fooTwo);
         redirectTwo();
      }
   }
   function redirectThree() {
      document.location.href = "https://www.youtube.com/watch?v=J7SOfbFzY-E";
   }

   function updateSecsThree() {
      document.getElementById("secondsThree").innerHTML = secondsThree;
      secondsThree--;
      if (secondsThree == -1) {
         clearInterval(fooThree);
         redirectThree();
      }
   }

   function countdownTimer() {
      fooOne = setInterval(function () {
         updateSecsOne();
      }, 1000);
      fooTwo = setInterval(function () {
         updateSecsTwo();
      }, 1000);
      fooThree = setInterval(function () {
         updateSecsThree();
      }, 1000);
   }

   countdownTimer();
});
