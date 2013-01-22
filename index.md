---
layout: page
title: @lndgrn
tagline: ../people|things|software|code/
---
{% include JB/setup %}

<div id="home">
  <h1>Blog Posts</h1>
  <ul class="posts">
    {% for post in site.posts limit: 15 %}
      <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>

<div id="info_section">
	<div class="section_title">Info</div>
		<ul class="items">
			<li><span class="bullet">Info:</span> <a href="/about.html">About</a></li>
			<li><span class="bullet">Info:</span> <a href="/writing.html">Curriculum Vitae</a> <span class="bullet">[PDF]</span></li>
			<li><span class="bullet">Info:</span> <a href="/portfolio.html">Blogroll</a></li>
			<li><span class="bullet">Info:</span> <a href="/media/txt/cv.pdf">Curriculum Vitae</a> <span class="bullet">[PDF]</span></li>
			</ul>
</div>
