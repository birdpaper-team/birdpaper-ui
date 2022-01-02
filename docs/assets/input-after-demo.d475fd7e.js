const t={},n=`<pre><code class="language-html">&lt;bp-input
  v-model=&quot;input1&quot;
  suffix-icon=&quot;ri-search-line&quot;
  placeholder=&quot;Attribute way&quot;
&gt;&lt;/bp-input&gt;

&lt;bp-input v-model=&quot;input2&quot; placeholder=&quot;Slot&quot;&gt;
  &lt;template #suffix&gt;
    &lt;bp-button icon=&quot;ri-search-line&quot;&gt;&lt;/bp-button&gt;
  &lt;/template&gt;
&lt;/bp-input&gt;

&lt;bp-input v-model=&quot;input3&quot; placeholder=&quot;The rear text&quot;&gt;
  &lt;template #append&gt;
    &lt;span&gt; kg &lt;/span&gt;
  &lt;/template&gt;
&lt;/bp-input&gt;

&lt;bp-input v-model=&quot;input4&quot; placeholder=&quot;The rear button&quot;&gt;
  &lt;template #append&gt;
    &lt;bp-button icon=&quot;ri-search-line&quot;&gt;&lt;/bp-button&gt;
  &lt;/template&gt;
&lt;/bp-input&gt;

&lt;script&gt;
  export default {
    setup() {
      const input1 = ref(&quot;&quot;);
      const input2 = ref(&quot;&quot;);
      const input3 = ref(&quot;&quot;);
      const input4 = ref(&quot;&quot;);

      return {
        input1,
        input2,
        input3,
        input4,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,n as html};
