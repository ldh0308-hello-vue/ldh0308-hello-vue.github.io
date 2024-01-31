<script setup>
import { ref } from 'vue'
import science from "@/assets/science.json"

const news = ref(science.articles)
//const parentMessage = ref('Parent')
//const items = ref([{ message: 'Foo' }, { message: 'Bar'}])
</script>

<template>
  <ul>
   <template v-for= "(jsonItem) in news">
   <li v-if="jsonItem.author === '이지운'">
     {{ jsonItem.author }} <br>
     {{ jsonItem.title }} - {{ jsonItem.name}}
   </li>
   </template>
  </ul>
</template>
