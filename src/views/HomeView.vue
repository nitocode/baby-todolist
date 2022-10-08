<script setup lang="ts">
import { computed, ref } from "vue";
import draggable from "vuedraggable";
import TodoElement from "./../components/TodoElement.vue";
// import nestedDraggable from "./components/Nested.vue";
const drag = ref<boolean>(false);
// const daddyList = ref<Array<{ name: string; id: number; order: number }>>([]);
const daddyList = ref<any>([]);
daddyList.value = [
  {
    name: "Rentrer",
    id: 1,
    order: 1,
    checked: false,
    tasks: [
      {
        name: "Livret de famille",
        id: 2,
        order: 1,
        checked: false,
      },
      {
        name: "Documents échographies",
        id: 3,
        order: 2,
        checked: false,
      },
      {
        name: "Carte d'identité Maman",
        id: 4,
        order: 3,
        checked: false,
      },
    ],
  },
  {
    name: "Soutenir",
    id: 5,
    order: 2,
    checked: false,
    tasks: [
      {
        name: "Stylo",
        id: 6,
        order: 1,
        checked: false,
      },
      {
        name: "Sac à main Maman",
        id: 7,
        order: 2,
        checked: true,
      },
      {
        name: "Portable Maman",
        id: 8,
        order: 3,
        checked: false,
      },
    ],
  },
];

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
        v-model="daddyList"
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
