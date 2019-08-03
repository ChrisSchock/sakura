$(document).ready(function() {

// Array of Words: Number, Word, Link
const word = [
  [0, "食べ歩き", "たべあるき", "Eat and Walk", "https://clips.twitch.tv/embed?clip=BlithePuzzledPidgeonBudStar"],
  [1, "君かわいいね", "きみかわいいね", "You are so cute!", "https://clips.twitch.tv/embed?clip=ExpensiveSuperGarbageFeelsBadMan"],
  [2, "君かわうぃぃね", "きみかわうぃぃね", "You are so cute! (Funny / Playful)", "https://clips.twitch.tv/embed?clip=ObeseElatedNightingaleKippa"],
  [3, "愛してる", "あいしてる", "I love you (heavy)", "https://clips.twitch.tv/embed?clip=GoodMuddySnoodHumbleLife"],
  [4, "大好き", "だいすき", "I love you / I like you a lot!", "https://clips.twitch.tv/embed?clip=ProductiveLitigiousRuffKappa"],
  [5, "ヤバイ", "やばい", "Oh my God! (can be in a good or bad context) terrible / amazing", "https://clips.twitch.tv/embed?clip=ElatedBoldMetalTinyFace"],
  [6, "怖い", "こわい", "scary", "https://clips.twitch.tv/embed?clip=SpotlessFunBoarPeteZaroll"],
  [7, "私", "わたし", "I, me (common)", "https://clips.twitch.tv/embed?clip=DaintyRichFriseeNinjaGrumpy"],
  [8, "俺", "おれ", "I, me (used by males, manly)", "https://clips.twitch.tv/embed?clip=RelentlessCoyFlamingoRedCoat"],
  [9, "僕", "ぼく", "I, me (used by males, cute)", "https://clips.twitch.tv/embed?clip=GorgeousFurryOwlYouWHY"]
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


