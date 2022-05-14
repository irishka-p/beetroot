const toggleError = (id, error) => {
  const el = document.getElementById(id);
  error 
  ? el.classList.add("error") 
  : el.classList.remove("error");
};
// !!!!!!!!!!!!!!!!!! не працює через 4 строку
const registration = (e) => {
  e.preventDefault();

  const form = new FormData(e.target);
  // form.get('firstName');
  // console.log(form.get('firstName'));

  // ще більше скоротили код

  const firstName = form.get("firstName");
  // скорочуємо код  generate id
  const generateId = (name) => `js-registration-form-${name}`;

  // check first name
  toggleError(generateId("first - name"), !firstName);

  const lastName = form.get("lastName");
  // check last name
  toggleError(generateId("last - name"), !lastName);

  //  розширений код
  // toggleError("js-registration-form-first-name", !firstName);
  // toggleError("js-registration-form-last-name", !lastName);

  // троxи скоротили і додаючи спочатку функцію toggle Error
  //  if (firstName) {
  //   toggleError('js-registration-form-first-name', false);
  //   } else {
  //     toggleError('js-registration-form-first-name', true);
  //   }

  // розширений функціонал
  // if (firstName) {
  //   document
  //     .getElementById('js-registration-form-first-name')
  //     .classList.remove('error');
  // } else {
  //   document
  //     .getElementById('js-registration-form-first-name')
  //     .classList.add('error')
  // }
};
const some = 100;

export { registration };
