const t={},o=`<pre><code class="language-html">&lt;template :span=&quot;6&quot; v-for=&quot;(v,k) in sizeList&quot;&gt;
  &lt;bp-select v-model=&quot;value&quot; :size=&quot;v&quot; :key=&quot;\`size-\${k}\`&quot; :option-list=&quot;data&quot;&gt;&lt;/bp-select&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      sizeList: [&quot;large&quot;, &quot;normal&quot;, &quot;small&quot;, &quot;mini&quot;],
      value: &quot;A&quot;,
      data: [
        {label: &quot;\u5BA2\u5929\u4E0B&quot;,value: &quot;A&quot;},
        {label: &quot;\u96C1\u5357\u98DE\u8336\u7530\u5EA6\u5047\u6751&quot;,value: &quot;B&quot;},
        {label: &quot;\u53F6\u5251\u82F1\u6545\u5C45&quot;,value: &quot;C&quot;},
        {label: &quot;\u7075\u5149\u5BFA&quot;,value: &quot;D&quot;},
        {label: &quot;\u795E\u5149\u5C71&quot;,value: &quot;E&quot;}
      ]
    };
  }
};
&lt;/script&gt;
</code></pre>
`;export{t as attributes,o as html};
