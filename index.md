---
title: Gallery
layout: index
pagination:
  data: model_list
  size: 2
---

<ol>
{%- for item in pagination.items %}
  <li>{{ item.title }}</li>
{% endfor -%}
</ol>
