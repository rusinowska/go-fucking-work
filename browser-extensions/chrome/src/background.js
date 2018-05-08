var goFuckingWorkURL = "http://rusinowska.github.com/";

var unprodctiveURLs = [
  "9gag.com",
  "xkcd.com",
  "theoatmeal.com",
  "facebook.com",
  "500px.com"
]

chrome.webRequest.onBeforeRequest.addListener(
  function(request) {
    if (new RegExp(unprodctiveURLs.join("|")).test(request.url)) {
      return { redirectUrl : request.url = goFuckingWorkURL };
    }
  },
  {
    urls : ["<all_urls>"]
  },
  ["blocking"]
);
