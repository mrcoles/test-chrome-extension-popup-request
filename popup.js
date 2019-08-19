const btnElt = document.getElementById("btn");
const infoElt = document.getElementById("has-perms");
const resultElt = document.getElementById("btn-result");

const perms = { permissions: ["downloads"] };

chrome.permissions.contains(perms, result => {
  const err = chrome.runtime.lastError;
  console.log("chrome.permissions.contains result:", result, err);
  infoElt.textContent = result ? "YES" : "NO";
});

btnElt.addEventListener(
  "click",
  evt => {
    console.log("chrome.permissions.request making request...");
    chrome.permissions.request(perms, result => {
      const err = chrome.runtime.lastError;
      console.log("chrome.permissions.request result:", result, err);
      resultElt.textContent = result ? "YES" : "NO";
    });
  },
  false
);
