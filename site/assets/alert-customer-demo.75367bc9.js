const t={},e=`<pre><code class="language-html">&lt;bp-alert v-model=&quot;demo[0]&quot; :closeable=&quot;false&quot; type=&quot;warning&quot; title=&quot;\u4E0D\u53EF\u5173\u95ED&quot;&gt;
&lt;/bp-alert&gt;

&lt;bp-alert v-model=&quot;demo[1]&quot; type=&quot;success&quot; title=&quot;\u9ED8\u8BA4\u5173\u95ED\u6309\u94AE&quot;&gt;&lt;/bp-alert&gt;

&lt;bp-alert v-model=&quot;demo[2]&quot;type=&quot;primary&quot;title=&quot;\u81EA\u5B9A\u4E49\u5173\u95ED\u6587\u672C&quot;close-text=&quot;\u597D\u7684&quot;&gt;&lt;/bp-alert&gt;

&lt;script&gt;
  export default {
    setup() {
      const demo = ref(new Array(3));
      demo.value.fill(true);

      return {
        demo,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,e as html};
