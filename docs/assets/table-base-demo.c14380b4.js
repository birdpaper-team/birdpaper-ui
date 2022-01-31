const t={},o=`<pre><code class="language-html">&lt;bp-table :cols=&quot;basicDemoCol&quot; :data-source=&quot;basicDemoData&quot;&gt;&lt;/bp-table&gt;

&lt;script&gt;
export default {
  data() {
    return {
       basicDemoCol: [
          { title: &quot;\u59D3\u540D&quot;, key: &quot;name&quot; },
          { title: &quot;\u6027\u522B&quot;, key: &quot;sex&quot; },
          { title: &quot;\u5B66\u9662&quot;, key: &quot;college&quot; },
        }
      ],
      basicDemoData: [
        {
          name: &quot;Sam&quot;,
          sex: &quot;\u7537&quot;,
          college: &quot;\u4FE1\u606F\u5DE5\u7A0B\u5B66\u9662&quot;,
        },
        {
          name: &quot;Echo&quot;,
          sex: &quot;\u5973&quot;,
          college: &quot;\u673A\u7535\u5DE5\u7A0B\u5B66\u9662&quot;,
        },
      ],
    };
  }
};
&lt;/script&gt;
</code></pre>
`;export{t as attributes,o as html};
