//Task 1 - Base Structure Setup

const riskDashboard = document.getElementById("riskDashboard");//select container
console.log("Risk Dashboard Loaded"); //print to console

//Task 2 - Adding Risk Items Dynamically

function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");
    
    const nameElement = document.createElement("h3");
    nameElement.textContent = `Risk: ${riskName}`;
    
    const levelElement = document.createElement("p");
    levelElement.textContent = `Level: ${riskLevel}`;

    const departmentElement = document.createElement("p");
    departmentElement.textContent = `Department: ${department}`;

    riskCard.appendChild(nameElement);
    riskCard.appendChild(levelElement);
    riskCard.appendChild(departmentElement);

    riskDashboard.appendChild(riskCard);
}
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
