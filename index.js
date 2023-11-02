import inquirer from "inquirer";
import colors from "colors";

const optionsplay = [
  { name: "Piedra", value: 1 },
  { name: "Papel", value: 2 },
  { name: "Tijeras", value: 3 },
];

const randomSelection = () => {
  const valueMath = Math.floor(Math.random() * 3 + 1);
  const valueResult = optionsplay.find((option) => option.value == valueMath);
  return valueResult.name;
};

const getResult = (resp, autoResp) => {
  if (resp === autoResp) {
    return console.log("Empataste!");
  }

  const combinacionesGanadoras = {
    Piedra: "Tijeras",
    Papel: "Piedra",
    Tijeras: "Papel",
  };

  if (combinacionesGanadoras[resp] === autoResp) {
    return console.log(colors.green("Ganaste!"));
  } else {
    return console.log(colors.red("Perdiste!"));
  }
};

console.log(colors.bgCyan("Bienvenido a piedra papel o tijera!"));

inquirer
  .prompt([
    {
      type: "list",
      name: "options",
      message: "Elija una opción",
      choices: ["Piedra", "Papel", "Tijeras", new inquirer.Separator()],
    },
  ])
  .then((answers) => {
    let computerSelection = randomSelection();
    console.log(`Mi elección ${answers.options}`);
    console.log(`Elección de la computadora ${computerSelection}`);
    getResult(answers.options, computerSelection);
  });
