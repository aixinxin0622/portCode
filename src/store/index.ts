import { defineStore } from 'pinia';
import { ref } from 'vue';
export const pageIndexStore = defineStore('page', () => {
  const title = ref<string>('企业基本信息');

  const equiptitle = ref<string>('码头泊位');

  const setTitle = (value: string) => {
    title.value = value;
  };
  const seteEquipTitle = (value: string) => {
    equiptitle.value = value;
  };

  return {
    title,
    setTitle,
    equiptitle,
    seteEquipTitle,
  };
});
