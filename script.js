let name = prompt("What is your name?")
let friendly = parseInt(prompt("How friendly are you? On a scale of 1-10"));
let fly = parseInt(prompt("How good are you at flying? On a scale of 1-10"));
let game = parseInt(prompt("How good are you at Dejarik? On a scale of 1-10"));
let empire = parseInt(prompt("How rebellious are you of the Galactic Empire? On a scale of 1-10"));
let applicants = [];

class particpants {
  constructor() {
    let newApplicant = new participants(participants.name, particpants.friendly, particpants.fly, particpants.game, particpants.empire);
    applicants.push(newAppicant);
    console.log(applicants);
    this.name = name;
    this.score = `${friendly + fly + empire}`;  
  }
  score (score) {
    let newApplicant = new particpant (score.score);
    applicants.push(applicants);
  } 
}

if (game >= 8) {
  let score = friendly + fly + empire;
  console.log(score);
  participants.score(name, score);
} else {

}







