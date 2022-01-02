const t={},e=`<pre><code class="language-html">&lt;bp-item-bar :item-list=&quot;baseItem&quot; @change=&quot;itemChange&quot;&gt;&lt;/bp-item-bar&gt;

&lt;script&gt;
  export default {
      setup() {
          const baseItem = [&quot;New&quot;, &quot;Hot&quot;, &quot;Like&quot;, &quot;Top&quot;];
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
