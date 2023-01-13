---
title: Grid actions
---

下面列举一些关于Grid实际应用的示例和技巧：

1. [Grid auto-fill vs auto-fit](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/) 都可用于完成类似 `flex-wrap: wrap` 自动换行的功能，它们之间行为存在差异：

   ```css
   .grid-container {
       display: grid;
   }
   
   .grid-container--fill {
       grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
   }
   
   .grid-container--fit {
       grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
   }
   ```

   - `auto-fill`: 填充该row，尽可能的添加更多columns。不在乎是否存在空的columns

   - `auto-fit`: 将你所拥有的任何列放入可用空间中。根据需要将它们展开以适应row大小。空列不能占用任何空间。通过扩展填充的列(如:填充内容/网格项)来更好地利用这些空间，以适应可用的行空间。

     <iframe height="300" style="width: 100%;" scrolling="no" title="auto-fill vs auto-fit" src="https://codepen.io/SaraSoueidan/embed/preview/JrLdBQ?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href="https://codepen.io/SaraSoueidan/pen/JrLdBQ">
       auto-fill vs auto-fit</a> by Sara Soueidan (<a href="https://codepen.io/SaraSoueidan">@SaraSoueidan</a>)
       on <a href="https://codepen.io">CodePen</a>.
     </iframe>

2. [Thinking outside the box with CSS Grid - @frontend-horse](https://frontend.horse/articles/thinking-outside-the-box-with-css-grid/)

   - 利用Grid布局，完成响应式，以及Stagger效果

   - [Responsive CSS Grid Books - @codepen](https://codepen.io/andybarefoot/pen/oNjxYYG)

     <iframe height="300" style="width: 100%;" scrolling="no" title="Responsive CSS Grid - Books" src="https://codepen.io/andybarefoot/embed/preview/oNjxYYG?default-tab=result&editable=true&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
       See the Pen <a href="https://codepen.io/andybarefoot/pen/oNjxYYG">
       Responsive CSS Grid - Books</a> by Andy Barefoot (<a href="https://codepen.io/andybarefoot">@andybarefoot</a>)
       on <a href="https://codepen.io">CodePen</a>.
     </iframe>
