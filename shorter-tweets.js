// ==UserScript==
// @name Shorter Tweets
// @description Shorten tweets
// @author Dmitry Akentyev
// @version 0.1
// @match https://twitter.com/*
// @run-at document-idle
// @namespace togusa.shortentweets
// ==/UserScript==


(function() {
  'use strict';
  const limit = 140;
  function shorten() {
    let tweets = document.getElementsByClassName('tweet-text');
    for (let tweet of tweets) {
      if(tweet.classList.contains('TweetTextSize--jumbo')) continue;
      let text = tweet.textContent;
      if (text.length > limit) {
        text = text.slice(0, limit-3) + '...';
        tweet.textContent = text;
      }
    }
  }
  setInterval(shorten, 300);
})();
