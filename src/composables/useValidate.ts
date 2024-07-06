import { ref, type Ref } from "vue";

export type ValidationType =
  | `min:${number}`
  | `max:${number}`
  | `maxLength:${number}`
  | `minLength:${number}`
  | "required"
  | "date";

export const useValidate = (
  value: Ref<string | number>,
  validationType: ValidationType[] | undefined,
) => {
  const isValid = ref(true);

  function validate() {
    if (Array.isArray(validationType))
      validationType.forEach((e) => {
        const [type, typeValue] = e.split(":");
        switch (type) {
          case "min": {
            isValid.value = +value.value >= +typeValue;
            break;
          }
          case "max": {
            isValid.value = +value.value <= +typeValue;
            break;
          }
          case "maxLength": {
            if (typeof value.value === "string")
              isValid.value = value.value.length <= +typeValue;
            break;
          }
          case "minLength": {
            if (typeof value.value === "string")
              isValid.value = value.value.length >= +typeValue;
            break;
          }
          case "required": {
            if (typeof value.value === "string")
              isValid.value = value.value.trim() !== "";
            else if (typeof value.value === "number")
              isValid.value = value.value > 0;
            break;
          }
          case "date": {
            if (
              typeof value.value === "string" &&
              !Number.isNaN(Date.parse(value.value))
            )
              isValid.value = true;
            else isValid.value = false;
            break;
          }
        }
      });
  }

  return { isValid, validate };
};
