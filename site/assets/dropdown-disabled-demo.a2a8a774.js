const t={},n=`<pre><code class="language-html">&lt;bp-dropdown :options=&quot;disabledOptions&quot; @change=&quot;onChange&quot;&gt;
  Disabled option
&lt;/bp-dropdown&gt;

&lt;script&gt;
  export default {
    setup() {
      const disabledOptions = [
        { label: &quot;Add&quot;, value: &quot;add&quot; },
        { label: &quot;Edit&quot;, value: &quot;edit&quot; },
        { label: &quot;Delete&quot;, value: &quot;deleted&quot;, disabled: true },
      ];

      const onChange = (item) =&gt; {
        message.text(\`label:\u300C\${item.label}\u300D,value:\u300C\${item.value}\u300D\`);
      };

      return {
        disabledOptions,
        onChange,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,n as html};
