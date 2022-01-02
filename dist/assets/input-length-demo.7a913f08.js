const t={},n=`<pre><code class="language-html">&lt;bp-input
  :max-length=&quot;11&quot;
  show-limit
  placeholder=&quot;Please enter&quot;
  v-model=&quot;lengthInput&quot;
&gt;&lt;/bp-input&gt;

&lt;script&gt;
  export default {
    setup() {
      const lengthInput = ref(&quot;&quot;);
      return {
        lengthInput,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,n as html};
