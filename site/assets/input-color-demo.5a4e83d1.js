const t={},o=`<p>\u901A\u8FC7<code>border-color</code>\u8BBE\u7F6E\u8F93\u5165\u6846\u8FB9\u6846\u989C\u8272</p>
<pre><code class="language-html">&lt;bp-input
  v-for=&quot;(item, index) in colorList&quot;
  :key=&quot;\`demo-\${index}\`&quot;
  :border-color=&quot;item&quot;
  v-model=&quot;colorInput[index]&quot;
  :placeholder=&quot;item&quot;
&gt;&lt;/bp-input&gt;

&lt;script&gt;
  export default {
    setup() {
      const colorInput = ref([&quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;]);
      const colorList = [&quot;primary&quot;, &quot;success&quot;, &quot;warning&quot;, &quot;danger&quot;];
      return {
        colorInput,
        colorList,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,o as html};
