
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
    var user_name = '';

// when ser writer user name in the text box
function inputFunction() {
    // trim method will replace before and after white space of given value
    let input_user = document.querySelector(".input-user").value.trim();

    if (input_user.length <= 0) {
        alert("Please enter github user name");
        document.querySelector(".input-user").value = "";
        document.querySelector(".input-user").focus();
        return false;
    } else {
        user_name = input_user.split("").join("");
        // if everything is ok run fetch user function

        // this function is not made yet
        fetchUser();

        // clear the put box and focused is for next
        document.querySelector(".input-user").value = "";
        // document.querySelector(".input_user").focus();
    }
};
// fetching user from github api
function fetchUser() {

    fetch(`https://api.github.com/users/${user_name}`)
        .then(response => response.json())
        .then(function (data) {
            // console.log(data);
            if (data.message === "Not Found") {
                alert("User not found, Please enter correct user name");
                return false;
            } else {
                user_img.innerHTML = `<img src="${data.avatar_url}">`;
                userName.innerHTML = data.name;
                user_Name.innerHTML = data.login;
                followers.innerHTML = data.followers;
                following.innerHTML = data.following;


                const link = data.html_url;

                visitBtn.setAttribute("href", link);

            }
        });
        
    }