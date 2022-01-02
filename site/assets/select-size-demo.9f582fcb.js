const t={},o=`<pre><code class="language-html">&lt;template :span=&quot;6&quot; v-for=&quot;(v,k) in sizeList&quot;&gt;
  &lt;bp-select
    v-model=&quot;value&quot;
    :size=&quot;v&quot;
    :key=&quot;\`size-\${k}\`&quot;
    :option-list=&quot;data&quot;
  &gt;&lt;/bp-select&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        sizeList: [&quot;large&quot;, &quot;normal&quot;, &quot;small&quot;, &quot;mini&quot;],
        value: &quot;A&quot;,
        data: [
          { label: &quot;HAKKA WORLD&quot;, value: &quot;A&quot; },
          { label: &quot;Yannanfei Tea Field Resort&quot;, value: &quot;B&quot; },
          { label: &quot;Former residence of Ye Jianying&quot;, value: &quot;C&quot; },
          { label: &quot;Light temple&quot;, value: &quot;D&quot; },
          { label: &quot;Divine mountain&quot;, value: &quot;E&quot; },
        ],
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,o as html};
