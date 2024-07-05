import { onBeforeMount, onBeforeUnmount } from "vue";

export const useDisableScrolling = () => {
  onBeforeMount(() => {
    document.body.classList.add("overflow-hidden");
  });
  onBeforeUnmount(() => {
    document.body.classList.remove("overflow-hidden");
  });
};
