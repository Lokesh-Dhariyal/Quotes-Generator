const input = document.querySelector(".quote");
const auth = document.querySelector(".author")
const btn = document.querySelector(".btn");
const url = "https://johndturn-quotableapiproxy.web.val.run/";

let response = () => {
  fetch(url)
    .then((data) => {
        return data.json();
    })
    .then((info) => {
      input.innerText = `" ${info[0].content} "`;
      auth.innerText = `- ${info[0].author}`;
    })
    .catch((error) => {
      input.innerHTML = "There was some error";
      console.log(error);
    });
    
};
btn.addEventListener("click", response);