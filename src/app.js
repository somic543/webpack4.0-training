import './scss/style.scss';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
 

$(document).ready(function () {
    var loader = require('./js/loader.js');   
    loader.animation().then(() => {    
        require('./js/navigation').animation();       
    });
});