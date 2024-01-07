 // set initial value to zero
 let count = 0;
 // select value and buttons
 const value = document.querySelector("#value");
 const btns = document.querySelectorAll(".btn");
 const randomNumbers = [1, 5, 2, 6, 112, 511, 16161, 1313, 1161616, 171717, 1871812812, 11341231231, 12412412, 13,1, 123123.123, 123123,];

 btns.forEach(function (btn) {
   btn.addEventListener("click", function (e) {
     const styles = e.currentTarget.classList;
     if (styles.contains("decrease")) {
       count--;
     } else if (styles.contains("increase")) {
       count++;
     } else if (styles.contains("plus10")) {
       count += 10;
     } else if (styles.contains("minus10")) {
       count -= 10;
     } else if (styles.contains("randomNum")) {
       const randomIndex = Math.floor(Math.random() * randomNumbers.length);
       count = randomNumbers[randomIndex];
     } else {
       count = 0;
     }

     if (count > 0) {
       value.style.color = "green";
     }
     if (count < 0) {
       value.style.color = "red";
     }
     if (count === 0) {
       value.style.color = "#222";
     }
     value.textContent = count;
   });
 });