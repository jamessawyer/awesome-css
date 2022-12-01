import{_ as e,c as o,o as l,a as t}from"./app.197a452b.js";const i="/awesome-css/assets/flexbox-container.781e45ac.png",a="/awesome-css/assets/flexbox-children.51ee10ea.png",c="/awesome-css/assets/flexbox.225dc0dd.jpg",r="/awesome-css/assets/flexbox-cheetsheet.3b174e3c.jpg",u=JSON.parse('{"title":"Flexbox","description":"","frontmatter":{"title":"Flexbox"},"headers":[{"level":2,"title":"CheetSheet","slug":"cheetsheet","link":"#cheetsheet","children":[]},{"level":2,"title":"\u6559\u7A0B","slug":"\u6559\u7A0B","link":"#\u6559\u7A0B","children":[]},{"level":2,"title":"\u5DE5\u5177","slug":"\u5DE5\u5177","link":"#\u5DE5\u5177","children":[]}],"relativePath":"layouts/flex/index.md","lastUpdated":1669880408000}'),s={name:"layouts/flex/index.md"},d=t('<p>Flexbox\u7B97\u662F\u5F88\u7B80\u5355\u76F4\u767D\u4E14\u5E38\u7528\u7684\u5E03\u5C40\u65B9\u5F0F\u4E86\uFF0C\u6574\u4F53\u6BD4\u8F83\u7B80\u5355\uFF0C\u770B\u770BCheatSheet\u548C\u8FD9\u7BC7\u4EA4\u4E92\u5F0FFlexbox<a href="https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/" target="_blank" rel="noreferrer">\u{1F525} An Interactive Guide to Flexbox - JoshComeau</a> \u57FA\u672C\u4E0A\u5C31\u53EF\u4EE5\u638C\u63E1\u4E86\u{1F603}\u3002</p><h2 id="cheetsheet" tabindex="-1">CheetSheet <a class="header-anchor" href="#cheetsheet" aria-hidden="true">#</a></h2><ol><li><a href="https://flexbox.malven.co/" target="_blank" rel="noreferrer">Flexbox \u53EF\u89C6\u5316\u56FE</a> \u6240\u6709flexbox\u5C5E\u6027(\u9664\u4E86 <code>gap</code> \u5C5E\u6027)\u53EF\u89C6\u5316\u8868\u793A\u5F62\u5F0F <img src="'+i+'" alt="flexbox\u5BB9\u5668\u5C5E\u6027"><img src="'+a+'" alt="flexbox\u5B50\u5143\u7D20\u5C5E\u6027"></li></ol><p>\u6240\u6709\u5C5E\u6027\u601D\u7EF4\u5BFC\u56FE\u8868\u793A\uFF1A</p><p><img src="'+c+'" alt="flexbox props"></p><p>\u53E6\u4E00\u5F20cheatsheet: <img src="'+r+'" alt="flexbox cheatsheet"></p><h2 id="\u6559\u7A0B" tabindex="-1">\u6559\u7A0B <a class="header-anchor" href="#\u6559\u7A0B" aria-hidden="true">#</a></h2><ol><li><a href="https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/" target="_blank" rel="noreferrer">\u{1F525} An Interactive Guide to Flexbox - JoshComeau</a> \u6700\u597D\u7684\u4E00\u7BC7Flexbox\u6559\u7A0B\uFF0C\u5FC5\u770B <ul><li>\u4EA4\u4E92\u5F0FFlexbox\u6559\u7A0B</li><li>\u4E3B\u8F74\u4E0E\u4EA4\u53C9\u8F74</li><li>flexbox\u547D\u540D\u89C4\u5219 - <code>justify-content</code> &amp; <code>align-items</code> &amp; <code>align-self</code> &amp; <code>align-content</code> \u8FD9\u4E9B\u547D\u540D\u89C4\u5219\u7684\u7531\u6765 <ul><li><code>justify</code> - \u6CBF\u7740\u4E3B\u8F74\u5B9A\u4F4D\u5143\u7D20</li><li><code>align</code> - \u6CBF\u7740\u4EA4\u53C9\u8F74\u5B9A\u4F4D\u5143\u7D20</li><li><code>content</code> - \u5206\u5E03\u4E00\u7EC4\u5143\u7D20</li><li><code>items</code> - \u5355\u4E2A\u5143\u7D20\u53EF\u4EE5\u5355\u72EC\u5B9A\u4F4D</li></ul></li><li>flexbox\u5047\u60F3\u5C3A\u5BF8\uFF0C\u5B9A\u4E49\u7684\u5C3A\u5BF8\uFF08\u6BD4\u5982 <code>width</code>\uFF09\u7528\u4E8E\u7B80\u6613\u6700\u540E\u7684\u5C3A\u5BF8\uFF0C\u800C\u4E0D\u662F\u786C\u6027\u5C3A\u5BF8</li><li><code>flex-basis</code> vs <code>width</code></li><li><code>flex-grow</code> - \u5982\u679C\u4F7F\u7528\u5BB9\u5668\u5269\u4F59\u53EF\u7528\u7A7A\u95F4\uFF0C\u5143\u7D20\u5982\u4F55\u5BF9\u53EF\u7528\u7A7A\u95F4\u8FDB\u884C\u62A2\u5360</li><li><code>flex-shrink</code> - \u5F53\u5BB9\u5668\u5C3A\u5BF8\u4E0D\u591F\u65F6\uFF0C\u5B50\u5143\u7D20\u5982\u4F55\u8FDB\u884C\uFF08\u6309\u6BD4\u4F8B\uFF09\u7F29\u51CF\uFF1B\u4EE5\u53CA\u5982\u4F55\u963B\u6B62\u7F29\u51CF</li><li>\u5143\u7D20\u5728\u6D4F\u89C8\u5668\u4E2D\u6700\u5C0F\u5C3A\u5BF8\u9677\u9631\uFF0C\u5982\u4F55\u4F7F\u7528 <code>min-width</code> | <code>min-height</code> \u89E3\u51B3\u8FD9\u4E00\u9677\u9631</li><li><code>gap</code> \u5C5E\u6027\uFF0C\u5982\u4F55\u7ED9\u5143\u7D20\u4E4B\u95F4\u6DFB\u52A0\u95F4\u8DDD</li><li>auto margin \u7684\u7528\u6CD5\uFF1A<code>margin-right: auto</code> | <code>margin-left: auto</code></li><li><code>flex-wrap: nowrap</code> vs <code>flex-wrap: wrap</code><ul><li><code>flex-wrap: wrap</code> \u6362\u884C\u65F6\u5F62\u6210\u591A\u4E2A\u526F\u4E3B\u8F74</li><li><code>align-content</code> - \u5BF9\u6362\u884C\u540E\u7684\u591A\u4E2A\u526F\u4E3B\u8F74\u5982\u4F55\u8FDB\u884C\u5206\u5E03</li></ul></li><li>\u5982\u4F55\u4F7F\u7528Flexbox\u5B9E\u73B0\u81EA\u9002\u5E94\u5E03\u5C40</li></ul></li><li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noreferrer">\u{1F389} a guide to flexbox - @css-tricks</a> \u5C5E\u6027\u8BE6\u7EC6\u4ECB\u7ECD\uFF0C\u4EE5\u53CA\u53EF\u89C6\u5316\u8868\u793A\uFF0C\u5E76\u5305\u542BFlexbox\u76F8\u5173\u7684\u8D44\u6E90</li><li><a href="https://flexboxfroggy.com/" target="_blank" rel="noreferrer">\u{1F4AF} Flexbox Froggy</a> \u901A\u8FC7\u6E38\u620F\u7684\u65B9\u5F0F\u638C\u63E1Flexbox\u5E03\u5C40 <ul><li>\u5B8C\u6210\u8FD9\u4E9B\u4EFB\u52A1\u57FA\u672C\u4E0A\u53EF\u4EE5\u5F3A\u5316Flexbox\u6240\u6709\u5C5E\u6027\u7684\u7528\u6CD5</li></ul></li></ol><h2 id="\u5DE5\u5177" tabindex="-1">\u5DE5\u5177 <a class="header-anchor" href="#\u5DE5\u5177" aria-hidden="true">#</a></h2><p>\u4ECB\u7ECD\u4E00\u4E9B\u53EF\u89C6\u5316\u914D\u7F6EFlexbox\u7684\u5DE5\u5177\uFF1A</p><ol><li><a href="https://the-echoplex.net/flexyboxes/" target="_blank" rel="noreferrer">FlexBox Playground and Code Generator</a> \u81EA\u52A8\u751F\u6210Flexbox</li></ol><p>2022\u5E7412\u670801\u65E514:28:49</p>',12),n=[d];function x(h,p,f,b,_,g){return l(),o("div",null,n)}const w=e(s,[["render",x]]);export{u as __pageData,w as default};
