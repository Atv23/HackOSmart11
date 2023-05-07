let upvoteCount = 0;
let downvoteCount = 0;

document.getElementById("upvote-button").addEventListener("click", function() {
  upvoteCount++;
  document.getElementById("upvote-count").textContent = upvoteCount;
});

document.getElementById("downvote-button").addEventListener("click", function() {
  downvoteCount++;
  document.getElementById("downvote-count").textContent = downvoteCount;
});
