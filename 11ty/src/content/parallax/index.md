---
layout: 'single.njk'
title: 'Parallax'
permalink: 'parallax/index.html'
tags: 'single'
---

[npm parlx.js](https://www.npmjs.com/package/parlx.js)

``` text

npm i parlx.js

```

``` HTML

<section class="parallax">
	<div class="parallax__img parlx-children"></div>
	<div class="parallax__content">
		<h2>Parallax</h2>
	</div>
</section>

```

#### parallax.js

``` JS

const Parlx = require('parlx.js')

$(function () {

	let elems = document.querySelectorAll('.parallax')

	let parlx = Parlx.init({
		elements: elems,
		settings: {
			height: '400px',
			direction: 'vertical',
			speed: 0.6,
		}
	})

})


```

#### _parallax.scss

``` SCSS

.parallax {
	height: 400px;
	position: relative;
	overflow: hidden;
	z-index: 3;
	display: flex;
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(#323232, 0.9);
		z-index: 2;
	}
	&__img {
		position: absolute;
		left: 0;
		top: -30vh;
		width: 100%;
		min-width: 100%!important;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center 80%;
	}
	&__content {
		position: absolute;
		z-index: 3;
		left: 0;
		top: 0;
		color: #fff;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
}

.no-webp .parallax .parlx-children {
	background-image: url(../img/parallax/parallax_bg.jpg);
}
.webp .parallax .parlx-children {
	background-image: url(../img/parallax/parallax_bg.webp);
}


```

### Responsive

``` SCSS

.parallax {
	@include media-sm {
		height: auto!important;
	}
	&__img {
		@include media-sm {
			top: 0;
			height: 100%!important;
			transform: translate(0, 0)!important;
		}
	}
	&__content {
		@include media-sm {
			position: relative;
			padding: 60px 0;
		}
	}
}

```
