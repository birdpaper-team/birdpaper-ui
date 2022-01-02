const t={},e=`<pre><code class="language-html">&lt;bp-alert v-model=&quot;demo[0]&quot; type=&quot;primary&quot; title=&quot;A prompt box with a description&quot;&gt;
  I like to drink Coke. When I went to the supermarket, I found that there was no Coke. After looking for a long time, I took a bottle of milk with me and suddenly found coke at the door.
&lt;/bp-alert&gt;

&lt;bp-alert v-model=&quot;demo[1]&quot; type=&quot;danger&quot; title=&quot;A prompt box with a description&quot;&gt;
  There is a corpse under my floor, and I look exactly the same, but a little more childlike and naive. I do not know when the board was opened, I did not worry, after all, this is everyone asked me to bury. He's me. I'm not him. Turn head to go out, another busy day.
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
