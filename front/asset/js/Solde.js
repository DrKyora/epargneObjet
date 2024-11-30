class account {
  #solde;
  #historiqueOperations;
  #tauxInteret;
  constructor() {
    this.#solde = 1000;
    this.#historiqueOperations = [];
    this.#tauxInteret = 0.03;
  }
  get solde() {
    return this.#solde;
  }
  get tauxInteret() {
    return this.#tauxInteret;
  }
  get historiqueOperations() {
    return this.#historiqueOperations;
  }
  set solde(solde) {
    this.#solde = solde;
  }
  set tauxInteret(tauxInteret) {
    this.#tauxInteret = tauxInteret;
  }
  set historiqueOperations(historiqueOperations) {
    this.#historiqueOperations = historiqueOperations;
  }
}
export { account };
