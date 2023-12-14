// Hide stuff on window load
window.onload = () => {
  $('#statement').hide();
  $('#people-choice').hide();
  $('#government-choice').hide();
  $('#result-text').hide();
  $('#continue-button').hide();
  $('#playagain-button').hide();
  $('#people-score-bar').hide();
  $('#government-score-bar').hide();
  $('#people-score-container').hide(); // Hide the score container initially
  $('#government-score-container').hide();
}

//initialize game variables
let iteration = 0;
let gameStarted = false;

//statements for player choices
const statements = [
  'The government has recently created a new national anthem that stands by the governments ideals, but is widely disliked by the people.',
  'The government wants to increase taxes so the military is better equipped to protect the country. The people enjoy their low taxes and do not want the tax increase.',
  'The nation of Nova Terra has hit an econmic crisis.',
  'Aliens have set up camp on a neighboring planet and are threatening to invade Nova Terra.',
  'Recent econmic expansion of Nova Terra has lead to global warming of the planet.',
  'The education system in Nova Terra is in need of change. How do you address the issue?',
  'The healthcare system is strained, and citizens are divided on the best course of action. What is your approach?',
  'Nova Terra has the opportunity to lead in space exploration. What path do you choose?',
  'Nova Terra faces a growing threat in cyberspace. How do you protect the nation?',
  'A mysterious alien race invites Nova Terra to participate in an intergalactic game show with high stakes. How do you proceed?'
];

//player choices (the text that fills in the decision buttons)
const buttonText = [
  ['Stick with the old national anthem in favor of the people', 'Make the new national anthem the official anthem of the country'],
  ['Keep taxes low.','Increase taxes.'],
  ['Introduce a stimulus package, invest in infrastructure projects, and provide financial assistance to struggling citizens.', 'Implement austerity measures, cut public services, and raise taxes to stabilize the economy.'],
  ['Initiate diplomatic talks, establish cultural exchanges, and promote peaceful coexistence with alien civilizations.','Strengthen military presence near the borders and adopt a defensive stance against potential alien threats.'],
  ['Implement strict environmental policies, invest in sustainable technologies, and promote conservation efforts.','Prioritize economic interests and loosen environmental regulations to spur growth.'],
  ['Increase funding for public schools, hire more teachers, and invest in modernizing educational resources.','Implement cost-cutting measures, prioritize elite education, and encourage private education options.'],
  ['Establish a universal healthcare system, ensuring that every citizen has access to essential medical services, regardless of their financial status.','Privatize healthcare to encourage competition and efficiency, allowing those who can afford it to receive better medical services.'],
  ['Invest heavily in space exploration programs, collaborating with other nations, and positioning Nova Terra as a pioneering force in the cosmos.','Prioritize domestic issues and allocate resources away from space exploration, focusing on improving life on the planet.'],
  ['Promote digital freedoms, invest in advanced cybersecurity measures, and educate the public on safe online practices while respecting privacy.','Increase surveillance, tighten internet regulations, and invest in a powerful cybersecurity force to monitor and control online activities.'],
  ['Embrace the opportunity! Participate in the game show, sending Nova Terras best contestants to compete for the grand prize and potential intergalactic alliances.','Decline the invitation, focusing on more serious matters, and maintain a cautious stance towards unknown extraterrestrial activities.'],
];

//results of player choices
const results = [
  ['The people are happy that you have listened to them and have decided to stick with the old national anthem. The government is unhappy with your decision. +10 People Points. -5 Government Points.', 'The government is happy that you selected their new anthem. The people are unhappy with your decision. +10 Government Points. -5 People Points.'],
  ['The people rejoice in their continued low tax rates. The government is unhappy with your decision. +10 People Points. -5 Government Points.', 'The government is happy that you have increased taxes. The people are unhappy with your decision. +10 Government Points. -5 People Points.'],
  ['The citizens of Nova Terra thank you for your support through the stimulus package. +10 People Points. -5 Government Points.','The government is happy that you have decided to implement austerity measures. The people are unhappy with your decision. +10 Government Points. -5 People Points.'], 
  ['The people praise you for implementing diplomatic relations. But the Aliens destroy a small town on Nova Terra. +10 People Points. -5 Government Points.','The military of Nova Terra gets ready for a war with the neighboring planet. +10 Government Points. -5 People Points.'], 
  ['The environmental policies have made Nova Terra a safer and healthier planet. +10 People Points. -5 Government Points.','The planet is now a wasteland, but the economy is now better than ever! +10 Government Points. -5 People Points.'], 
  ['People may see improvements in education, but the government could face criticism for increased spending and potential mismanagement. +10 People Points. -5 Government Points.','Government might save money, but educational quality may suffer, leading to discontent among the people. +10 Government Points. -5 People Points.'],
  ['People may appreciate the inclusive approach, but the government may struggle with funding and face opposition from private healthcare interests. +10 People Points. -5 Government Points.','Wealthier citizens may benefit, but public dissatisfaction could rise due to limited access for those with lower incomes. +10 Government Points. -5 People Points.'], 
  ['People may feel proud of technological advancements, but the government might face criticism for allocating resources away from immediate needs. +10 People Points. -5 Government Points.','Government reputation may improve domestically, but Nova Terra might miss out on the potential benefits of space exploration. +10 Government Points. -5 People Points.'],
  ['People may appreciate the respect for privacy, but the government might face challenges in preventing cyber threats, potentially harming its reputation. +10 People Points. -5 Government Points.','Government may improve security, but citizens might feel their privacy is violated, leading to a decline in reputation. +10 Government Points. -5 People Points.'],
  ['People may be excited about the adventure, but the government might face criticism for prioritizing entertainment over serious matters. +10 People Points. -5 Government Points.','Government reputation may remain stable, but missed opportunities for alliances and potential rewards from the game show. +10 Government Points. -5 People Points.'],
];

// Game scores
var peopleScore = 50;
var governmentScore = 50;

// On click start button function
$('#start-button').on('click', () => {
  $('#start-button').hide();
  $('#statement').show();
  $('#people-choice').show();
  $('#government-choice').show();
  $('#result').show(); // Show the result div which contains the progress bars
  $('#people-score-bar').show();
  $('#government-score-bar').show();
  $('#people-score-container').show(); // Hide the score container initially
  $('#government-score-container').show();

  updateScores();
  $('#statement').text(statements[iteration]);
  $('#people-button').text(buttonText[iteration][0]);
  $('#government-button').text(buttonText[iteration][1]);
  gameStarted = true;
});

// Function to update score progress bars and text
function updateScores() {
  $('#people-score-bar').val(peopleScore);
  $('#government-score-bar').val(governmentScore);
  $('#people-score').text(peopleScore + '/100');
  $('#government-score').text(governmentScore + '/100');
}
// On click people button function
$('#people-button').on('click', () => {
  peopleScore += 10;
  governmentScore -= 5;
  $('#result-text').text(results[iteration][0]);
  updateScores();
  $('#people-choice').hide();
  $('#government-choice').hide();
  $('#continue-button').show();
  iteration++;
  checkEndGame();
});

// On click government button function
$('#government-button').on('click', () => {
  governmentScore += 10;
  peopleScore -= 5;
  $('#result-text').text(results[iteration][1]);
  updateScores();
  $('#people-choice').hide();
  $('#government-choice').hide();
  $('#continue-button').show();
  iteration++;
  checkEndGame();
});


$('#continue-button').on('click', () => {
  if (iteration < statements.length) {
    $('#statement').text(statements[iteration]);
    $('#people-button').text(buttonText[iteration][0]);
    $('#government-button').text(buttonText[iteration][1]);
    $('#result-text').hide();
    $('#people-choice').show();
    $('#government-choice').show();
    $('#continue-button').hide();
    if  (governmentScore <= 0) {
      $('#people-score-bar').hide();
      $('#government-score-bar').hide();
      $('#people-score-container').hide(); 
      $('#government-score-container').hide();
      $('#result-text').show();
      $('#people-button').hide();
      $('#government-button').hide();
      $('#statement').hide();
      $('#continue-button').hide();
      $('#result-text').text('You have lost your reputation with the government. Although you have made the people of Nova Terra happy, the current government has assassinated you in you sleep. GAME OVER.');
      $('#playagain-button').show();
    }
  
    if  (peopleScore <= 0) {
      $('#people-score-bar').hide();
      $('#government-score-bar').hide();
      $('#people-score-container').hide(); 
      $('#government-score-container').hide();
      $('#result-text').show();
      $('#people-button').hide();
      $('#government-button').hide();
      $('#statement').hide();
      $('#continue-button').hide();
      $('#result-text').text('You have lost your reputation with the people. Although you have made the government of Nova Terra happy, the people have voted to impeach you. GAME OVER.');
      $('#playagain-button').show();
    }
  
    if (iteration >= 9) {
      $('#people-score-bar').hide();
      $('#government-score-bar').hide();
      $('#people-score-container').hide(); 
      $('#government-score-container').hide();
      $('#people-score-bar').hide();
      $('#government-score-bar').hide();
      $('#people-score-container').hide(); 
      $('#government-score-container').hide();
      $('#result-text').show();
      $('#people-button').hide();
      $('#government-button').hide();
      $('#statement').hide();
      $('#continue-button').hide();
      $('#result-text').text('You have run out of time. The people and the government both hate you and your inability to make decisions. GAME OVER.');
      $('#playagain-button').show();
    }
  
    if (peopleScore >= 100 || governmentScore >= 100) {
      $('#people-score-bar').hide();
      $('#government-score-bar').hide();
      $('#people-score-container').hide(); 
      $('#government-score-container').hide();
      $('#result-text').show();
      $('#people-button').hide();
      $('#government-button').hide();
      $('#statement').hide();
      $('#continue-button').hide();
      $('#result-text').text('Congratulations! You have won the game! You have achieved complete political influence over Nova Terra!');
      $('#playagain-button').show();
    }
}});



function updateScores() {
  $('#people-score-bar').val(peopleScore);
  $('#government-score-bar').val(governmentScore);
  $('#people-score').text(peopleScore + '/100');
  $('#government-score').text(governmentScore + '/100');
}

document.getElementById('playagain-button').addEventListener('click', function() {
  location.reload();
});
