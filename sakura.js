$(document).ready(function() {

// Array of Words: Number, Word, Link
const word = [
  [0, "食べ歩き", "たべあるき", "Eat and Walk", "https://clips.twitch.tv/embed?clip=BlithePuzzledPidgeonBudStar"],
  [1, "君かわいいね", "きみかわいいね", "You are so cute!", "https://clips.twitch.tv/embed?clip=ExpensiveSuperGarbageFeelsBadMan"],
  [2, "君かわうぃぃね", "きみかわうぃぃね", "You are so cute! + (For Players)", "https://clips.twitch.tv/embed?clip=ObeseElatedNightingaleKippa"],
  [3, "私", "わたし", "I (Standard)", "https://clips.twitch.tv/embed?clip=BlithePuzzledPidgeonBudStar"],
  [4, "俺", "おれ", "I (used by M, manly)", "https://clips.twitch.tv/embed?clip=BlithePuzzledPidgeonBudStar"],
  [5, "僕", "ぼく", "I (used by M, cute)", "https://clips.twitch.tv/embed?clip=BlithePuzzledPidgeonBudStar"]
];

// Show the User the requested Clip and list explanations
function showDetails() {
  let result = $('#showbox');
  result.children().remove();
  console.log(i);
  result.append('<div class="twitch">Word: <strong>' + word[i][1] + '</strong></div>');
  result.append('<div class="twitch">Hiragana: <strong>' + word[i][2] + '</strong></div>');
  result.append('<div class="twitch">Meaning: <strong>' + word[i][3] + '</strong></div>');
  result.append('<div class="twitch" id="3"><iframe src="' + word[i][4] + '" frameborder="0" allowfullscreen="true" height="378" width="100%"></iframe></div>') + '</div>';
}

let isOpen = false;

// Call showDetails on click
$('.getshowbox').on('click', function(event){
  i = $(this).attr('id');
  console.log(i + 'here');

  showDetails();
})
  
// End of the Script
});





