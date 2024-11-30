class depot {
  #depotAmount;
  #depotDate;
  #depotTime;

  constructor(depotAmount) {
    this.#depotAmount = depotAmount;
    this.#depotDate = new Date().toLocaleDateString;
    this.#depotTime = new Date().toLocaleTimeString;
  }
  get depotAmount() {
    return this.#depotAmount;
  }
  get depotDate() {
    return this.#depotDate;
  }
  get depotTime() {
    return this.#depotTime;
  }
  set depotAmount(depotAmount) {
    this.#depotAmount = depotAmount;
  }
  set depotDate(depotDate) {
    this.#depotDate = depotDate;
  }
  set depotTime(depotTime) {
    this.#depotTime = depotTime;
  }
}

export { depot };
