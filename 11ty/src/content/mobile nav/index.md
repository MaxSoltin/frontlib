---
layout: 'single.njk'
title: 'Mobile Navigation'
permalink: 'mobile-nav/index.html'
tags: 'single'
---

``` html

<button class="burger openMobileNav">
	<svg width="30" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M0 0h30v1.158H0zM0 10.421h30v1.158H0zM0 20.842h30V22H0z"/></svg>
</button>


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
						<a href="#!" class="mobileNav__link">Link 1</a>
					</li>
					<li class="mobileNav__item">
						<a href="#!" class="mobileNav__link">Link 2</a>
					</li>
					<li class="mobileNav__item">
						<a href="#!" class="mobileNav__link">Link 3</a>
					</li>
				</ul>
			</div>
			<div class="mobileNav__footer">
				footer
			</div>
		</div>
	</div>
</nav>

```

``` SCSS

 .mobileNav {
	position: fixed;
	top: -99999px;
	left: 0;
	z-index: 99999;
	width: 100%;
	height: 100%;
	&__overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		opacity: 0;
		transition: opacity 0.2s;
		backdrop-filter: blur(4px);
	}
	&__wrapper {
		width: 320px;
		height: 100%;
		position: absolute;
		top: 0;
		left: -100%; // or right
		z-index: 3;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		transition: all 0.4s ease-in-out;
		background-color: #fff;
		box-shadow: 0px 4px 40px rgba(50, 50, 50, 0.2);
		@include media(375) {
			width: 300px;
		}
	}
	&-active &__wrapper{
		left: 0; // or right
	}
	&-active &__overlay{
		opacity: 1;
	}
	&__close{
		background-color: transparent;
		padding: 0;
		border: none;
	}
	&__header{
		flex: 0 1 auto;
		padding: 20px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
		position: relative;
		z-index: 2;
	}
	&__footer{
		flex: 0 1 auto;
		padding: 20px;
	}
	&__container{
		flex: 1 1 auto;
	}
	&__item{
		padding: 0;
		border-bottom: 1px solid #EAE8E7;
	}
	&__link{
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		color: $textcolor;
		padding: 14px 20px;
		background-color: transparent;
		border: none;
	}
}


```

``` JS

$(function () {

	function menuOpen(){
		$('body').css({overflow: 'hidden'})
		$('.mobileNav').css({'top': '0'})
		$('.mobileNav').addClass('mobileNav-active')
	}

	function menuClose(){
		$('body').css({overflow: 'auto'})
		$('.mobileNav').removeClass('mobileNav-active')
		setTimeout(function(){$('.mobileNav').css({top: '-99999px'})}, 300)

		$('.mobileNav__subListWrapper').fadeOut(300)
		setTimeout(function () {
			$('.mobileNav__subListWrapper .mobileNav__subList').html('')
		}, 300)
	}

	$(document).on('click', '.openMobileNav', function (e) {
		e.preventDefault()
		menuOpen()
	})

	$(document).on('click', '.closeMobileNav', function (e) {
		e.preventDefault()
		menuClose()
	})

	$('.mobileNav__overlay').on('click', function (e) {
		if ($(e.target).hasClass('mobileNav__overlay')) {
			menuClose()
		}
	})

	$('.mobileNav__link-btn').on('click', function (e) {
		e.preventDefault()
		console.log();
		$('.mobileNav__back span').text($(this).text().trim())
		$(this).siblings('.mobileNav__subList').find('.mobileNav__item').clone().appendTo('.mobileNav__subList-open')
		$('.mobileNav__subListWrapper').fadeIn(300)
	})

	$('.mobileNav__back').on('click', function (e) {
		e.preventDefault()
		$('.mobileNav__subListWrapper').fadeOut(300)
		setTimeout(function () {
			$('.mobileNav__subListWrapper .mobileNav__subList').html('')
		}, 300)
	})

})

```
