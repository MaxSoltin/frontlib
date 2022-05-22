import $ from 'jquery'; window.jQuery = $; window.$ = $;
require('~/src/libs/modernizr/modernizr.js');
require('~/src/libs/lazysizes/lazysizes.js');

//import magnificpopup from 'magnific-popup';
import hljs from 'highlight.js';

//require('~/src/libs/maskedinput/jquery.maskedinput.min.js');
//require('~/src/libs/fancybox/jquery.fancybox.js');


document.querySelectorAll('.code pre code').forEach((el) => {
	hljs.highlightElement(el);
});
