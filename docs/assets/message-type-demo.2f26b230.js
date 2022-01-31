const t={},n=`<pre><code class="language-html">&lt;bp-button type=&quot;success&quot; @click=&quot;successTip&quot;&gt;Success&lt;/bp-button&gt;
&lt;bp-button type=&quot;warning&quot; @click=&quot;warningTip&quot;&gt;Warning&lt;/bp-button&gt;
&lt;bp-button type=&quot;danger&quot; @click=&quot;dangerTip&quot;&gt;Error&lt;/bp-button&gt;

&lt;script&gt;
import { message } from &quot;birdpaper-ui&quot;;
export default {
  setup() {
    successTip(){
      message.success(&quot;This is a success tip&quot;);
    };
    warningTip(){
      message.warning(&quot;This is a warning tip&quot;);
    };
    dangerTip(){
      message.error(&quot;This is a error tip&quot;);
    };

    return {
      successTip,
      warningTip,
      dangerTip
    };
  },
}
&lt;/script&gt;
</code></pre>
`;export{t as attributes,n as html};
