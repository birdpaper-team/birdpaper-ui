const t={},e=`<pre><code class="language-html">&lt;bp-button type=&quot;default&quot; @click=&quot;textTip&quot;&gt;Text&lt;/bp-button&gt;
&lt;bp-button type=&quot;default&quot; @click=&quot;textTipWithClose&quot;&gt;No close&lt;/bp-button&gt;

&lt;script&gt;
  import { message } from &quot;birdpaper-ui&quot;;
  export default {
    setup() {
      const textTip = () =&gt; {
        message.text(&quot;This is a text prompt&quot;);
      };

      const textTipWithClose = () =&gt; {
        message.text({
          content: &quot;This is a text prompt without a close button&quot;,
          close: true,
        });
      };

      return {
        textTip,
        textTipWithClose,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,e as html};
