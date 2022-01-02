const t={},n=`<pre><code class="language-html">&lt;bp-button type=&quot;default&quot; @click=&quot;loadingTip&quot;&gt;loading&lt;/bp-button&gt;

&lt;script&gt;
  import { message } from &quot;birdpaper-ui&quot;;
  export default {
    setup() {
      const loadingTip = () =&gt; {
        message.loading(&quot;Please wait while loading&quot;);
      };

      return {
        loadingTip,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,n as html};
