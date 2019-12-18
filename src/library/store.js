export const store = {
  state: {
    loginsuccess: true
  },
  changeloginsuccess() {
    this.state.loginsuccess = !this.state.loginsuccess
  }
};