const t={},n=`<pre><code class="language-html">&lt;bp-button type=&quot;success&quot; @click=&quot;successTip&quot;&gt;\u6210\u529F\u63D0\u793A&lt;/bp-button&gt;
&lt;bp-button type=&quot;warning&quot; @click=&quot;warningTip&quot;&gt;\u8B66\u544A\u63D0\u793A&lt;/bp-button&gt;
&lt;bp-button type=&quot;danger&quot; @click=&quot;dangerTip&quot;&gt;\u9519\u8BEF\u63D0\u793A&lt;/bp-button&gt;

&lt;script&gt;
import { message } from &quot;birdpaper-ui&quot;;
export default {
  setup() {
    successTip(){
      message.success(&quot;\u8FD9\u662F\u4E00\u6761\u6210\u529F\u63D0\u793A&quot;);
    };
    warningTip(){
      message.warning(&quot;\u8FD9\u662F\u4E00\u6761\u8B66\u544A\u63D0\u793A&quot;);
    };
    dangerTip(){
      message.error(&quot;\u8FD9\u662F\u4E00\u6761\u9519\u8BEF\u63D0\u793A&quot;);
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
