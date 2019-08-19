function checkWebRequest() {
  console.log("chrome.webRequest", chrome.webRequest);
}

checkWebRequest();

chrome.runtime.onMessage.addListener(function(data, sender, reply) {
  console.log(`onMessage`, data); //REMM
  if (!data || typeof data !== "object" || data.for !== "background") {
    return;
  }

  switch (data.action) {
    case "webRequest": {
      checkWebRequest();
      reply("got it!"); //REMM
      return;
    }
    default: {
      return;
    }
  }
});
