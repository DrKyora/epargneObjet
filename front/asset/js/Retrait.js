class retrait {
  #retraitAmount;
  #retraitDate;
  #retraitTime;

  constructor(retraitAmount) {
    this.#retraitAmount = this.retraitAmount;
    this.#retraitDate = new Date().toLocaleDateString();
    this.#retraitTime = new Date().toLocaleTimeString();
  }
  get retraitAmount() {
    return this.#retraitAmount;
  }
  get retraitDate() {
    return this.#retraitDate;
  }
  get retraitTime() {
    return this.#retraitTime;
  }
  set retraitAmount(retraitAmount) {
    this.#retraitAmount = retraitAmount;
  }
  set retraitDate(retraitDate) {
    this.#retraitDate = retraitDate;
  }
  set retraitTime(retraitTime) {
    this.#retraitTime = retraitTime;
  }
}
export { retrait };
