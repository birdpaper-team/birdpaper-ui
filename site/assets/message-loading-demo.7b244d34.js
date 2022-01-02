const t={},n=`<pre><code class="language-html">&lt;bp-button type=&quot;default&quot; @click=&quot;loadingTip&quot;&gt;\u52A0\u8F7D\u72B6\u6001&lt;/bp-button&gt;

&lt;script&gt;
  import { message } from &quot;birdpaper-ui&quot;;
  export default {
    setup() {
      const loadingTip = () =&gt; {
        message.loading(&quot;\u6B63\u5728\u52A0\u8F7D\uFF0C\u8BF7\u7A0D\u5019&quot;);
      };

      return {
        loadingTip,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,n as html};
