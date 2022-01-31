const t={},e=`<pre><code class="language-html">&lt;bp-switch v-model=&quot;type.primary&quot; type=&quot;primary&quot;&gt;&lt;/bp-switch&gt;
&lt;bp-switch v-model=&quot;type.success&quot; type=&quot;success&quot;&gt;&lt;/bp-switch&gt;
&lt;bp-switch v-model=&quot;type.warning&quot; type=&quot;warning&quot;&gt;&lt;/bp-switch&gt;
&lt;bp-switch v-model=&quot;type.danger&quot; type=&quot;danger&quot;&gt;&lt;/bp-switch&gt;

&lt;script&gt;
export default {
  data() {
    return {
      type: {
        primary: true,
        success: true,
        warning: true,
        danger: true,
      },
    };
  }
};
&lt;/script&gt;
</code></pre>
`;export{t as attributes,e as html};
