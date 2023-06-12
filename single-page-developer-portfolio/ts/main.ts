const form: HTMLFormElement = document.forms[0];

form.onsubmit = (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  console.log(data);
};
