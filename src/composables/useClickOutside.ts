import { onBeforeMount, ref, type Ref } from "vue";

export const useClickOutside = (
  el: Ref<HTMLElement | null>,
  cb: () => void,
) => {
  const firstAttempt = ref(false);

  onBeforeMount(() => {
    window.addEventListener("click", (event: MouseEvent) => {
      if (!el.value?.contains(event.target as Node) && firstAttempt.value) {
        cb();
      } else firstAttempt.value = true;
    });
  });
};
