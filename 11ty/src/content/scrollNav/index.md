---
layout: 'single.njk'
title: 'Scroll Navigation'
permalink: 'scrollto/index.html'
tags: 'single'
---

#### Пример ссылки на элемент на текущей странице:

``` HTML

<a href="#contacts" class="scrollTo">Контакты</a>

```

#### Пример ссылки на элемент на другой странице:

``` HTML

<a href="index.html#contacts" class="scrollTo">Контакты</a>

```

#### Для элемента нужно задать идетнтификатор, например ```id="contacts"```

``` JS

$(function () {
	$('.scrollTo').on('click', function (e) {
		const pathURL = window.location.pathname
		let to = $(this).attr('href').split('#')

		if (to[0] === '' || '/' + to[0] === pathURL) {
			scrollTo(to[1])
		} else if (to[0] === 'index.html' && pathURL === '/') {
			scrollTo(to[1])
		}

		function scrollTo(id) {
			e.preventDefault()
			if ($(`#${id}`).length) {
				let headerHeigt = 0
				$('.header').length ? (headerHeigt = $('.header').height() + 30) : (headerHeigt = 30)
				$('html, body').animate(
					{
						scrollTop: $(`#${id}`).offset().top - headerHeigt,
					},
					500
				)
			}
		}
	})
})


```

#### **Скролл *наверх* страницы**

Чтобы проскроллить страницу *наверх*, необходимо создать ссылку с атрибутом ```href="toTop"``` и классом ```scrollTo```
А верхнему элементу задать ```id="toTop"```
