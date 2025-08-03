import React from "react";

const IndianPlayers = () => {
  const fullTeam = ["Sachin1", "Dhoni2", "Virat3", "Rohit4", "Yuvaraj5", "Raina6"];

  const [p1, p2, p3, p4, p5, p6] = fullTeam;

  const T20 = ["First Player", "Second Player", "Third Player"];
  const Ranji = ["Fourth Player", "Fifth Player", "Sixth Player"];
  const combinedPlayers = T20.concat(Ranji); 

  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        <li>First : {p1}</li>
        <li>Third : {p3}</li>
        <li>Fifth : {p5}</li>
      </ul>

      <h2>Even Players</h2>
      <ul>
        <li>Second : {p2}</li>
        <li>Fourth : {p4}</li>
        <li>Sixth : {p6}</li>
      </ul>

      <h2>List of Indian Players Merged:</h2>
      <ul>
        {combinedPlayers.map((player, i) => (
          <li key={i}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
