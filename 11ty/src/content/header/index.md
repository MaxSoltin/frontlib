---
layout: 'single.njk'
title: 'Header'
permalink: 'hedaer/index.html'
tags: 'single'
---

### Hedaer Nav

``` HTML

<header class="header">
	<div class="header__wrapper">
			<div class="header__left">Logo</div>
			<div class="header__center">
				<nav class="nav nav-hedaer">
					<ul class="nav__list nav__list-header">
						<li class="nav__item nav__item-header">
							<a href="/" class="nav__link nav__link-header">Главная</a>
						</li>
						<li class="nav__item nav__item-header">
							<a href="#!" class="nav__link nav__link-header">Блог</a>
						</li>
						<li class="nav__item nav__item-header">
							<a href="#!" class="nav__link nav__link-header">Контакты</a>
						</li>
					</ul>
				</nav>
			</div>
			<div class="header__right">
				<button class="mobileBurger mobileBurger-header"></button>
			</div>
	</div>
</header>

```

### Fixed Header

``` JavaScript

$(function () {

$(function () {
	let headerHeight = $('.header').height()
	let scrollTopBefore = 0

	window.addEventListener('scroll', () => {
		let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop

		scrollTop > 0 && scrollTop > headerHeight ? $('.header').addClass('header-scroll') : $('.header').removeClass('header-scroll')

		//paste code from bottom

		if (scrollTop > 500) {
			if (scrollTopBefore > scrollTop) {
				$('.header').css({ top: 0, opacity: 1, position: 'fixed' })
			} else {
				$('.header').css({ top: -headerHeight, opacity: 0 })
			}
		} else {
			$('.header').css({ top: 0, opacity: 1, position: 'absolute' })
		}

		scrollTopBefore = scrollTop
	})
})


```

``` SCSS

.header{
	z-index: 100;
  transition: all .2s;
	&-scroll{
		width: 100%;	
		position: fixed;
		top: 0;
	}
}


```
