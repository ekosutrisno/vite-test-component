<template>
  <div>
    <h1>{{ msg }}</h1>
    <p v-if="isOk">
        <Child/>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Child from "./Child.vue";

export default defineComponent({
  components: { Child },
  props: {
    msg: String,
    isOk: Boolean
  },
  setup() {
    return {};
  },
});
</script>
