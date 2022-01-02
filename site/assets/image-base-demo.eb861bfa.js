const t={},o=`<pre><code class="language-html">&lt;bp-row&gt;
    &lt;bp-col :span=&quot;6&quot;
        v-for=&quot;(item,index) in fitDemoList&quot;
        :key=&quot; \`fit-\${index}\` &quot;&gt;
            &lt;bp-image
                style=&quot;width:150px;height:150px&quot;
                :src=&quot;imgUrl&quot;
                :fit=&quot;item&quot;
            &gt;
            &lt;/bp-image&gt;
    &lt;/bp-col&gt;
&lt;/bp-row&gt;

&lt;script&gt;
    export default {
        data() {
            return {
                imgUrl:&quot;https://cos.birdpaper.com/birdpaper-ui/assets/image-demo/image6.jpg&quot;,
                fitDemoList: [&quot;cover&quot;, &quot;contain&quot;, &quot;fill&quot;, &quot;scale-down&quot;]
            }
        }
    }
&lt;/script&gt;
</code></pre>
`;export{t as attributes,o as html};
