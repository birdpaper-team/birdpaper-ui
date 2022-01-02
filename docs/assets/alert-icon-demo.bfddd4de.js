const t={},o=`<pre><code class="language-html">&lt;bp-alert v-model=&quot;demo[0]&quot; type=&quot;primary&quot; show-icon light title=&quot;\u666E\u901A\u63D0\u793A\u6846\u5E26\u56FE\u6807&quot;&gt;&lt;/bp-alert&gt;

&lt;bp-alert v-model=&quot;demo[1]&quot; type=&quot;success&quot; show-icon light title=&quot;\u6210\u529F\u63D0\u793A\u6846\u5E26\u56FE\u6807&quot;&gt;&lt;/bp-alert&gt;

&lt;bp-alert v-model=&quot;demo[2]&quot; type=&quot;warning&quot; show-icon light title=&quot;\u8B66\u544A\u63D0\u793A\u6846\u5E26\u56FE\u6807&quot;&gt;&lt;/bp-alert&gt;

&lt;bp-alert v-model=&quot;demo[3]&quot; type=&quot;danger&quot; show-icon light title=&quot;\u9519\u8BEF\u63D0\u793A\u6846\u5E26\u56FE\u6807&quot;&gt;&lt;/bp-alert&gt;

&lt;script&gt;
  export default {
    setup() {
      const demo = ref(new Array(4));
      demo.value.fill(true);

      return {
        demo,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,o as html};
