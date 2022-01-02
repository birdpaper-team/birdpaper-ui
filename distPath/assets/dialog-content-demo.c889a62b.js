const t={},o=`<pre><code class="language-html">&lt;bp-button type=&quot;text&quot; @click=&quot;showDialog = true&quot;&gt;
    \u6253\u5F00\u81EA\u5B9A\u4E49\u5185\u5BB9\u7684 Dialog
&lt;/bp-button&gt;

 &lt;bp-dialog v-model=&quot;showDialog&quot;&gt;
        &lt;bp-row :gutter=&quot;10&quot;&gt;
          &lt;bp-col :span=&quot;8&quot; title=&quot;span=8&quot;&gt;
            &lt;div class=&quot;row-demo bg-blue-5&quot;&gt;&lt;/div&gt;
          &lt;/bp-col&gt;
          &lt;bp-col :span=&quot;16&quot; title=&quot;span=16&quot;&gt;
            &lt;div class=&quot;row-demo bg-blue-5&quot;&gt;&lt;/div&gt;
          &lt;/bp-col&gt;
        &lt;/bp-row&gt;
        &lt;bp-row :gutter=&quot;10&quot;&gt;
          &lt;bp-col :span=&quot;3&quot; title=&quot;span=3&quot;&gt;
            &lt;div class=&quot;row-demo bg-blue-5&quot;&gt;&lt;/div&gt;
          &lt;/bp-col&gt;
          &lt;bp-col :span=&quot;10&quot; title=&quot;span=10&quot;&gt;
            &lt;div class=&quot;row-demo bg-blue-5&quot;&gt;&lt;/div&gt;
          &lt;/bp-col&gt;
          &lt;bp-col :span=&quot;11&quot; title=&quot;span=11&quot;&gt;
            &lt;div class=&quot;row-demo bg-blue-5&quot;&gt;&lt;/div&gt;
          &lt;/bp-col&gt;
        &lt;/bp-row&gt;
        &lt;bp-row :gutter=&quot;10&quot;&gt;
          &lt;bp-col :span=&quot;4&quot; title=&quot;span=4&quot;&gt;
            &lt;div class=&quot;row-demo bg-blue-5&quot;&gt;&lt;/div&gt;
          &lt;/bp-col&gt;
          &lt;bp-col :span=&quot;8&quot; title=&quot;span=8&quot;&gt;
            &lt;div class=&quot;row-demo bg-blue-5&quot;&gt;&lt;/div&gt;
          &lt;/bp-col&gt;
          &lt;bp-col :span=&quot;3&quot; title=&quot;span=3&quot;&gt;
            &lt;div class=&quot;row-demo bg-blue-5&quot;&gt;&lt;/div&gt;
          &lt;/bp-col&gt;
          &lt;bp-col :span=&quot;9&quot; title=&quot;span=9&quot;&gt;
            &lt;div class=&quot;row-demo bg-blue-5&quot;&gt;&lt;/div&gt;
          &lt;/bp-col&gt;
        &lt;/bp-row&gt;
      &lt;/bp-dialog&gt;

      &lt;script&gt;
  export default {
    setup() {
      const showDialog = ref(false);

      return {
        showDialog,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,o as html};
