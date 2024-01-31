<script setup>
import { ref } from 'vue'
import science from "@/assets/science.json"

const news = ref(science.articles)
//const parentMessage = ref('Parent')
//const items = ref([{ message: 'Foo' }, { message: 'Bar'}])
function keyword(author){
    return author.includes('n')
}
</script>

<template>
  <ul>
   <template v-for= "(jsonItem) in news">
   <li v-if="keyword(jsonItem.author)">
     {{ jsonItem.author }} <br>
    {{jsonItem.title}} - {{ jsonItem.name}}
   </li>
   </template>
  </ul>
</template>
