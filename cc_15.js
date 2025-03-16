//Task 1 - Base Structure Setup

const riskDashboard = document.getElementById("riskDashboard");//select container
console.log("Risk Dashboard Loaded"); //print to console

//Task 2 - Adding Risk Items Dynamically and Task 3:Removing Risk Items and Task 4: Risk Categorization

function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div");
    riskCard.classList.add("riskCard");

    switch (riskLevel) { //apply background color basec on risk level
        case "High":
            riskCard.style.backgroundColor = "red";
            riskCard.style.color = "white";
            break;
        case "Medium":
            riskCard.style.backgroundColor = "yellow";
            riskCard.style.color = "black";
            break; 
        case "Low":
            riskCard.style.backgroundColor = "green";
            riskCard.style.color = "white";
            break; 
    }


    const nameElement = document.createElement("h3");
    nameElement.textContent = `Risk: ${riskName}`;
    
    const levelElement = document.createElement("p");
    levelElement.textContent = `Level: ${riskLevel}`;

    const departmentElement = document.createElement("p");
    departmentElement.textContent = `Department: ${department}`;

    const resolveButton = document.createElement("button"); //resolvebutton to remove risk card
    resolveButton.textContent = "Resolve";
    resolveButton.addEventListener("click", function () {
        riskDashboard.removeChild(riskCard);
    });

    riskCard.appendChild(nameElement);//append elements to riskCrad
    riskCard.appendChild(levelElement);
    riskCard.appendChild(departmentElement);

    riskDashboard.appendChild(riskCard);//append riskCrard to riskDashboard
}
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
