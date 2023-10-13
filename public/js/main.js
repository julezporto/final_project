// Create money & resource variables
let money = 0;
let food = 0;
let exercise = 0;
let sleep = 0;

// Initialize money & resource table + set variables to those of current user
async function initializeMoneyResourceTable() {
  try {
    // Get the current user's data
    const response = await fetch("/getUserData");
    if (!response.ok) {
      console.error("Failed to load user data. Status: ", response.status);
      return;
    }

    // Parse the response to get user data
    const userData = await response.json();
    if (!userData) {
      console.error("User data is missing or invalid.");
      return;
    }

    // Display user's data in the money & resource table
    const moneyCol = document.getElementById("money-val");
    moneyCol.innerText = userData[0].money;

    const foodCol = document.getElementById("food-val");
    foodCol.innerText = userData[0].food;

    const exerciseCol = document.getElementById("exercise-val");
    exerciseCol.innerText = userData[0].exercise;

    const sleepCol = document.getElementById("sleep-val");
    sleepCol.innerText = userData[0].sleep;

    // Set variables to the current user's values
    money = userData[0].money;
    food = userData[0].food;
    exercise = userData[0].exercise;
    sleep = userData[0].sleep;
  } catch (error) {
    console.error("Error:", error);
  }
}

// Record money value
async function recordMoney(moneyValue) {
  try {
    // Send current money value to the server to be recorded to the database
    const response = await fetch("/updateMoney", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ money: moneyValue }), // Send the current money value
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// Record food value
async function recordFood(foodValue) {
  try {
    // Send current food value to the server to be recorded to the database
    const response = await fetch("/updateFood", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ food: foodValue }), // Send the current food value
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// Record exercise value
async function recordExercise(exerciseValue) {
  try {
    // Send current exercise value to the server to be recorded to the database
    const response = await fetch("/updateExercise", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ exercise: exerciseValue }), // Send the current exercise value
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// Record sleep value
async function recordSleep(sleepValue) {
  try {
    // Send current sleep value to the server to be recorded to the database
    const response = await fetch("/updateSleep", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sleep: sleepValue }), // Send the current sleep value
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// Increment money value
const addMoney = () => {
  // Increment the money value by 1
  money += 1;

  // Update the money value display
  const moneyCol = document.getElementById("money-val");
  moneyCol.innerText = money;

  // Send the current money value to the server to be recorded to the database
  recordMoney(money);
};

// Increment food value & decrement money
const addFood = () => {
  // Check to see if user has enough money to buy food
  if (money >= 10) {
    // Increment the food value by 1 & decrement the money value by 10
    food += 1;
    money -= 10;

    // Update the food value display
    const foodCol = document.getElementById("food-val");
    foodCol.innerText = food;

    // Send the current food value to the server to be recorded to the database
    recordFood(food);

    // Update the money value display
    const moneyCol = document.getElementById("money-val");
    moneyCol.innerText = money;

    // Send the current money value to the server to be recorded to the database
    recordMoney(money);
  } else {
    window.alert("You do not have enough money to buy food.");
  }
};

// Increment exercise value & decrement money
const addExercise = () => {
  // Check to see if user has enough money to buy exercise
  if (money >= 15) {
    // Increment the exercise value by 1 & decrement the money value by 15
    exercise += 1;
    money -= 15;

    // Update the exercise value display
    const exerciseCol = document.getElementById("exercise-val");
    exerciseCol.innerText = exercise;

    // Send the current exercise value to the server to be recorded to the database
    recordExercise(exercise);

    // Update the money value display
    const moneyCol = document.getElementById("money-val");
    moneyCol.innerText = money;

    // Send the current money value to the server to be recorded to the database
    recordMoney(money);
  } else {
    window.alert("You do not have enough money to buy exercise.");
  }
};

// Increment sleep value & decrement money
const addSleep = () => {
  // Check to see if user has enough money to buy sleep
  if (money >= 5) {
    // Increment the sleep value by 1 & decrement the money value by 5
    sleep += 1;
    money -= 5;

    // Update the sleep value display
    const sleepCol = document.getElementById("sleep-val");
    sleepCol.innerText = sleep;

    // Send the current sleep value to the server to be recorded to the database
    recordSleep(sleep);

    // Update the money value display
    const moneyCol = document.getElementById("money-val");
    moneyCol.innerText = money;

    // Send the current money value to the server to be recorded to the database
    recordMoney(money);
  } else {
    window.alert("You do not have enough money to buy sleep.");
  }
};

// Buy a new critter
const submit = async function (event) {
  event.preventDefault();
  // Check to see if user has enough money to buy critter
  if (money >= 50) {
    // Get the user input for critter name and type
    const name = document.querySelector("#critter-name");
    const type = document.querySelector("#critter-type");

    // Set the critter lifepoints to 100
    const lifepoints = 100;

    // Decrease user money value for buying critter
    money -= 50;

    // Update the money value display
    const moneyCol = document.getElementById("money-val");
    moneyCol.innerText = money;

    // Send the current money value to the server to be recorded to the database
    recordMoney(money);

    // Validation error messages
    if (name.value === "") {
      window.alert("Please fill out critter name");
      return;
    } else if (type.value === "") {
      window.alert("Please fill out critter type");
      return;
    }

    //Create json object with user input
    const json = {
      name: name.value,
      type: type.value,
      lifepoints: lifepoints,
    };
    const body = JSON.stringify(json);

    // Send the new critter to the server to be recorded to the database
    const newCritter = await fetch("/addCritter", {
      method: "POST",
      body,
      headers: { "Content-Type": "application/json" },
    });
    let data = await newCritter.json();
    console.log("add: " + JSON.stringify(data));
    // Display the new critter to the table
    showCritter(data);

    // Alert user that they have bought a new critter
    window.alert("Congratulations on your new Critter!");
  } else {
    // Alert user that they do not have enough money to buy a new critter
    window.alert("You do not have enough money to buy a critter.");
  }

  // Clear buy critter form
  let frm = document.querySelector("#buy-critter-form");
  frm.reset();
  return false;
};

// Display a single critter
const showCritter = function (data) {
  // Select critter table
  let resultsTable = document.querySelector("#resultsTable");
  resultsTable.innerHTML =
    "<tr><th>Critter Name</th><th>Type</th><th>Life Points</th><th>Feed</th><th>Exercise</th><th>Sleep</th></tr>";

  // Display critter values in the table
  data.forEach((item) => {
    formatTable(item, resultsTable);
  });
};

// Format table to display single critter
const formatTable = function (critter, resultsTable) {
  // Create new row in table
  const row = resultsTable.insertRow();

  // Create row cells with appropriate values: critter name, critter type, critter lifepoints
  const cellName = row.insertCell();
  cellName.innerHTML = critter.name;

  const cellType = row.insertCell();
  cellType.innerHTML = critter.type;

  const cellLifePoints = row.insertCell();
  cellLifePoints.innerHTML = critter.lifepoints;

  // Create buttons to increase lifepoints: feed, exercise, sleep
  row.innerHTML +=
    "<td>" +
    `<button id="feedButton" onclick="feedCritter(\'${critter.name}\')">Feed (+3)</button>` +
    "</td>";

  row.innerHTML +=
    "<td>" +
    `<button id="exerciseButton" onclick="exerciseCritter(\'${critter.name}\')">Exercise (+5)</button>` +
    "</td>";

  row.innerHTML +=
    "<td>" +
    `<button id="sleepButton" onclick="sleepCritter(\'${critter.name}\')">Sleep (+1)</button>` +
    "</td>";
};

// Feed critter to increase lifepoints
const feedCritter = async function (name) {
  // Get name of current critter
  const critterName = {
    name: name,
  };
  
  // Send critter name to server to get current lifepoints
  let body = JSON.stringify(critterName);
  const lifepoint = await fetch("/getLifePoints", {
    method: "POST",
    body,
    headers: { "Content-Type": "application/json" },
  });
  
  // Set value of lifepoints from server response
  const lp = await lifepoint.json();
  
  // If lifepoints aren't 0 (AKA if critter is still alive)
  if (lp > 0) {
    // If user has food to feed critters
    if (food > 0) {
      // Decreate food value by 1
      food -= 1;
      
      // Send new food and lifepoint values to server to be recorded to the database
      const updatedItem = await fetch("/feedCritter", {
        method: "POST",
        body,
        headers: { "Content-Type": "application/json" },
      });
      const data = await updatedItem.json();
      
      // Update the food value display
      const foodCol = document.getElementById("food-val");
      foodCol.innerText = food;
      
      // Update critter value table entry display
      showCritter(data);
      
    } else {
      // Alert user that they do not have enough food to feed their critter
      window.alert(
        "You do not have enough food resources to feed your critter."
      );
    }
  } else {
    // Alert user that their critter is dead
    window.alert("This critter is dead so you can no longer feed it - RIP");
  }
};

// Exercise critter to increase lifepoints
const exerciseCritter = async function (name) {
  // Get name of current critter
  const newData = {
    name: name,
  };
  
  // Send critter name to server to get current lifepoints
  let body = JSON.stringify(newData);
  const lifepoint = await fetch("/getLifePoints", {
    method: "POST",
    body,
    headers: { "Content-Type": "application/json" },
  });
  
  // Set value of lifepoints from server response
  const lp = await lifepoint.json();
  
  // If lifepoints aren't 0 (AKA if critter is still alive)
  if (lp > 0) {
    // If user has exercise to exercise critters
    if (exercise > 0) {
      // Decreate exercise value by 1
      exercise -= 1;
      
      // Send new exercise and lifepoint values to server to be recorded to the database
      const updatedItem = await fetch("/exerciseCritter", {
        method: "POST",
        body,
        headers: { "Content-Type": "application/json" },
      });
      const data = await updatedItem.json();
      
      // Update the exercise value display
      const exerciseCol = document.getElementById("exercise-val");
      exerciseCol.innerText = exercise;
      
      // Update critter value table entry display
      showCritter(data);
      
    } else {
      // Alert user that they do not have enough exercise to exercise their critter
      window.alert(
        "You do not have enough exercise resources to exercise your critter."
      );
    }
  } else {
    // Alert user that their critter is dead
    window.alert("This critter is dead so you can no longer exercise it - RIP");
  }
};

// Sleep critter to increase lifepoints
const sleepCritter = async function (name) {
  // Get name of current critter
  const newData = {
    name: name,
  };
  
  // Send critter name to server to get current lifepoints
  let body = JSON.stringify(newData);
  const lifepoint = await fetch("/getLifePoints", {
    method: "POST",
    body,
    headers: { "Content-Type": "application/json" },
  });
  
  // Set value of lifepoints from server response
  const lp = await lifepoint.json();
  
  // If lifepoints aren't 0 (AKA if critter is still alive)
  if (lp > 0) {
    // If user has sleep to sleep critters
    if (sleep > 0) {
      // Decreate sleep value by 1
      sleep -= 1;
      
      // Send new sleep and lifepoint values to server to be recorded to the database
      const updatedItem = await fetch("/sleepCritter", {
        method: "POST",
        body,
        headers: { "Content-Type": "application/json" },
      });
      const data = await updatedItem.json();
      
      // Update the sleep value display
      const sleepCol = document.getElementById("sleep-val");
      sleepCol.innerText = sleep;
      
      // Update critter value table entry display
      showCritter(data);
      
    } else {
      // Alert user that they do not have enough sleep to sleep their critter
      window.alert(
        "You do not have enough sleep resources to rest your critter."
      );
    }
  } else {
    // Alert user that their critter is dead
    window.alert("This critter is dead so you can no longer sleep it - RIP");
  }
};

// Display critters for killCritters
const showCritterArray = function (data) {
  // Select critter table
  let resultsTable = document.querySelector("#resultsTable");
  resultsTable.innerHTML =
    "<tr><th>Critter Name</th><th>Type</th><th>Life Points</th><th>Feed</th><th>Exercise</th><th>Sleep</th></tr>";

  // Check if data is an array
  if (Array.isArray(data)) {
    // Display each critter's values in the table
    data.forEach((item) => {
      formatTable(item, resultsTable);
    });
  }
};

// Decrement lifepoints of all critters
const killCritters = async () => {
  // Fetch all user's critters
  const critters = await fetch("/data").then((response) => response.json());

  // Update critter display
  showCritterArray(critters);

  // Loop through critters and decrement life points
  for (const critter of critters) {
    // If critter is still alive
    if (critter.lifepoints > 0) {
      // Decrease critter's lifepoints by 1
      const updatedLifePoints = critter.lifepoints - 1;

      // Send critter name and updated lifepoints to server to update current lifepoints
      const updatedItem = await fetch("/updateLifePoints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: critter.name,
          lifepoints: updatedLifePoints,
        }),
      });
      const data = await updatedItem.json();
      
      // Update the specific row for the critter
      updateTableRow(data);
    } else {
      // Could put something to delete critter or change row color to red to signal dead critter or something
    }
  }
};

// Update table row for a specific critter
const updateTableRow = function (data) {
  // Select critter table
  let resultsTable = document.querySelector("#resultsTable");

  // Find the row for the critter by its name
  const rows = resultsTable.getElementsByTagName("tr");
  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].getElementsByTagName("td");
    if (cells[0].innerHTML === data.name) {
      // Update the lifepoints value
      cells[2].innerHTML = data.lifepoints;
      break;
    }
  }
};

// Initialize the game page
window.onload = function () {
  // Initialize the money resource table with user data
  initializeMoneyResourceTable();

  // Initialize set interval function to start decreasing critter lifepoints
  setInterval(killCritters, 5000);

  // Initialize the money button
  const moneyButton = document.getElementById("money-button");
  moneyButton.onclick = addMoney;

  // Initialize the food button
  const foodButton = document.getElementById("buy-food-button");
  foodButton.onclick = addFood;

  // Initialize the exercise button
  const exerciseButton = document.getElementById("buy-exercise-button");
  exerciseButton.onclick = addExercise;

  // Initialize the sleep button
  const sleepButton = document.getElementById("buy-sleep-button");
  sleepButton.onclick = addSleep;

  // Initialize the buy critter button
  const addCritter = document.querySelector("#buy-critter-button");
  addCritter.onclick = submit;

  // Initialize critter table for current user
  fetch("/data", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => {
      showCritter(json);
    });
};
