const params = new URLSearchParams(window.location.search)
let username = params.get("name");
console.log(username);

async function userProfile() {
    let response = await fetch("https://api.github.com/users/" + username);
    let data = await response.json();
    return data;
};

userProfile().then(function (userData) {

    var list = document.getElementById('list');
    var text = document.createTextNode(userData.name);
    list.appendChild(text)
});
