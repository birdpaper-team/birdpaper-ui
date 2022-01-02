const t={},n=`<pre><code class="language-html">&lt;bp-input
  v-model=&quot;input1&quot;
  suffix-icon=&quot;ri-search-line&quot;
  placeholder=&quot;\u5C5E\u6027\u65B9\u5F0F&quot;
&gt;&lt;/bp-input&gt;

&lt;bp-input v-model=&quot;input2&quot; placeholder=&quot;Slot\u65B9\u5F0F&quot;&gt;
  &lt;template #suffix&gt;
    &lt;bp-button icon=&quot;ri-search-line&quot;&gt;&lt;/bp-button&gt;
  &lt;/template&gt;
&lt;/bp-input&gt;

&lt;bp-input v-model=&quot;input3&quot; placeholder=&quot;\u540E\u7F6E\u6587\u672C&quot;&gt;
  &lt;template #append&gt;
    &lt;span&gt; kg &lt;/span&gt;
  &lt;/template&gt;
&lt;/bp-input&gt;

&lt;bp-input v-model=&quot;input4&quot; placeholder=&quot;\u540E\u7F6E\u6309\u94AE&quot;&gt;
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
