---
layout: 'single.njk'
title: 'Fancybox'
permalink: 'fancybox/index.html'
tags: 'single'
---

``` HTML

<a href="img/1.jpg" data-fancybox="gallery">
	<picture>
		<source data-srcset="img/1.webp" type="image/webp">
		<source data-srcset="img/1.jpg">
		<img data-src="img/1.jpg" alt="fancybox"
				 class="lazyload" loading="lazy">
	</picture>
</a>

```

``` JS

require('~/src/libs/fancybox/jquery.fancybox.js');

$(function () {
	$('[data-fancybox]').fancybox({
		loop: true,
		buttons: ['close'],
		animationEffect: 'zoom',
		transitionEffect: 'slide',
		transitionDuration: 366,
		clickSlide: 'close',
		clickContent: function (current, event) {
			return current.type === 'image' ? 'next' : false
		},
		wheel: false,
	})
})

```

``` SCSS

@import 'src/libs/fancybox/jquery.fancybox';

```

### Дефолтный курсор

``` SCSS

.fancybox-can-pan .fancybox-content, .fancybox-can-swipe .fancybox-content{
	cursor: default;
}

```
