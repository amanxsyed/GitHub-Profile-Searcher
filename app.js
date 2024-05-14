
// all selectors
const user_img = document.querySelector(".user-img");
const userName = document.querySelector(".user-name h2");
const user_Name = document.querySelector(".user-name h3");
const followers = document.querySelector(".followers span");
const following = document.querySelector(".following span");
const repo_details = document.querySelector(".repo-details");
const searchBtn = document.querySelector(".btn");
const visitBtn = document.querySelector(".visit-user a");

searchBtn.addEventListener("click", function () {
    inputFunction();
});

// if user press enter it should be submit
document.querySelector(".input-user").
    addEventListener("keyup", function (e) {
        if (e.keyCode === 13) {
            // alert("You press a enter button");
            inputFunction();
        }
    });
    