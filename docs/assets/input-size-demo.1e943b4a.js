const t={},o=`<pre><code class="language-html">&lt;bp-input
  v-for=&quot;(item, index) in sizeList&quot;
  :key=&quot;\`demo-\${index}\`&quot;
  :size=&quot;item&quot;
  v-model=&quot;sizeInput[index]&quot;
  :placeholder=&quot;item&quot;
&gt;&lt;/bp-input&gt;

&lt;script&gt;
  export default {
    setup() {
      const sizeInput = ref([&quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;]);
      const sizeList = [&quot;large&quot;, &quot;normal&quot;, &quot;small&quot;, &quot;mini&quot;];
      return {
        sizeInput,
        sizeList,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,o as html};
