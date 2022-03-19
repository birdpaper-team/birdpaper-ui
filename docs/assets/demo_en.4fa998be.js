const t={},o=`<pre><code class="language-html">&lt;bp-table :cols=&quot;demoCol&quot; :data-source=&quot;demoData&quot;&gt;
  &lt;template #seat=&quot;{ row }&quot;&gt;
    &lt;span style=&quot;font-weight:bold&quot;&gt;{{ row.seat || &quot;-&quot; }}&lt;/span&gt;
  &lt;/template&gt;
  &lt;template #name=&quot;{ row }&quot;&gt;
    &lt;span
      style=&quot;border:1px solid #96d5ff;background:#f0faff;padding:4px 8px;color:#449efb;border-radius:4px&quot;
    &gt;{{ row.name || &quot;-&quot; }}&lt;/span&gt;
  &lt;/template&gt;
  &lt;template #results=&quot;{ row }&quot;&gt;
    &lt;span&gt;{{ row.results || &quot;-&quot; }}&lt;/span&gt;
  &lt;/template&gt;
  &lt;template #ranking=&quot;{ row }&quot;&gt;
    &lt;span&gt;{{ row.ranking || &quot;-&quot; }}&lt;/span&gt;
  &lt;/template&gt;
  &lt;template #action&gt;
    &lt;bp-button type=&quot;text&quot; size=&quot;small&quot;&gt;Edit&lt;/bp-button&gt;
    &lt;bp-button type=&quot;text&quot; size=&quot;small&quot; theme=&quot;danger&quot;&gt;Delete&lt;/bp-button&gt;
  &lt;/template&gt;
&lt;/bp-table&gt;

&lt;script&gt;
export default {
  data() {
    return {
       demoCol: [
        { label: &quot;Seat&quot;, width: 100 },
        { label: &quot;Name&quot;, scope: { customRender: &quot;name&quot; } },
        { label: &quot;Results&quot;, scope: { customRender: &quot;results&quot; } },
        { label: &quot;Ranking&quot;, scope: { customRender: &quot;ranking&quot; } },
        { align: &quot;center&quot;, label: &quot;Action&quot;, scope: { customRender: &quot;action&quot; } },
      ],
      demoData: [
        { seat: &quot;1&quot;, name: &quot;\u674E\u5C0F\u9896&quot;, results: &quot;522&quot;, ranking: &quot;4&quot; },
        { seat: &quot;15&quot;, name: &quot;\u675C\u5C0F\u6D69&quot;, results: &quot;462&quot;, ranking: &quot;18&quot; },
        { seat: &quot;18&quot;, name: &quot;\u6C64\u5C0F\u9752&quot;, results: &quot;482&quot;, ranking: &quot;12&quot; },
        { seat: &quot;28&quot;, name: &quot;\u7530\u5C0F\u950B&quot;, results: &quot;475&quot;, ranking: &quot;15&quot; },
        { seat: &quot;35&quot;, name: &quot;\u5434\u5C0F\u8C6A&quot;, results: &quot;372&quot;, ranking: &quot;41&quot; },
        { seat: &quot;41&quot;, name: &quot;\u5434\u5C0F\u53EF&quot;, results: &quot;404&quot;, ranking: &quot;33&quot; },
        { seat: &quot;46&quot;, name: &quot;\u6728\u5C0F\u4EA6&quot;, results: &quot;409&quot;, ranking: &quot;40&quot; },
        { seat: &quot;43&quot;, name: &quot;\u90B9\u5C0F\u8F89&quot;, results: &quot;293&quot;, ranking: &quot;53&quot; },
      ],
    };
  }
};
&lt;/script&gt;
</code></pre>
`;export{t as attributes,o as html};
