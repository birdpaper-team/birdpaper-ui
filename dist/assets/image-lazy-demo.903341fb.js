const t={},e=`<pre><code class="language-html">&lt;bp-row&gt;
    &lt;bp-col :span=&quot;24&quot;&gt;
        &lt;bp-image
            style=&quot;width:100%;height:100%;margin-bottom:20px&quot;
            v-for=&quot;(item,index) in lazyDemoList&quot;
            :key=&quot;\`lazy-\${index}\`&quot;
            :src=&quot;item&quot;
            lazy
        &gt;
            &lt;div class=&quot;placeholder-demo&quot; slot=&quot;placeholder&quot;&gt;\u52A0\u8F7D\u4E2D&lt;/div&gt;
        &lt;/bp-image&gt;
    &lt;/bp-col&gt;
&lt;/bp-row&gt;

&lt;script&gt;
    export default {
        data() {
            return {
                lazyDemoList: [
                    &quot;https://cos.birdpaper.com/birdpaper-ui/assets/image-demo/image1.jpg&quot;,
                    &quot;https://cos.birdpaper.com/birdpaper-ui/assets/image-demo/image2.jpg&quot;,
                    &quot;https://cos.birdpaper.com/birdpaper-ui/assets/image-demo/image3.jpg&quot;,
                    &quot;https://cos.birdpaper.com/birdpaper-ui/assets/image-demo/image4.jpg&quot;,
                    &quot;https://cos.birdpaper.com/birdpaper-ui/assets/image-demo/image5.jpg&quot;,
                    &quot;https://cos.birdpaper.com/birdpaper-ui/assets/image-demo/image6.jpg&quot;,
                    &quot;https://cos.birdpaper.com/birdpaper-ui/assets/image-demo/image7.jpg&quot;,
                    &quot;https://cos.birdpaper.com/birdpaper-ui/assets/image-demo/image8.jpg&quot;,
                    &quot;https://cos.birdpaper.com/birdpaper-ui/assets/image-demo/image9.jpg&quot;,
                    &quot;https://cos.birdpaper.com/birdpaper-ui/assets/image-demo/image10.jpg&quot;,
                    &quot;https://cos.birdpaper.com/birdpaper-ui/assets/image-demo/image11.jpg&quot;,
                ]
            }
        }
    }
&lt;/script&gt;
</code></pre>
`;export{t as attributes,e as html};
