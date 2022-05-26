---
layout: 'single.njk'
title: 'Tabs'
permalink: 'tabs/index.html'
tags: 'single'
---

``` HTML

<div class="tabs">
	<div class="tabs__nav">
		<label class="tabs__label">
			<input type="radio" name="tabs" value="1" class="tabs__input" checked>
			<h4 class="tabs__title">Tab 1</h4>
		</label>
		<label class="tabs__label">
			<input type="radio" name="tabs" value="2" class="tabs__input">
			<h4  class="tabs__title">Tab 2</h4>
		</label>
		<label class="tabs__label">
			<input type="radio" name="tabs" value="3" class="tabs__input">
			<h4 class="tabs__title">Tab 3</h4>
		</label>
		<label class="tabs__label">
			<input type="radio" name="tabs" value="4" class="tabs__input">
			<h4 class="tabs__title">Tab 4</h4>
		</label>
	</div>
	<div class="tabs__wrapper">
		<div class="tabs__content" id="tabs__content-1">Tab 1</div>
		<div class="tabs__content" id="tabs__content-2">Tab 2</div>
		<div class="tabs__content" id="tabs__content-3">Tab 3</div>
		<div class="tabs__content" id="tabs__content-4">Tab 4</div>
	</div>
</div>

```

``` SCSS

.tabs{
	&__input{
		@extend %visuallyHidden;
	}
	&__title{
		display: inline-block;
		padding: 10px 20px;
	}
	&__input:checked + &__title{
		color: $accent;
	}
	&__input:focus:checked + &__title {
		box-shadow: 0 0 0 2px rgba(255, 123, 0, 0.5);
		outline: none;
	}
	&__nav{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	&__label{
		cursor: pointer;
		&:not(:last-child){
			margin-right: 100px;
		}
	}
	&__content{
		display: none;
		opacity: 0;
		animation: fadeIn .6s forwards;
	}
}

@keyframes fadeIn {
	0% {opacity:0;}
	100% {opacity:1;}
}

#tabs__content-1{
	display: block;
}


```

``` JS

$(function () {

	$('.tabs__input').on('change', function () {
		$('.tabs__content').fadeOut(0)
		$('#tabs__content-' + $(this).val()).stop().fadeIn(0)
	 })

})


```
