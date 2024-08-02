<table>
    <tr>
        <td>
            <img src="./docs/header.gif" alt="Mario Kart" width="200">
        </td>
        <td>
            <b>Objective:</b>
            <p>Mario Kart is a series of racing games developed and published by Nintendo. Our challenge is to create a game logic to simulate Mario Kart races, taking into account the rules and mechanics below.</p>
        </td>
    </tr>
</table>

## Players

<table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Mario</p>
            <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 4</p>
            <p>Maneuverability: 3</p>
            <p>Power: 3</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Peach</p>
            <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 3</p>
            <p>Maneuverability: 4</p>
            <p>Power: 2</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Yoshi</p>
            <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 2</p>
            <p>Maneuverability: 4</p>
            <p>Power: 3</p>
        </td>
    </tr>
    <tr>
        <td style="border: 1px solid black; text-align: center;">
            <p>Bowser</p>
            <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 5</p>
            <p>Maneuverability: 2</p>
            <p>Power: 5</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Luigi</p>
            <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 3</p>
            <p>Maneuverability: 4</p>
            <p>Power: 4</p>
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Donkey Kong</p>
            <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
        </td>
        <td style="border: 1px solid black; text-align: center;">
            <p>Speed: 2</p>
            <p>Maneuverability: 2</p>
            <p>Power: 5</p>
        </td>
    </tr>
</table>

## 🕹️ Rules & Mechanics:

### Players:

- [x] The computer must receive two characters to compete in the race, each in an object.

### Tracks:

- [x] The characters will race on a random track for 5 rounds.
- [x] In each round, a track block will be randomly selected which can be a straight, curve, or confrontation.
  - [x] If the track block is a STRAIGHT, the player must roll a 6-sided die and add the SPEED attribute; the winner gains a point.
  - [x] If the track block is a CURVE, the player must roll a 6-sided die and add the MANEUVERABILITY attribute; the winner gains a point.
  - [x] If the track block is a CONFRONTATION, the player must roll a 6-sided die and add the POWER attribute; the loser loses a point.
  - [x] No player can have a negative score (below 0).

### Power-Ups:

- [x] During the race, players can receive random power-ups that temporarily affect their attributes.
  - [x] `BOOST_SPEED`: Increases the player's speed.
  - [x] `BOOST_MANEUVERABILITY`: Increases the player's maneuverability.
  - [x] `BOOST_POWER`: Increases the player's power.
  - [x] `EXTRA_ROLL`: Allows an extra dice roll.

### Victory Condition:

- [x] In the end, the player with the most points wins.