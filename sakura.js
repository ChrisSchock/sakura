$(document).ready(function() {

// Array of Words: Number, Word, Link
const word = [
  [0, "食べ歩き", "たべあるき", "Eat and Walk", "https://clips.twitch.tv/embed?clip=BlithePuzzledPidgeonBudStar"],
  [1, "kanji", "hirgana", "meaning", "link"]
];

// Show the User the requested Clip and list explanations
function showDetails() {
  let result = $('#showbox');
  result.children().remove();
  let i = $(this).attr('id');
  console.log(i);
  result.append('<div class="twitch">Word: <strong>' + word[i][1] + '</strong></div>');
  result.append('<div class="twitch">Hiragana: <strong>' + word[i][2] + '</strong></div>');
  result.append('<div class="twitch">Meaning: <strong>' + word[i][3] + '</strong></div>');
  result.append('<div class="twitch"><iframe src="' + word[i][4] + '" frameborder="0" allowfullscreen="true" height="378" width="100%"></iframe></div>') + '</div>';
}

let isOpen = false;

// Call showDetails on click
$('.getshowbox').on('click', function(event){
  event.preventDefault();
  showDetails();
})
  
// End of the Script
});