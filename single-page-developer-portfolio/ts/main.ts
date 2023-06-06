const form: HTMLFormElement = document.forms["sendMessageForm"];

form.onsubmit = (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  console.log(data);
};
