const t={},e=`<pre><code class="language-html">&lt;bp-item-bar :item-list=&quot;baseItem&quot; @change=&quot;itemChange&quot;&gt;&lt;/bp-item-bar&gt;

&lt;script&gt;
  export default {
      setup() {
          const baseItem = [&quot;\u6700\u65B0&quot;, &quot;\u6700\u70ED&quot;, &quot;\u63A8\u8350&quot;, &quot;\u7F6E\u9876&quot;];
          const itemChange = (item)=&gt;{console.log(item)};
          reutrn {
              baseItem,
              itemChange
          }
      }
  }
&lt;/script&gt;
</code></pre>
`;export{t as attributes,e as html};
