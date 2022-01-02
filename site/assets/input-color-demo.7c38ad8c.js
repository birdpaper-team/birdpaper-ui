const t={},o=`<p>Set the input box border color with <code>border-color</code></p>
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
