---
layout: 'single.njk'
title: 'Mobile Navigation'
permalink: 'mobile-nav/index.html'
tags: 'single'
---

``` html

<nav class="mobileNav">
	<div class="mobileNav__overlay">
		<div class="mobileNav__wrapper">
			<div class="mobileNav__header">
				<div>
					<button class="menuButton closeMobileNav" aria-label="Закрыть меню нвигации" title="Закрыть меню нвигации">X</button>
				</div>
			</div>
			<div class="mobileNav__container">
				<ul class="mobileNav__list">
					<li class="mobileNav__item">
						<a href="#!" class="mobileNav__link">Главная</a>
					</li>
					<li class="mobileNav__item">
						<a href="#!" class="mobileNav__link">Блог</a>
					</li>
					<li class="mobileNav__item">
						<a href="#!" class="mobileNav__link">Контакты</a>
					</li>
				</ul>
			</div>
			<div class="mobileNav__footer">
				
			</div>
		</div>
	</div>
</nav>

```

``` SCSS

.indexNav {
	position: fixed;
	top: -99999px;
	right: 0;
	width: 100%;
	height: 100%;
	display: flex;
	z-index: 999;
	color: #333;
	&__header {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid $borderColor;
		flex: 0 1 auto;
	}
	&__container {
		padding: 30px 50px;
		flex: 1 1 auto;
		@include media-sm {
			padding: 20px;
		}
	}
	&__overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(#000, 0.95);
		backdrop-filter: blur(8px);
		opacity: 0;
	}
	&__wrapper {
		width: 480px;
		background-color: #fff;
		height: 100%;
		position: absolute;
		right: -480px;
		top: 0;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		@include media-sm {
			width: 300px;
			right: -300px;
		}
	}
	&__list {
		text-align: right;
	}
	&__link {
		display: inline-block;
		color: #fff;
		font-family: $mainFont, sans-serif;
		font-size: 24px;
		line-height: 1;
		text-align: center;
		text-decoration: none;
		padding: 25px 0;
		overflow: hidden;
		position: relative;
		@include media-sm {
			padding: 15px 0;
			font-size: 18px;
		}
		&:hover {
			color: $accent;
		}
		&:focus {
			box-shadow: none;
			color: $accent;
		}
	}
	&__footer {
		justify-self: flex-end;
	}
	
}

```

``` JavaScript



```
