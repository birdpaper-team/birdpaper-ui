const t={},o=`<pre><code class="language-html"> &lt;bp-button type=&quot;text&quot; @click=&quot;showDialog = true&quot;&gt;
            Open the Dialog that does not show the bottom
          &lt;/bp-button&gt;

           &lt;bp-dialog v-model=&quot;showDialog&quot; no-footer&gt;
        &lt;p&gt;Hidden the contents of the bottom area&lt;/p&gt;
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
