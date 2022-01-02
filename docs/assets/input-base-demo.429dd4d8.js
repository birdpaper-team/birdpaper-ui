const t={},e=`<p>\u901A\u8FC7<code>readonly</code>\u548C<code>disabled</code>\u63A7\u5236\u7528\u6237\u8F93\u5165\u548C\u72B6\u6001</p>
<pre><code class="language-html">&lt;bp-input placeholder=&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot; v-model=&quot;text&quot;&gt;&lt;/bp-input&gt;
&lt;bp-input placeholder=&quot;\u53EA\u8BFB\u72B6\u6001&quot; readonly v-model=&quot;text&quot;&gt;&lt;/bp-input&gt;
&lt;bp-input placeholder=&quot;\u7981\u6B62\u8F93\u5165&quot; disabled v-model=&quot;text&quot;&gt;&lt;/bp-input&gt;

&lt;script&gt;
  export default {
    setup() {
      const text = ref('');
      return {
        text,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,e as html};
