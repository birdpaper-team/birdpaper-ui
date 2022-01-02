const t={},n=`<pre><code class="language-html">&lt;bp-dropdown :options=&quot;demoOptions&quot; @change=&quot;onChange&quot;&gt;
  Click trigger
&lt;/bp-dropdown&gt;

&lt;bp-dropdown :options=&quot;demoOptions&quot; trigger=&quot;hover&quot; @change=&quot;onChange&quot;&gt;
  Hover trigger
&lt;/bp-dropdown&gt;

&lt;script&gt;
  export default {
    setup() {
      const demoOptions = [
        { label: &quot;Add&quot;, value: &quot;add&quot; },
        { label: &quot;Edit&quot;, value: &quot;edit&quot; },
      ];

      const onChange = (item) =&gt; {
        message.text(\`label:\u300C\${item.label}\u300D,value:\u300C\${item.value}\u300D\`);
      };

      return {
        demoOptions,
        onChange,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,n as html};
