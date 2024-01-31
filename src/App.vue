<script setup>
import { ref } from 'vue'
import category from "@/assets/category.json"

const categories = ref(category)
//const parentMessage = ref('Parent')
//const items = ref([{ message: 'Foo' }, { message: 'Bar'}])
</script>

<template>
  <hr>
  <li v-for= "(item) in categories">
     {{ item.name }} - {{ item.code}}
  </li>
  <hr>
</template>
