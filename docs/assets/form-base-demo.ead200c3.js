const t={},o=`<pre><code class="language-html">&lt;bp-form&gt;
  &lt;bp-form-item label=&quot;User&quot; col=&quot;4&quot; is-require&gt;
    &lt;bp-input
      v-model=&quot;state.form.user&quot;
      placeholder=&quot;Enter user account&quot;
    &gt;&lt;/bp-input&gt;
  &lt;/bp-form-item&gt;

  &lt;bp-form-item label=&quot;Password&quot; col=&quot;4&quot; is-require&gt;
    &lt;bp-input
      type=&quot;password&quot;
      v-model=&quot;state.form.password&quot;
      placeholder=&quot;Enter password&quot;
    &gt;&lt;/bp-input&gt;
  &lt;/bp-form-item&gt;

  &lt;bp-form-item col=&quot;4&quot;&gt;
    &lt;bp-button type=&quot;primary&quot;&gt;Login&lt;/bp-button&gt;
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
