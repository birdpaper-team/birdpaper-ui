const t={},n=`<pre><code class="language-html">&lt;bp-input v-model=&quot;demo[0]&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u67E5\u8BE2\u5185\u5BB9&quot;&gt;
  &lt;template #append&gt;
    &lt;bp-button icon=&quot;ri-search-line&quot;&gt;&lt;/bp-button&gt;
  &lt;/template&gt;
&lt;/bp-input&gt;

&lt;bp-input v-model=&quot;demo[1]&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u67E5\u8BE2\u5185\u5BB9&quot;&gt;
  &lt;template #append&gt;
    &lt;span&gt;.com&lt;/span&gt;
  &lt;/template&gt;
&lt;/bp-input&gt;

&lt;bp-input v-model=&quot;demo[2]&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u7F51\u5740&quot;&gt;
  &lt;template #prepend&gt;
    &lt;bp-button icon=&quot;ri-search-line&quot;&gt;&lt;/bp-button&gt;
  &lt;/template&gt;
&lt;/bp-input&gt;

&lt;bp-input v-model=&quot;demo[3]&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u7F51\u5740&quot;&gt;
  &lt;template #prepend&gt;
    &lt;span&gt;Https://&lt;/span&gt;
  &lt;/template&gt;
&lt;/bp-input&gt;

&lt;script&gt;
  export default {
    setup() {
      const demo = reactive([&quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;]);
      return {
        demo,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,n as html};
