---
layout: 'single.njk'
title: 'Scroll Drugging'
permalink: 'scroll_drugging/index.html'
tags: 'single'
---

``` JS

  	// Scroll Drugging

	if($('.scroller').length){
		const scroller = document.querySelector('.scroller')
		const scrollerWrapper = $(this).find('.scroller__wrapper')
		let mouseDown = false
		let startX, offset, offsetRight
		const contentBlock = $(this).find('.scroller__content')

		let wrapperWidth = scrollerWrapper.width()
		let listWidth = contentBlock.width()
		console.log('listWidth: '+listWidth);
		console.log('wrapperWidth: '+wrapperWidth);
		console.log('scroller: ' + $('.scroller').width());
		if(listWidth <= wrapperWidth){
			scrollerWrapper.width($('.scroller').width())
		}
		$(window).on('resize', function(){
			wrapperWidth = scrollerWrapper.width()
			listWidth = contentBlock.width()
			console.log('listWidth: '+listWidth);
			console.log('wrapperWidth: '+wrapperWidth);
			console.log('scroller: ' + $('.scroller').width());
			if(listWidth <= wrapperWidth){
				scrollerWrapper.width($('.scroller').width())
			}
		})

		let startDragging = function (e) {
			mouseDown = true
			startX = e.changedTouches[0].pageX - scroller.offsetLeft
			offset = $(this).find('.scroller__wrapper').offset().left - scroller.offsetLeft
			offsetRight = scroller.offsetWidth - scrollerWrapper.width()
		}
		let stopDragging = function (e) {
			mouseDown = false
		}

		scroller.addEventListener('touchmove', e => {
			e.preventDefault()
			if (!mouseDown) {
				return
			}
			if ($(window).width() < scrollerWrapper.width()) {
				const x = e.changedTouches[0].pageX - scroller.offsetLeft
				const scroll = x - startX
				let scrollMove = offset + scroll
				scrollMove > 0 ? (scrollMove = 0) : (scrollMove = scrollMove)
				scrollMove < offsetRight ? (scrollMove = offsetRight) : (scrollMove = scrollMove)
				scrollerWrapper.css({ transform: `translateX(${scrollMove}px)` })
			}
		})

		$(window).on('resize', function () {
			$('.scroller__wrapper').css({ transform: 'translateX(0)' })
		})

		// Add the event listeners
		scroller.addEventListener('touchstart', startDragging, false)
		scroller.addEventListener('touchend', stopDragging, false)
		//scroller.addEventListener('mousedown', startDragging, false);
		//scroller.addEventListener('mouseup', stopDragging, false);
		//scroller.addEventListener('mouseleave', stopDragging, false);
	}

```
