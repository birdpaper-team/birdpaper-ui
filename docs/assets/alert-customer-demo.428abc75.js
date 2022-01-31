const t={},o=`<pre><code class="language-html">&lt;bp-alert v-model=&quot;demo[0]&quot; :closeable=&quot;false&quot; type=&quot;warning&quot; title=&quot;No close&quot;&gt;
&lt;/bp-alert&gt;

&lt;bp-alert v-model=&quot;demo[1]&quot; type=&quot;success&quot; title=&quot;Default off button&quot;&gt;&lt;/bp-alert&gt;

&lt;bp-alert v-model=&quot;demo[2]&quot;type=&quot;primary&quot;title=&quot;Custom close text&quot; close-text=&quot;ok&quot;&gt;&lt;/bp-alert&gt;

&lt;script&gt;
  export default {
    setup() {
      const demo = ref(new Array(3));
      demo.value.fill(true);

      return {
        demo,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,o as html};
