const t={},o=`<pre><code class="language-html">&lt;bp-input type=&quot;text&quot; v-model=&quot;demo[0]&quot; suffix-icon=&quot;ri-search-line&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot;&gt;&lt;/bp-input&gt;

&lt;bp-input type=&quot;text&quot; v-model=&quot;demo[1]&quot; prefix-icon=&quot;ri-search-line&quot; placeholder=&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot;&gt;&lt;/bp-input&gt;

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
`;export{t as attributes,o as html};
