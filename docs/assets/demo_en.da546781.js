const t={},e=`<pre><code class="language-html">&lt;bp-input v-model=&quot;demo[0]&quot; placeholder=&quot;Please enter the query content&quot;&gt;
  &lt;template #append&gt;
    &lt;bp-button icon=&quot;ri-search-line&quot;&gt;&lt;/bp-button&gt;
  &lt;/template&gt;
&lt;/bp-input&gt;

&lt;bp-input v-model=&quot;demo[1]&quot; placeholder=&quot;Please enter the query content&quot;&gt;
  &lt;template #append&gt;
    &lt;span&gt;.com&lt;/span&gt;
  &lt;/template&gt;
&lt;/bp-input&gt;

&lt;bp-input v-model=&quot;demo[2]&quot; placeholder=&quot;Please enter the url&quot;&gt;
  &lt;template #prepend&gt;
    &lt;bp-button icon=&quot;ri-search-line&quot;&gt;&lt;/bp-button&gt;
  &lt;/template&gt;
&lt;/bp-input&gt;

&lt;bp-input v-model=&quot;demo[3]&quot; placeholder=&quot;Please enter the url&quot;&gt;
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
`;export{t as attributes,e as html};
