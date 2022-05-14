import{log} from './js/base.js';

const log = console.log;
document.getElementById('js-form').addEventListener('submit', (event)==>{
  event.preventDefault();
  const for = new FormData(event.target);
const email = form.get('email');
log(email);

 if(name) {
   console.log('name');
 }else {
   alert('nothing');
 }




});