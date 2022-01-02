const t={},n=`<pre><code class="language-html">&lt;bp-dropdown :options=&quot;demoOptions&quot; @change=&quot;onChange&quot;&gt;
  \u70B9\u51FB\u89E6\u53D1
&lt;/bp-dropdown&gt;

&lt;bp-dropdown :options=&quot;demoOptions&quot; trigger=&quot;hover&quot; @change=&quot;onChange&quot;&gt;
  \u9F20\u6807\u79FB\u5165\u89E6\u53D1
&lt;/bp-dropdown&gt;

&lt;script&gt;
  export default {
    setup() {
      const demoOptions = [
        { label: &quot;\u65B0\u589E&quot;, value: &quot;add&quot; },
        { label: &quot;\u7F16\u8F91&quot;, value: &quot;edit&quot; },
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
