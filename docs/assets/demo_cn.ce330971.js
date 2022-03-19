const t={},n=`<pre><code class="language-html">&lt;bp-pagination :page-num=&quot;pageNum&quot; :total=&quot;total&quot; pager-count=&quot;11&quot;&gt;&lt;/bp-pagination&gt;

&lt;script&gt;
  export default {
    setup() {
      const total = ref(500);
      const pageNum = ref(1);
      return {
        pageNum,
        total
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,n as html};
