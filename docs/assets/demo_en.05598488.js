const t={},e=`<pre><code class="language-html">&lt;bp-input type=&quot;text&quot; v-model=&quot;demo[0]&quot; suffix-icon=&quot;ri-search-line&quot; placeholder=&quot;Please enter&quot;&gt;&lt;/bp-input&gt;

&lt;bp-input type=&quot;text&quot; v-model=&quot;demo[1]&quot; prefix-icon=&quot;ri-search-line&quot; placeholder=&quot;Please enter&quot;&gt;&lt;/bp-input&gt;

&lt;script&gt;
  export default {
    setup() {
      const demo = reactive([&quot;&quot;, &quot;&quot;]);
      return {
        demo,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,e as html};
