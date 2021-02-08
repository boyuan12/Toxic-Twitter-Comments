const axios = require("axios");

console.log("🔥 Hello from Extension Starter Kit! 🔥");

var target = document.getElementById("target-text");

axios
    .post("http://191919e76ee8.ngrok.io/predict", [
        {
            comment_text: target?.textContent,
        },
    ])
    .then(function (response) {
        if (response.data.length > 0 && target != null) {
            target.textContent = "[censored by ToxicComments]";
        }
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
