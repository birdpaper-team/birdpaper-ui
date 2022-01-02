const t={},n=`<pre><code class="language-html">&lt;bp-button type=&quot;default&quot; @click=&quot;textTip&quot;&gt;\u6587\u672C\u63D0\u793A&lt;/bp-button&gt;
&lt;bp-button type=&quot;default&quot; @click=&quot;textTipWithClose&quot;&gt;\u65E0\u5173\u95ED\u6309\u94AE&lt;/bp-button&gt;

&lt;script&gt;
  import { message } from &quot;birdpaper-ui&quot;;
  export default {
    setup() {
      const textTip = () =&gt; {
        message.text(&quot;\u8FD9\u662F\u4E00\u6761\u6587\u672C\u63D0\u793A&quot;);
      };

      const textTipWithClose = () =&gt; {
        message.text({
          content: &quot;\u8FD9\u662F\u4E00\u6761\u6CA1\u6709\u5173\u95ED\u6309\u94AE\u7684\u6587\u672C\u63D0\u793A&quot;,
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
`;export{t as attributes,n as html};
