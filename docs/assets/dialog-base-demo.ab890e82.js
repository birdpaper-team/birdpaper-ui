const t={},o=`<pre><code class="language-html">&lt;bp-button type=&quot;text&quot; @click=&quot;showDialog = true&quot;&gt;
  Open Dialog
&lt;/bp-button&gt;

&lt;bp-dialog v-model=&quot;showDialog&quot;&gt;
  &lt;p&gt;This is a basic dialog box&lt;/p&gt;
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
