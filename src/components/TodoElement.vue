<template>
  <div>
    <div
      class="element-group"
      :class="{ 'element-group--checked': props.element.checked }"
    >
      <div class="handle">O</div>
      <input type="checkbox" v-model="props.element.checked" />
      <input class="element-text" type="text" v-model="props.element.name" />
      <button @click="deleteElement()">X</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["element"]);

const emit = defineEmits<{
  (e: "delete", id: number): void;
}>();

const deleteElement = (): void => {
  emit("delete", props.element.id);
};
</script>

<style lang="scss" scoped>
.element-group {
  display: flex;
  &--checked {
    .element-text {
      text-decoration: line-through;
    }
  }
  input[type="text"],
  input[type="text"]:focus,
  input[type="text"]:focus-visible,
  input[type="text"]:active {
    border: none;
    outline: none;
    background: transparent;
  }
  input[type="checkbox"] {
    margin-right: 10px;
    cursor: pointer;
  }
  .handle {
    cursor: move;
    margin-right: 10px;
  }
}
</style>
