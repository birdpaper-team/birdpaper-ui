const n={},t=`<pre><code class="language-html">&lt;bp-switch v-model=&quot;hideOnSinglePage&quot;&gt;&lt;/bp-switch&gt;

&lt;bp-pagination
  :hide-on-single-page=&quot;hideOnSinglePage&quot;
  :page-num=&quot;pageNum&quot;
  :total=&quot;1&quot;&gt;
&lt;/bp-pagination&gt;

&lt;script&gt;
  export default {
    setup() {
      const hideOnSinglePage = ref(false);
      const pageNum = ref(1);

      return {
        hideOnSinglePage
        pageNum,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{n as attributes,t as html};
