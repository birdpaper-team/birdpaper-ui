const t={},e=`<pre><code class="language-html">&lt;bp-alert v-model=&quot;demo[0]&quot; type=&quot;primary&quot; title=&quot;\u5E26\u6709\u63CF\u8FF0\u5185\u5BB9\u7684\u63D0\u793A\u6846&quot;&gt;
  \u6211\u559C\u6B22\u559D\u53EF\u4E50\uFF0C\u53BB\u8D85\u5E02\u53D1\u73B0\u53EF\u4E50\u6CA1\u6709\u4E86\uFF0C\u627E\u4E86\u597D\u4E45\u4E5F\u6CA1\u6709\uFF0C\u6211\u968F\u624B\u62FF\u4E86\u74F6\u725B\u5976\uFF0C\u5230\u95E8\u53E3\u7ED3\u8D26\u65F6\u7A81\u7136\u53D1\u73B0\u4E86\u53EF\u4E50\uFF0C\u53EF\u6211\u4E0D\u60F3\u6362\u4E86\u2014\u2014\u6765\u81EA\u6563\u6587\u96C6\u300A\u6211\u5728\u4EBA\u95F4\u51D1\u6570\u7684\u65E5\u5B50\u300B
&lt;/bp-alert&gt;

&lt;bp-alert v-model=&quot;demo[1]&quot; type=&quot;danger&quot; title=&quot;\u5E26\u6709\u63CF\u8FF0\u5185\u5BB9\u7684\u63D0\u793A\u6846&quot;&gt;
  \u6211\u7684\u5730\u677F\u4E0B\u6709\u4E00\u5177\u5C38\u4F53\uFF0C\u548C\u6211\u957F\u5F97\u4E00\u6A21\u4E00\u6837\uFF0C\u5374\u591A\u4E86\u4E00\u4E1D\u7A1A\u6C14\u4E0E\u5929\u771F\u3002\u4E0D\u77E5\u4F55\u65F6\u6728\u677F\u88AB\u4EBA\u6253\u5F00\u4E86\uFF0C\u6211\u5E76\u4E0D\u62C5\u5FC3\uFF0C\u6BD5\u7ADF\u8FD9\u662F\u5927\u5BB6\u8BA9\u6211\u57CB\u7684\u3002\u4ED6\u662F\u6211\uFF0C\u6211\u4E0D\u662F\u4ED6\u3002\u626D\u5934\u51FA\u95E8\uFF0C\u53C8\u662F\u7E41\u5FD9\u7684\u4E00\u5929\u3002\u2014\u2014\u9009\u81EA\u6563\u6587\u96C6\u300A\u6211\u5728\u4EBA\u95F4\u51D1\u6570\u7684\u65E5\u5B50\u300B
&lt;/bp-alert&gt;

&lt;script&gt;
  export default {
    setup() {
      const demo = ref(new Array(4));
      demo.value.fill(true);

      return {
        demo,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,e as html};