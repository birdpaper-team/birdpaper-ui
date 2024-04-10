<script setup lang="ts">
import { ref } from "vue";
import changelogPage from "../../../components/changelog-page/index.vue"; 

const currentMinor = ref<string>('');
</script>

<changelog-page v-model="currentMinor" />
