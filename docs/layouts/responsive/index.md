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

2. [🚀The Guide To Responsive Design In 2023 and Beyond - @ishadeed.com](https://ishadeed.com/article/responsive-design/#responsive-design-in-2023-and-beyond)

   - 如何使用更现代的CSS工具和方法去完成响应式布局，尽可能少的使用媒体查询的方式
   - 响应式所包含的内容
     - 响应内容
     - 响应视窗
     - 响应容器
     - 响应用户偏好，比如暗黑模式等
   - 流式响应式布局的需要考虑的点
     - Container Query
     - Wrapping，比如 `flex-wrap`
     - Element Sizing
     - Font Sizes
     - Spacing
   - flexbox, grid, `clamp()` & `min()` & `max()`的使用

3. [min(), max(), and clamp() CSS Functions - @ishadeed.com](https://ishadeed.com/article/css-min-max-clamp/)

   - 介绍3个工具函数的含义，以及实际应用场景实例🌰
   - `min(30%, 100px)`: 不超过 `100px`
   - `max(30%, 100px)`: 不小于 `100px`
   - `clamp(12px, 5vw, 24px)`: 限定于 `12px - 20px` 之间，偏好值是 `5vw`
   - 这3个工具函数对于新式响应式布局很重要

   

   



2023年04月12日15:27:43

