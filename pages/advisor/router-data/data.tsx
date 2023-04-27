import router from "next/router";

export const EmailClass = {
  globalEmail: "",
  setEmail(globalEmail: string) {
    this.globalEmail = globalEmail;
  },
  getEmail() {
    return this.globalEmail;
  },
};

// export var getVarname = localStorage.getItem("");
// export var setVarname = localStorage.setItem(value)
// export const { GlobalEmail } = router.query;
