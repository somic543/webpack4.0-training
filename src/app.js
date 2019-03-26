import './css/app.css';
import './scss/style.scss';
import './js/cart.js';

var People = {
    name : "Hung",
    age : 18,
    job : 'Web developer',
    getInfo: function () {
        return this.name + ' - ' + this.age + ' - ' + this.job;
    }
};

Object.defineProperty(People, "x", {
  get() {
    return this.stored_x;
  },
  set(x) {
    this.stored_x = x;
  }
});
 
module.exports = People; 
  