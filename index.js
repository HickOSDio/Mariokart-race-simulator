class Player {
  constructor(name, speed, maneuverability, power) {
    this.NAME = name;
    this.SPEED = speed;
    this.MANEUVERABILITY = maneuverability;
    this.POWER = power;
    this.POINTS = 0;
  }

  applyPowerUp(powerUp) {
    switch (powerUp.type) {
      case PowerUpTypes.BOOST_SPEED:
        this.SPEED += powerUp.effect;
        break;
      case PowerUpTypes.BOOST_MANEUVERABILITY:
        this.MANEUVERABILITY += powerUp.effect;
        break;
      case PowerUpTypes.BOOST_POWER:
        this.POWER += powerUp.effect;
        break;
      case PowerUpTypes.EXTRA_ROLL:
        this.EXTRA_ROLL = true;
        break;
    }
  }

  resetPowerUpEffects() {
    this.SPEED = this.baseSpeed;
    this.MANEUVERABILITY = this.baseManeuverability;
    this.POWER = this.basePower;
    this.EXTRA_ROLL = false;
  }
}

class PowerUp {
  constructor(type, effect) {
    this.type = type;
    this.effect = effect;
  }
}

const PowerUpTypes = {
  BOOST_SPEED: "BOOST_SPEED",
  BOOST_MANEUVERABILITY: "BOOST_MANEUVERABILITY",
  BOOST_POWER: "BOOST_POWER",
  EXTRA_ROLL: "EXTRA_ROLL",
};

const BlockTypes = {
  STRAIGHT: "STRAIGHT",
  CURVE: "CURVE",
  CONFRONTATION: "CONFRONTATION",
};

const powerUps = [
  new PowerUp(PowerUpTypes.BOOST_SPEED, 2),
  new PowerUp(PowerUpTypes.BOOST_MANEUVERABILITY, 2),
  new PowerUp(PowerUpTypes.BOOST_POWER, 2),
  new PowerUp(PowerUpTypes.EXTRA_ROLL, 1),
];

const player1 = new Player("Mario", 4, 3, 3);
const player2 = new Player("Luigi", 3, 4, 4);

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function getRandomBlock() {
  const random = Math.random();
  if (random < 0.33) return BlockTypes.STRAIGHT;
  if (random < 0.66) return BlockTypes.CURVE;
  return BlockTypes.CONFRONTATION;
}

function getRandomPowerUp() {
  return powerUps[Math.floor(Math.random() * powerUps.length)];
}

function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolled a dice of ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRound(player1, player2) {
  const block = getRandomBlock();
  console.log(`Block: ${block}`);

  player1.applyPowerUp(getRandomPowerUp());
  player2.applyPowerUp(getRandomPowerUp());

  const diceResult1 = rollDice() + (player1.EXTRA_ROLL ? rollDice() : 0);
  const diceResult2 = rollDice() + (player2.EXTRA_ROLL ? rollDice() : 0);

  let totalTestSkill1 = 0;
  let totalTestSkill2 = 0;

  if (block === BlockTypes.STRAIGHT) {
    totalTestSkill1 = diceResult1 + player1.SPEED;
    totalTestSkill2 = diceResult2 + player2.SPEED;
    logRollResult(player1.NAME, "speed", diceResult1, player1.SPEED);
    logRollResult(player2.NAME, "speed", diceResult2, player2.SPEED);
  }

  if (block === BlockTypes.CURVE) {
    totalTestSkill1 = diceResult1 + player1.MANEUVERABILITY;
    totalTestSkill2 = diceResult2 + player2.MANEUVERABILITY;
    logRollResult(player1.NAME, "maneuverability", diceResult1, player1.MANEUVERABILITY);
    logRollResult(player2.NAME, "maneuverability", diceResult2, player2.MANEUVERABILITY);
  }

  if (block === BlockTypes.CONFRONTATION) {
    const powerResult1 = diceResult1 + player1.POWER;
    const powerResult2 = diceResult2 + player2.POWER;

    console.log(`${player1.NAME} confronted ${player2.NAME}! 🥊`);
    logRollResult(player1.NAME, "power", diceResult1, player1.POWER);
    logRollResult(player2.NAME, "power", diceResult2, player2.POWER);

    if (powerResult1 > powerResult2 && player2.POINTS > 0) {
      console.log(`${player1.NAME} won the confrontation! ${player2.NAME} lost 1 point 🐢`);
      player2.POINTS--;
    } else if (powerResult2 > powerResult1 && player1.POINTS > 0) {
      console.log(`${player2.NAME} won the confrontation! ${player1.NAME} lost 1 point 🐢`);
      player1.POINTS--;
    } else {
      console.log("Confrontation tied! No points were lost");
    }
  }

  if (totalTestSkill1 > totalTestSkill2) {
    console.log(`${player1.NAME} scored a point!`);
    player1.POINTS++;
  } else if (totalTestSkill2 > totalTestSkill1) {
    console.log(`${player2.NAME} scored a point!`);
    player2.POINTS++;
  }

  console.log("-----------------------------");

  player1.resetPowerUpEffects();
  player2.resetPowerUpEffects();
}

async function playRace(player1, player2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Round ${round}`);
    await playRound(player1, player2);
  }
}

function declareWinner(player1, player2) {
  console.log("Final result:");
  console.log(`${player1.NAME}: ${player1.POINTS} point(s)`);
  console.log(`${player2.NAME}: ${player2.POINTS} point(s)`);

  if (player1.POINTS > player2.POINTS)
    console.log(`\n${player1.NAME} won the race! Congratulations! 🏆`);
  else if (player2.POINTS > player1.POINTS)
    console.log(`\n${player2.NAME} won the race! Congratulations! 🏆`);
  else console.log("The race ended in a tie");
}

(async function main() {
  console.log(`🏁🚨 Race between ${player1.NAME} and ${player2.NAME} starting...\n`);
  await playRace(player1, player2);
  declareWinner(player1, player2);
})();
