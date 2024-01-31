<script setup>
import { ref } from 'vue'
import science from "@/assets/science.json"

const news = ref(science.articles)
//const parentMessage = ref('Parent')
//const items = ref([{ message: 'Foo' }, { message: 'Bar'}])
</script>

<template>
  <ul>
   <li v-for= "(jsonItem) in news">
     {{ jsonItem.title }} - {{ jsonItem.name}}
   </li>
  </ul>
</template>
