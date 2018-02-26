window.onload = function() {
  currentYear();
};

function currentYear(){
  const date = new Date();
  const autoDate = document.querySelector('#autoDate');
  autoDate.textContent = date.getFullYear();
};

var configProfile = {
  "profile": {"screenName": 'kaspersky'},
  "domId": 'KasperskyTweet',
  "maxTweets": 1,
  "enableLinks": true,
  "showUser": true,
  "showTime": true,
  "showImages": false,
  "lang": 'en'
};
twitterFetcher.fetch(configProfile);

var configProfile = {
  "profile": {"screenName": 'mcafee'},
  "domId": 'McAfeeTweet',
  "maxTweets": 1,
  "enableLinks": true,
  "showUser": true,
  "showTime": true,
  "showImages": false,
  "lang": 'en'
};
twitterFetcher.fetch(configProfile);

var configProfile = {
  "profile": {"screenName": 'intelsecurity'},
  "domId": 'IntelTweet',
  "maxTweets": 1,
  "enableLinks": true,
  "showUser": true,
  "showTime": true,
  "showImages": false,
  "lang": 'en'
};
twitterFetcher.fetch(configProfile);
