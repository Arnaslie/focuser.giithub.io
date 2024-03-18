const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/focus.jpg") {
    myImage.setAttribute("src", "images/discipline.jpg");
  } else {
    myImage.setAttribute("src", "images/focus.jpg");
  }
};

myButton = document.querySelector("button");
header = document.querySelector("h1");

function setUser() {
  const user = prompt("Please enter your name sir/ma'am");
  if (!user) {
    setUser();
  } else {
    localStorage.setItem("user", user);
    header.textConent = `${user}, do you smell that? Smells like updog in here..`;
  }
}

if (!localStorage.getItem("user")) {
  setUser();
} else {
  user = localStorage.getItem("user")
  header.textContent = `${user}, do you smell that? Smells like updog in here..`;
} 

myButton.onclick = () => {
  setUser();
};












