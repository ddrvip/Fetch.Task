


var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("name");

console.log(c);
if (c == true);

else (c== false);
{


}

let userList = [];
const callAPIWithFetch = () => {
  fetch("https://api.github.com/users")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        var btn = document.createElement("button");

        btn.onclick = function () {

          window.open("fetch321.html?" + "name="+data[i].login, "_blank");
        };
        document.body.appendChild(btn);
        var text = document.createTextNode(data[i].login);
        btn.appendChild(text);
        var element = document.getElementById("list");
        // tag.setAttribute = alert(data[i].login)
        element.appendChild(btn);

      }

      userList = data;
    });
};


