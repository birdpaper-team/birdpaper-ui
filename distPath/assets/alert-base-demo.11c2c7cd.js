const t={},o=`<pre><code class="language-html">&lt;bp-alert v-model=&quot;basicDemo[0]&quot; type=&quot;primary&quot; title=&quot;\u666E\u901A\u63D0\u793A\u6846&quot;&gt;&lt;/bp-alert&gt;
&lt;bp-alert light v-model=&quot;basicDemo[1]&quot; type=&quot;primary&quot; title=&quot;\u666E\u901A\u63D0\u793A\u6846&quot;&gt;&lt;/bp-alert&gt;

&lt;bp-alert v-model=&quot;basicDemo[2]&quot; type=&quot;success&quot; title=&quot;\u6210\u529F\u63D0\u793A\u6846&quot;&gt;&lt;/bp-alert&gt;
&lt;bp-alert light v-model=&quot;basicDemo[3]&quot; type=&quot;success&quot; title=&quot;\u6210\u529F\u63D0\u793A\u6846&quot;&gt;&lt;/bp-alert&gt;

&lt;bp-alert v-model=&quot;basicDemo[4]&quot; type=&quot;warning&quot; title=&quot;\u8B66\u544A\u63D0\u793A\u6846&quot;&gt;&lt;/bp-alert&gt;
&lt;bp-alert light v-model=&quot;basicDemo[5]&quot; type=&quot;warning&quot; title=&quot;\u8B66\u544A\u63D0\u793A\u6846&quot;&gt;&lt;/bp-alert&gt;

&lt;bp-alert v-model=&quot;basicDemo[6]&quot; type=&quot;danger&quot; title=&quot;\u9519\u8BEF\u63D0\u793A\u6846&quot;&gt;&lt;/bp-alert&gt;
&lt;bp-alert light v-model=&quot;basicDemo[7]&quot; type=&quot;danger&quot; title=&quot;\u9519\u8BEF\u63D0\u793A\u6846&quot;&gt;&lt;/bp-alert&gt;

&lt;script&gt;
  export default {
    setup() {
      const basicDemo = ref(new Array(8));
      basicDemo.value.fill(true);

      return {
       basicDemo,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,o as html};
