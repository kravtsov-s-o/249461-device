var link1 = document.querySelector(".map");
var link2 = document.querySelector(".write-us");

var popup1 = document.querySelector(".modal-map");
var popup2 = document.querySelector(".modal-write-us");

var close1 = document.querySelector(".btn-close-1");
var close2 = document.querySelector(".btn-close-2");

link1.addEventListener("click", function (event) {
  event.preventDefault();
  popup1.classList.add("modal-show");
})

link2.addEventListener("click", function (event) {
  event.preventDefault();
  popup2.classList.add("modal-show");
    if (Storage) {
      name.value = Storage;
      email.focus();
    } else if (Storage) {
      email.value = Storage;
      text-mail.focus();
    }
})

close1.addEventListener("click", function(event) {
  event.preventDefault();
  popup1.classList.remove("modal-show");
})

close2.addEventListener("click", function(event) {
  event.preventDefault();
  popup2.classList.remove("modal-show");
})
