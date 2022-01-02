const t={},e=`<pre><code class="language-html">&lt;bp-alert v-model=&quot;basicDemo[0]&quot; type=&quot;primary&quot; title=&quot;Primary&quot;&gt;&lt;/bp-alert&gt;
&lt;bp-alert light v-model=&quot;basicDemo[1]&quot; type=&quot;primary&quot; title=&quot;Primary&quot;&gt;&lt;/bp-alert&gt;

&lt;bp-alert v-model=&quot;basicDemo[2]&quot; type=&quot;success&quot; title=&quot;Success&quot;&gt;&lt;/bp-alert&gt;
&lt;bp-alert light v-model=&quot;basicDemo[3]&quot; type=&quot;success&quot; title=&quot;Success&quot;&gt;&lt;/bp-alert&gt;

&lt;bp-alert v-model=&quot;basicDemo[4]&quot; type=&quot;warning&quot; title=&quot;Warning&quot;&gt;&lt;/bp-alert&gt;
&lt;bp-alert light v-model=&quot;basicDemo[5]&quot; type=&quot;warning&quot; title=&quot;Warning&quot;&gt;&lt;/bp-alert&gt;

&lt;bp-alert v-model=&quot;basicDemo[6]&quot; type=&quot;danger&quot; title=&quot;Danger&quot;&gt;&lt;/bp-alert&gt;
&lt;bp-alert light v-model=&quot;basicDemo[7]&quot; type=&quot;danger&quot; title=&quot;Danger&quot;&gt;&lt;/bp-alert&gt;

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
`;export{t as attributes,e as html};
