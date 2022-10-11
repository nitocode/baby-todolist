<script setup lang="ts">
import { computed, ref } from "vue";
import draggable from "vuedraggable";
import TodoElement from "./../components/TodoElement.vue";
import { useTodos } from "./../stores/todos";
// import nestedDraggable from "./components/Nested.vue";
const drag = ref<boolean>(false);
const todoStore = useTodos();

const dragOptions = computed(() => {
  return {
    animation: 200,
    group: "description",
    disabled: false,
    ghostClass: "ghost",
  };
});

const deleteElement = (id: number) => {
  console.log("id", id);
};
</script>

<template>
  <main>
    <div>
      <p>HOME PAGE !!!!</p>

      <draggable
        class="list-group"
        tag="ul"
        v-model="todoStore.daddyTodo"
        v-bind="dragOptions"
        handle=".handle"
        @start="drag = true"
        @end="drag = false"
      >
        <template #item="{ element }">
          <div>
            <todo-element @delete="deleteElement" :element="element" />

            <draggable
              class="list-group"
              tag="ul"
              v-model="element.tasks"
              v-bind="dragOptions"
              handle=".handle"
              @start="drag = true"
              @end="drag = false"
            >
              <template #item="{ element }">
                <todo-element @delete="deleteElement" :element="element" />
              </template>
            </draggable>
          </div>
        </template>
      </draggable>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
</style>
