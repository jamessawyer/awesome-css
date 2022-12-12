---
title: 响应式布局
---

## 教程

1. [Beyond Media Queries: Using Newer HTML & CSS Features for Responsive Designs - @css-tricks.com ](https://css-tricks.com/beyond-media-queries-using-newer-html-css-features-for-responsive-designs/)介绍媒体查询之外的几种响应式布局方式

   - 响应式图片，使用 `<picture> + <source media="(max-width:1000px)" srcset="picture-lg.png">` 元素进行媒体查询

   - [🛠️ Responsive Images Generator](https://responsivebreakpoints.com/) 可使用这个自动生成媒体查询图片

   - 响应式图片根据dpi进行设置， `<img srcset="flower3x 3x, flower2x 2x" />`

   - 图片使用 [object-fit](https://css-tricks.com/almanac/properties/o/object-fit/) 和 [object-position](https://css-tricks.com/almanac/properties/o/object-position/) 适配，以及图片位置调整

   - ⚡`min()` & `max()` & `clamp()` CSS工具方法

   - `px, em, rem, %, vw, vh` 单位的灵活使用

     

