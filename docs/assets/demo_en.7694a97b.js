const t={},o=`<pre><code class="language-html">&lt;p&gt;Show total&lt;/p&gt;
&lt;bp-pagination :page-num=&quot;pageNum&quot; :total=&quot;50&quot; layout=&quot;total,prev,pager,next&quot;&gt;&lt;/bp-pagination&gt;

&lt;p&gt;Enter the page number to jump&lt;/p&gt;
&lt;bp-pagination :page-num=&quot;pageNum&quot; :total=&quot;50&quot; layout=&quot;prev,pager,next,jumper&quot;&gt;&lt;/bp-pagination&gt;

&lt;p&gt;Control the number of items displayed per page&lt;/p&gt;
&lt;bp-pagination :page-num=&quot;pageNum&quot; :total=&quot;50&quot; layout=&quot;prev,pager,next,sizes&quot;&gt;&lt;/bp-pagination&gt;

&lt;p&gt;Custom copywriting&lt;/p&gt;
&lt;bp-pagination
  :page-num=&quot;pageNum&quot;
  :total=&quot;50&quot;
  layout=&quot;total,prev,pager,next,jumper,sizes&quot;
  total-tmp-string=&quot;Total {total}&quot;
  jumper-tmp-string=&quot;Go to {jumper}&quot;
  sizes-tmp-string=&quot;{value}/page&quot;&gt;&lt;/bp-pagination&gt;

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
`;export{t as attributes,o as html};
