const t={},e=`<pre><code class="language-html">&lt;bp-checkbox
  custom-click
  :value=&quot;checkAll&quot;
  :indeterminate=&quot;isIndeterminate&quot;
  @click=&quot;onCheckAllClick&quot;
&gt;
  Select all
&lt;/bp-checkbox&gt;

&lt;bp-checkbox
  v-for=&quot;(item, index) in dataList&quot;
  v-model=&quot;item.value&quot;
  custom-click
  :key=&quot;\`data-\${index}\`&quot;
  @click=&quot;onItemClick(item)&quot;
&gt;
  {{ item.label }}
&lt;/bp-checkbox&gt;
&lt;script&gt;
  import { ref } from &quot;vue&quot;;
  export default {
    setup() {
      const dataList = ref([
        { label: &quot;a&quot;, value: true },
        { label: &quot;b&quot;, value: true },
        { label: &quot;c&quot;, value: false },
      ]);
      const isIndeterminate = ref(true);
      const checkAll = ref(false);

      const onCheckAllClick = () =&gt; {
        isIndeterminate.value = false;
        checkAll.value = !checkAll.value;

        for (let i = 0; i &lt; dataList.value.length; i++) {
          dataList.value[i].value = checkAll.value;
        }
      };

      const onItemClick = (item) =&gt; {
        item.value = !item.value;

        var sum = 0;
        for (let i = 0; i &lt; dataList.value.length; i++) {
          if (dataList.value[i].value) sum++;
        }

        checkAll.value = sum === dataList.value.length;
        isIndeterminate.value = sum &gt; 0 &amp;&amp; sum &lt; dataList.value.length;
      };

      return {
        dataList,
        isIndeterminate,
        checkAll,
        onItemClick,
        onCheckAllClick,
      };
    },
  };
&lt;/script&gt;
</code></pre>
`;export{t as attributes,e as html};
