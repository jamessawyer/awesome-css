import{_ as e,c as o,o as l,a as t}from"./app.cbd3c845.js";const i="/awesome-css/assets/flexbox-container.781e45ac.png",a="/awesome-css/assets/flexbox-children.51ee10ea.png",c="/awesome-css/assets/flexbox.225dc0dd.jpg",r="/awesome-css/assets/flexbox-cheetsheet.3b174e3c.jpg",u=JSON.parse('{"title":"Flexbox","description":"","frontmatter":{"title":"Flexbox"},"headers":[{"level":2,"title":"CheetSheet","slug":"cheetsheet","link":"#cheetsheet","children":[]},{"level":2,"title":"教程","slug":"教程","link":"#教程","children":[]},{"level":2,"title":"工具","slug":"工具","link":"#工具","children":[]}],"relativePath":"layouts/flex/index.md","lastUpdated":1676531959000}'),s={name:"layouts/flex/index.md"},d=t('<p>Flexbox算是很简单直白且常用的布局方式了，整体比较简单，看看CheatSheet和这篇交互式Flexbox<a href="https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/" target="_blank" rel="noreferrer">🔥 An Interactive Guide to Flexbox - JoshComeau</a> 基本上就可以掌握了😃。</p><h2 id="cheetsheet" tabindex="-1">CheetSheet <a class="header-anchor" href="#cheetsheet" aria-hidden="true">#</a></h2><ol><li><a href="https://flexbox.malven.co/" target="_blank" rel="noreferrer">Flexbox 可视化图</a> 所有flexbox属性(除了 <code>gap</code> 属性)可视化表示形式 <img src="'+i+'" alt="flexbox容器属性"><img src="'+a+'" alt="flexbox子元素属性"></li></ol><p>所有属性思维导图表示：</p><p><img src="'+c+'" alt="flexbox props"></p><p>另一张cheatsheet: <img src="'+r+'" alt="flexbox cheatsheet"></p><h2 id="教程" tabindex="-1">教程 <a class="header-anchor" href="#教程" aria-hidden="true">#</a></h2><ol><li><a href="https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/" target="_blank" rel="noreferrer">🔥 An Interactive Guide to Flexbox - JoshComeau</a> 最好的一篇Flexbox教程，必看 <ul><li>交互式Flexbox教程</li><li>主轴与交叉轴</li><li>flexbox命名规则 - <code>justify-content</code> &amp; <code>align-items</code> &amp; <code>align-self</code> &amp; <code>align-content</code> 这些命名规则的由来 <ul><li><code>justify</code> - 沿着主轴定位元素</li><li><code>align</code> - 沿着交叉轴定位元素</li><li><code>content</code> - 分布一组元素</li><li><code>items</code> - 单个元素可以单独定位</li></ul></li><li>flexbox假想尺寸，定义的尺寸（比如 <code>width</code>）用于简易最后的尺寸，而不是硬性尺寸</li><li><code>flex-basis</code> vs <code>width</code></li><li><code>flex-grow</code> - 如果使用容器剩余可用空间，元素如何对可用空间进行抢占</li><li><code>flex-shrink</code> - 当容器尺寸不够时，子元素如何进行（按比例）缩减；以及如何阻止缩减</li><li>元素在浏览器中最小尺寸陷阱，如何使用 <code>min-width</code> | <code>min-height</code> 解决这一陷阱</li><li><code>gap</code> 属性，如何给元素之间添加间距</li><li>auto margin 的用法：<code>margin-right: auto</code> | <code>margin-left: auto</code></li><li><code>flex-wrap: nowrap</code> vs <code>flex-wrap: wrap</code><ul><li><code>flex-wrap: wrap</code> 换行时形成多个副主轴</li><li><code>align-content</code> - 对换行后的多个副主轴如何进行分布</li></ul></li><li>如何使用Flexbox实现自适应布局</li></ul></li><li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noreferrer">🎉 a guide to flexbox - @css-tricks</a> 属性详细介绍，以及可视化表示，并包含Flexbox相关的资源</li><li><a href="https://flexboxfroggy.com/" target="_blank" rel="noreferrer">💯 Flexbox Froggy</a> 通过游戏的方式掌握Flexbox布局 <ul><li>完成这些任务基本上可以强化Flexbox所有属性的用法</li></ul></li></ol><h2 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-hidden="true">#</a></h2><p>介绍一些可视化配置Flexbox的工具：</p><ol><li><a href="https://the-echoplex.net/flexyboxes/" target="_blank" rel="noreferrer">FlexBox Playground and Code Generator</a> 自动生成Flexbox</li></ol><p>2022年12月01日14:28:49</p>',12),n=[d];function x(h,p,f,b,_,g){return l(),o("div",null,n)}const w=e(s,[["render",x]]);export{u as __pageData,w as default};