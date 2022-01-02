const t={},n=`<pre><code class="language-html">&lt;bp-row&gt;
    &lt;bp-col :span=&quot;6&quot;&gt;
            &lt;bp-image
                style=&quot;width:150px;height:150px&quot;
                :src=&quot;imgUrl&quot;
            &gt;
                &lt;div class=&quot;placeholder-demo&quot; slot=&quot;placeholder&quot;&gt;\u52A0\u8F7D\u4E2D&lt;/div&gt;
            &lt;/bp-image&gt;
    &lt;/bp-col&gt;
&lt;/bp-row&gt;

&lt;script&gt;
    export default {
        data() {
            return {
                imgUrl:&quot;https://cos.birdpaper.com/birdpaper-ui/assets/image-demo/bp-image-demo0.jpg&quot;,
            }
        }
    }
&lt;/script&gt;

&lt;style&gt;
.placeholder-demo {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #c3e0ff;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  color: #fff;
}
&lt;/style&gt;
</code></pre>
`;export{t as attributes,n as html};
