const t={},o=`<pre><code class="language-html"> &lt;bp-button type=&quot;text&quot; @click=&quot;showDialog = true&quot;&gt;
            \u6253\u5F00\u4E0D\u663E\u793A\u5E95\u90E8\u7684 Dialog
          &lt;/bp-button&gt;

           &lt;bp-dialog v-model=&quot;showDialog&quot; no-footer&gt;
        &lt;p&gt;\u4E0D\u663E\u793A\u5E95\u90E8\u533A\u57DF\u5185\u5BB9&lt;/p&gt;
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
