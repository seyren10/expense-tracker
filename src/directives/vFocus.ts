export default {
  mounted: (el: HTMLInputElement, binding: any) => {
    if (binding.arg) {
      el.focus();
    }
  },
};
