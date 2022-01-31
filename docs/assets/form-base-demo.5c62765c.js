const t={},o=`<pre><code class="language-html">&lt;bp-form&gt;
  &lt;bp-form-item label=&quot;\u8D26\u53F7&quot; col=&quot;4&quot; is-require&gt;
    &lt;bp-input v-model=&quot;state.form.user&quot; placeholder=&quot;\u8F93\u5165\u7528\u6237\u8D26\u6237&quot;&gt;&lt;/bp-input&gt;
  &lt;/bp-form-item&gt;

  &lt;bp-form-item label=&quot;\u5BC6\u7801&quot; col=&quot;4&quot; is-require&gt;
    &lt;bp-input
      type=&quot;password&quot;
      v-model=&quot;state.form.password&quot;
      placeholder=&quot;\u8F93\u5165\u5BC6\u7801&quot;
    &gt;&lt;/bp-input&gt;
  &lt;/bp-form-item&gt;

  &lt;bp-form-item col=&quot;4&quot;&gt;
    &lt;bp-button type=&quot;primary&quot;&gt;\u767B\u5F55&lt;/bp-button&gt;
  &lt;/bp-form-item&gt;
&lt;/bp-form&gt;

&lt;script&gt;
  import { reactive } from &quot;@vue/reactivity&quot;;
  export default {
    setup() {
      const state = reactive({
        form: {
          user: &quot;&quot;,
          password: &quot;&quot;,
        },
      });
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,o as html};
