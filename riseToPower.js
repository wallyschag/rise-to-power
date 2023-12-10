// Hide stuff on window load
window.onload = () => {
  $('#statement').hide();
  $('#people-choice').hide();
  $('#government-choice').hide();
}

// Initialize Game variables
const statements = [
  'The government has recently created a new national anthem that stands by the governments ideals, but is widely disliked by the people.',
  'The government wants to '
];
const results = [
  ['The people are happy that you have listened to them and have decided to stick with the old national anthem. The government is unhappy with your decision.', 'The government is happy that you selected their new anthem. The people are unhappy with your decision.'],
];
const buttonText = [
  ['Stick with the old national anthem in favor of the people', 'Make the new national anthem the official anthem of the country']
];
var peopleScore = 50;
var governmentScore = 50;

$('#start-button').on('click', () => {
  $('#start-button').hide();
  $('#statement').show();
  $('#people-choice').show();
  $('#government-choice').show();
})

$('#people-button').on('click', () => {
  peopleScore += 10;
  governmentScore -= 5;
  $('#people-score').text(peopleScore);
  $('#government-score').text(governmentScore);
  $('#result-text').text(results[i][1]);
})

$('#government-button').on('click', () => {
  governmentScore += 10;
  peopleScore -= 5;
  $('#people-score').text(peopleScore);
  $('#government-score').text(governmentScore);
  $('#result-text').text(results[i][2]);
})

// Main game loop
for(let i = 0; i < statements.length; i++) {
  if(peopleScore <= 0){
    $('#statement').hide();
    $('#people-choice').hide();
    $('#government-choice').hide();
    $('result-text').text('You have lost the game. You have been IMPEACHED by the PEOPLE.');
  }

  if(governmentScore <= 0){
    $('#statement').hide();
    $('#people-choice').hide();
    $('#government-choice').hide();
    $('result-text').text('You have lost the game. You have been ASSASSINATED by the GOVERNMENT.');
  }

  if(peopleScore >= 100 || governmentScore >= 100){
    $('#statement').hide();
    $('#people-choice').hide();
    $('#government-choice').hide();
    $('result-text').text('You have won the game. You have been elected PRESIDENT.');
  }

  $('#statement').text(statements[i]);
  $('#people-button').text(buttonText[i][1]);
  $('#government-button').text(buttonText[i][2]);
  i++;


}

