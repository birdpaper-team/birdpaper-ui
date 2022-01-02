const t={},n=`<pre><code class="language-html">&lt;bp-dropdown :options=&quot;disabledOptions&quot; @change=&quot;onChange&quot;&gt;
  \u7981\u7528\u9009\u9879
&lt;/bp-dropdown&gt;

&lt;script&gt;
  export default {
    setup() {
      const disabledOptions = [
        { label: &quot;\u65B0\u589E&quot;, value: &quot;add&quot; },
        { label: &quot;\u7F16\u8F91&quot;, value: &quot;edit&quot; },
        { label: &quot;\u5220\u9664&quot;, value: &quot;deleted&quot;, disabled: true },
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
