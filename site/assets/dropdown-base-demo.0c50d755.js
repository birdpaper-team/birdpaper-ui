const t={},n=`<pre><code class="language-html">&lt;bp-dropdown :options=&quot;basicOptions&quot; @change=&quot;onChange&quot;&gt;
  Dropdown menu
&lt;/bp-dropdown&gt;

&lt;script&gt;
  export default {
    setup() {
      const basicOptions = [
        { label: &quot;Add&quot;, value: &quot;add&quot; },
        { label: &quot;Edit&quot;, value: &quot;edit&quot; },
      ];

      const onChange = (item) =&gt; {
        message.text(\`label:\u300C\${item.label}\u300D,value:\u300C\${item.value}\u300D\`);
      };

      return {
        basicOptions,
        onChange,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,n as html};
