const t={},n=`<pre><code class="language-html">&lt;p&gt;\u663E\u793A\u603B\u6570&lt;/p&gt;
&lt;bp-pagination :page-num=&quot;pageNum&quot; :total=&quot;50&quot; layout=&quot;total,prev,pager,next&quot;&gt;&lt;/bp-pagination&gt;

&lt;p&gt;\u8F93\u5165\u9875\u7801\u8DF3\u8F6C&lt;/p&gt;
&lt;bp-pagination :page-num=&quot;pageNum&quot; :total=&quot;50&quot; layout=&quot;prev,pager,next,jumper&quot;&gt;&lt;/bp-pagination&gt;

&lt;p&gt;\u63A7\u5236\u6BCF\u9875\u663E\u793A\u6761\u6570&lt;/p&gt;
&lt;bp-pagination :page-num=&quot;pageNum&quot; :total=&quot;50&quot; layout=&quot;prev,pager,next,sizes&quot;&gt;&lt;/bp-pagination&gt;

&lt;p&gt;\u81EA\u5B9A\u4E49\u663E\u793A\u6587\u6848&lt;/p&gt;
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
`;export{t as attributes,n as html};
