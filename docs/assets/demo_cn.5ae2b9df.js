const t={},n=`<pre><code class="language-html">&lt;bp-input placeholder=&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot; size=&quot;large&quot; v-model=&quot;largeInp&quot;&gt;&lt;/bp-input&gt;
&lt;bp-input placeholder=&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot; size=&quot;normal&quot; v-model=&quot;normalInp&quot;&gt;&lt;/bp-input&gt;
&lt;bp-input placeholder=&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot; size=&quot;small&quot; v-model=&quot;smallInp&quot;&gt;&lt;/bp-input&gt;
&lt;bp-input placeholder=&quot;\u8BF7\u8F93\u5165\u5185\u5BB9&quot; size=&quot;mini&quot; v-model=&quot;miniInp&quot;&gt;&lt;/bp-input&gt;

&lt;script&gt;
  export default {
    setup() {
      const largeInp = ref(&quot;&quot;);
      const normalInp = ref(&quot;&quot;);
      const smallInp = ref(&quot;&quot;);
      const miniInp = ref(&quot;&quot;);

      return {
        largeInp,
        normalInp,
        smallInp,
        miniInp
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,n as html};
