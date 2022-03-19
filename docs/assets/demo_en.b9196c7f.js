const t={},n=`<pre><code class="language-html">&lt;bp-pagination :page-num=&quot;pageNum&quot; :total=&quot;50&quot; layout=&quot;prev,pager,next&quot;&gt;&lt;/bp-pagination&gt;
&lt;bp-pagination background :page-num=&quot;pageNum&quot; :total=&quot;200&quot; layout=&quot;prev,pager,next&quot;&gt;&lt;/bp-pagination&gt;

&lt;script&gt;
  export default {
    setup() {
      const pageNum = ref(1);
      return {
        pageNum,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,n as html};
