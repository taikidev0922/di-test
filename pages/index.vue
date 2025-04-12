<template>
  <div>
    <h1>{{ testStore.test }}</h1>
  </div>
</template>

<script setup lang="ts">
import useTest from "@/stores/useTest";

const testStore = useTest();

onMounted(async () => {
  const test = await testStore.getTest();
  console.log(test);
});
</script>
