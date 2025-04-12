export default defineStore("test", () => {
  const { $di } = useNuxtApp();
  const testService = $di.services.getTestService;
  const test = ref<string | null>(null);

  async function getTest() {
    test.value = await testService.getTest();
  }

  return { getTest, test };
});
