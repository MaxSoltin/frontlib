---
layout: 'single.njk'
title: 'Swiper'
permalink: 'swiper/index.html'
tags: 'single'
---

[Swiper API](https://swiperjs.com/swiper-api)


## Базовая разметка

```HTML

<div class="swiper" id="simpleSlider">
	<div class="swiper-wrapper">
		<div class="swiper-slide simpleSlider__slide">Slide 1</div>
		<div class="swiper-slide simpleSlider__slide">Slide 2</div>
		<div class="swiper-slide simpleSlider__slide">Slide 3</div>
	</div>
</div>

```

#### Подключение JS

```JS

import { Swiper, Mousewheel, Navigation, Pagination, , A11y } from 'swiper'
Swiper.use([Mousewheel, Navigation, Pagination, A11y])

```

#### Инициализация JS

```JS

$(function () {
	const accessibilitySwiper = {
		firstSlideMessage: 'Это первый слайд',
		lastSlideMessage: 'Это последний слайд',
		prevSlideMessage: 'Предыдущий слайд',
		nextSlideMessage: 'Следующий слайд',
		paginationBulletMessage: 'Перейти к слайду номер {{index}}',
	}

	const simpleSlider = new Swiper('.simpleSlider', {
		speed: 2400,
		a11y: accessibilitySwiper,
	})
})

```

#### Подключение "swiper-bundle" в "\_libs.scss"

```SCSS

@import 'node_modules/swiper/swiper-bundle';

```

---

<br/>

## Навигация

```HTML

<div class="simpleSlider__arrows">
	<button class="simpleSlider__arrow simpleSlider__arrow-prev">
		prev
	</button>
	<button class="simpleSlider__arrow simpleSlider__arrow-next">
		next
	</button>
</div>

```

```JS

navigation: {
	nextEl: '.simpleSlider__arrow-next',
	prevEl: '.simpleSlider__arrow-prev',
},


```

<br/>

## Пагинация

```HTML

<ul class="simpleSlider__pagination"></ul>

```

```JS

pagination: {
	el: '.simpleSlider__pagination',
	renderBullet: function (index, className) {
		return `<li class="simpleSlider__bullet ${className}" aria-label="Перейти к ${index + 1} слайду"></li>`
	},
	clickable: true
},

```

```SCSS

.swiper-pagination-bullet-active{
	// Кастомные стили для активного элемента пагинации
}

```

### Progress Pagination

```JS



```

<br/>

## Responsive

```JS

breakpoints: {
	320: {
		slidesPerView: 2,
		spaceBetween: 20
	},
	480: {
		slidesPerView: 3,
		spaceBetween: 30
	},
	640: {
		slidesPerView: 4,
		spaceBetween: 40
	}
},

```

<br/>

## Autoplay

<br/>

#### Подключение JS

```JS

import { Autoplay } from 'swiper'
Swiper.use([Autoplay])

```

#### Инициализация JS

```JS

autoplay: {
	delay: 5000,
},

```

### Start/Stop autoplay

```JS



```

### Start autoplay after scroll

```JS



```

<br/>

## Fade Effect

<br/>

#### Подключение JS

```JS

import { EffectFade } from 'swiper'
Swiper.use([EffectFade])

```

#### Инициализация JS

```JS

effect: 'fade',
fadeEffect: {
	crossFade: true
},

```

<br/>

## Parallax

<br/>

[Swiper API - Parallax](https://swiperjs.com/swiper-api#parallax)

```HTML

<div class="swiper" id="simpleSlider">
	<div class="swiper-wrapper">
		<div class="swiper-slide simpleSlider__slide" data-swiper-parallax="30%">
			<div class="parallaxWrapper">Slide 1</div>
		</div>
		<div class="swiper-slide simpleSlider__slide" data-swiper-parallax="30%">
			<div class="parallaxWrapper">Slide 2</div>
		</div>
		<div class="swiper-slide simpleSlider__slide" data-swiper-parallax="30%">
			<div class="parallaxWrapper">Slide 3</div>
		</div>
	</div>
</div>

```

#### Подключение JS

```JS

import { Parallax } from 'swiper'
Swiper.use([Parallax])

```

#### Инициализация JS

```JS

parallax: true,

```

#### Стилизация

```SCSS

.simpleSlider{
	&__slide{
		overflow: hidden;
	}
}

```

<br/>

## Thumbs

<br/>

[Swiper API - Thumbs](https://swiperjs.com/swiper-api#thumbs)

``` HTML

```

``` JS

```

<br/>

## Двойной слайдер

```HTML

<div class="slider swiper">
	<div class="slider-text">
		<div class="swiper-wrapper">
			<div class="swiper-slide slider__slide-text">Slide 1</div>
			<div class="swiper-slide slider__slide-text">Slide 2</div>
			<div class="swiper-slide slider__slide-text">Slide 3</div>
		</div>
	</div>
	<div class="slider-image">
		<div class="swiper-wrapper">
			<div class="swiper-slide mainSlider__slide-img">
				<img src="http://placehold.it/1920x1080" class="slider__iamge" alt="Slide 1">
			</div>
			<div class="swiper-slide mainSlider__slide-img">
				<img src="http://placehold.it/1920x1080" class="slider__iamge" alt="Slide 2">
			</div>
			<div class="swiper-slide mainSlider__slide-img">
				<img src="http://placehold.it/1920x1080" class="slider__iamge" alt="Slide 3">
			</div>
		</div>
	</div>
</div>

```

#### Подключение JS

```JS

import { Controller } from 'swiper'
Swiper.use([Controller])

```

#### Инициализация JS

```JS

doubleSliderText.controller.control = doubleSliderIMG;
doubleSliderIMG.controller.control = doubleSliderText;

```

---

<br/>

## Параметры Swiper

<br/>

| Параметр      | Значение | Описание                         |
| ------------- | -------- | -------------------------------- |
| loop          | true     | Залупливание слайдера            |
| slidesPerView | 1        | Колличество отображаемых слайдов |
| spaceBetween  | 30       | Отступ между слайдами            |
