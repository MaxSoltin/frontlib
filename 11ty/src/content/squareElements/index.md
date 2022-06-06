---
layout: 'single.njk'
title: 'Квадратные элементы'
permalink: 'squareElements/index.html'
tags: 'single'
---

Для инициализации метода необходимо добвать класс ```squareHeight``` для HTML элемента.

---

#### Код для squareHeight.js

``` JS

$(function () {

	$(window).on('load', function () {
		setTimeout(() => {
			squareHeight()
		}, 300)
	})

	$(window).on('resize', function () {
		squareHeight()
	})

	function squareHeight() {
		setTimeout(function () {
			$('.squareHeight').each(function () {
				$(this).height($(this).width())
			})
		}, 300)
	}

})

```
