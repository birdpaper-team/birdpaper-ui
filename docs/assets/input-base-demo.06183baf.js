const t={},e=`<p>Control user input and status with <code>readonly</code> and <code>disabled</code></p>
<pre><code class="language-html">&lt;bp-input placeholder=&quot;please enter&quot; v-model=&quot;text&quot;&gt;&lt;/bp-input&gt;
&lt;bp-input placeholder=&quot;readonly&quot; readonly v-model=&quot;text&quot;&gt;&lt;/bp-input&gt;
&lt;bp-input placeholder=&quot;disabled&quot; disabled v-model=&quot;text&quot;&gt;&lt;/bp-input&gt;

&lt;script&gt;
  export default {
    setup() {
      const text = ref('');
      return {
        text,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,e as html};
