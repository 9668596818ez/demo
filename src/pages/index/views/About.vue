<template>
  <div>
    <lists :lists="lists">
      <template v-slot:list="{ list }">{{ list.name }}</template>
    </lists>
  </div>
</template>
<script>
import Lists from "./components/Lists";
export default {
  name: "about",
  components: {
    Lists
  },
  data() {
    return {
      lists: [
        {
          name: "list1",
          done: false
        },
        {
          name: "list2",
          done: true
        },
        {
          name: "list3",
          done: true
        }
      ]
    };
  }
};
</script>
