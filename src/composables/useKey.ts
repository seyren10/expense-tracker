import { onBeforeMount, onBeforeUnmount, onMounted } from "vue";

export const useKey = (key: string, cb: () => void) => {
  const exec = (event: KeyboardEvent) => {
    if (event.code === key) cb();
  };

  onBeforeMount(() => {
    window.addEventListener("keydown", exec);
  });
  onBeforeUnmount(() => {
    window.removeEventListener("keydown", exec);
  });
};
