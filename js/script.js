var linkMap = document.querySelector(".map");
var linkWriteUs = document.querySelector(".write-us");

var popupMap = document.querySelector(".modal-map");
var popupWriteUs = document.querySelector(".modal-write-us");

var closeMap = popupMap.querySelector(".btn-close");
var closeWriteUs = popupWriteUs.querySelector(".btn-close");

var form = popupWriteUs.querySelector("form");
var userName = popupWriteUs.querySelector(".name");
var email = popupWriteUs.querySelector("[name=email]");
var letter = popupWriteUs.querySelector("[name=text-mail]");

var isStorageSupport = true;
var storage = "";

var overlay = document.querySelector(".modal-overlay");

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

//MODAL-MAP

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.add("modal-show");
  overlay.classList.add("modal-overlay-show");
});

closeMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupMap.classList.contains("modal-show")) {
      popupMap.classList.remove("modal-show");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupMap.classList.remove("modal-show");
  overlay.classList.remove("modal-overlay-show");
})

//MODAL WRITE US

linkWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.add("modal-show");
  overlay.classList.add("modal-overlay-show");

  if (storage) {
    userName.value = storage;
    email.focus();
  } else {
    userName.focus();
  }
});

closeWriteUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("modal-show");
  popupWriteUs.classList.remove("modal-error");
  overlay.classList.remove("modal-overlay-show");
});

form.addEventListener("submit", function (evt) {
  if (!userName.value || !email.value || !letter.value) {
    evt.preventDefault();
    popupWriteUs.classList.remove("modal-error");
    popupWriteUs.offsetWidth = popupWriteUs.offsetWidth;
    popupWriteUs.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupWriteUs.classList.contains("modal-show")) {
      popupWriteUs.classList.remove("modal-show");
      popupWriteUs.classList.remove("modal-error");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWriteUs.classList.remove("modal-show");
  popupWriteUs.classList.remove("modal-error");
  overlay.classList.remove("modal-overlay-show");
})
