---
layout: 'single.njk'
title: 'FullPage Scroll'
permalink: 'fullpage/index.html'
tags: 'single'
---

[Документация fullPage.js на GitHub](https://github.com/alvarotrigo/fullPage.js/tree/master/lang/russian#fullpagejs)

<br/>

#### Установка из **npm** и подключение **fullpage.js** из **node_modules** _(Нужна лицензия)_

```text

npm install fullpage.js

```

``` JS

import fullpage from 'fullpage.js';

new fullpage('#fullpage', {
	//options here
	scrollingSpeed: 500,
});

```

``` SCSS

@import 'node_modules/fullpage/dist/fullpage';

```
---

#### Подключение и инициализация локального **fullpage.js** из папки **libs**

``` JS

require('~/src/libs/fullpage/jquery.fullpage.js')

$(function () {
	$('#fullpage').fullpage({
		//options here
		scrollingSpeed: 500,
	})
})

```
#### Подключение _libs.scss_

``` SCSS

@import 'src/libs/fullpage/jquery.fullpage';

```

#### Разметка HTML

``` HTML

<main class="mainContent" id="fullpage">
	<section class="section">Section 1</section>
	<section class="section">Section 2</section>
	<section class="section">Section 3</section>
	<section class="section">Section 4</section>
</main>

```
