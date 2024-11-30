import { retrait } from "./Retrait.js";
import { depot } from "./Depot.js";
import { account } from "./Solde.js";
const myAccount = createAccount();
document.getElementById("result").innerHTML = myAccount.solde + " €";

document.getElementById("formAdd").addEventListener("submit", (e) => {
  e.preventDefault();
  if (document.getElementById("add").value === "") {
    return alert("Veuillez entrer un montant de dépôt.");
  } else {
    const depotData = getDepotData();
    const myDepot = createDepot();
    myDepot.depotAmount = depotData.depotAmount;
    myAccount.solde += parseInt(depotData.depotAmount);
    myAccount.historiqueOperations.push(
      `Dépôt de ${depotData.depotAmount}€ fait le ${depotData.depotDate} à ${depotData.depotTime}`
    );
    document.getElementById("result").innerHTML = myAccount.solde + " €";
  }
});
document.getElementById("formRemove").addEventListener("submit", (e) => {
  e.preventDefault();
  if (document.getElementById("remove").value === "") {
    return alert("Veuillez entrer un montant de retrait.");
  } else if (parseInt(document.getElementById("remove").value) > myAccount.solde) {
    return alert("Solde insuffisant.");
  } else {
    const retraitData = getRetraitData();
    const myRetrait = createRetrait();
    myRetrait.retraitAmount = retraitData.retraitAmount;
    myAccount.solde -= parseInt(retraitData.retraitAmount);
    myAccount.historiqueOperations.push(
      `Retrait de ${retraitData.retraitAmount}€ fait le ${retraitData.retraitDate} à ${retraitData.retraitTime}`
    );
    document.getElementById("result").innerHTML = myAccount.solde + " €";
  }
});

function createDepot() {
  const myDepot = new depot();
  return myDepot;
}
function createRetrait() {
  const myRetrait = new retrait();
  return myRetrait;
}
function createAccount() {
  const myAccount = new account();
  return myAccount;
}

function getDepotData() {
  return {
    depotAmount: document.getElementById("add").value,
    depotDate: new Date().toLocaleDateString(),
    depotTime: new Date().toLocaleTimeString(),
  };
}
function getRetraitData() {
  return {
    retraitAmount: document.getElementById("remove").value,
    retraitDate: new Date().toLocaleDateString(),
    retraitTime: new Date().toLocaleTimeString(),
  };
}
