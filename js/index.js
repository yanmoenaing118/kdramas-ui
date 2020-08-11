const submitBtnSignup = document.getElementById("submitBtn-signup");
const submitBtnLogin = document.getElementById("submitBtn-login");
const saveBtnData = document.getElementById("saveBtnData");
const saveBtnPsw = document.getElementById("saveBtnPsw");
const postCmtBtn = document.querySelector(".btn--comment");

const login = () => {
  document.querySelector("#submitBtn-login").textContent = "Logging in...";
  window.setTimeout(() => {
    document.querySelector("#submitBtn-login").textContent = "Log in";
    window.location.assign("/");
  }, 1500);
};

const signup = () => {
  document.querySelector("#submitBtn-signup").textContent = "Signning up...";
  window.setTimeout(() => {
    document.querySelector("#submitBtn-signup").textContent = "Sign up";
    window.location.assign("/");
  }, 1500);
};

const saveDate = () => {
  window.setTimeout(() => {
    document.getElementById("saveBtnData").textContent = "Save Changes";
  }, 1500);
};

const savePsw = () => {
  window.setTimeout(() => {
    document.getElementById("saveBtnPsw").textContent = "Save Password";
  }, 1500);
};

if (submitBtnLogin) {
  submitBtnLogin.addEventListener("click", (e) => {
    e.preventDefault();
    login();
  });
}

if (submitBtnSignup) {
  submitBtnSignup.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    signup();
  });
}

if (saveBtnData) {
  saveBtnData.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.textContent = "Saving Changes...";
    saveDate();
  });
}

if (saveBtnPsw) {
  saveBtnPsw.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.textContent = "Saving Password...";
    savePsw();
  });
}

if (postCmtBtn) {
  postCmtBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.textContent = "Posting Comment...";
    window.setTimeout(() => {
      document.querySelector(".btn--comment").textContent = "Post comment";
    }, 1500);
  });
}
