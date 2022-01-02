const t={},n=`<pre><code class="language-html">&lt;bp-button type=&quot;text&quot; @click=&quot;showDialog = true&quot;&gt;
  \u6253\u5F00 Dialog
&lt;/bp-button&gt;

&lt;bp-dialog v-model=&quot;showDialog&quot;&gt;
  &lt;p&gt;\u8FD9\u662F\u4E00\u4E2A\u57FA\u7840\u7684\u5BF9\u8BDD\u6846&lt;/p&gt;
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
`;export{t as attributes,n as html};
