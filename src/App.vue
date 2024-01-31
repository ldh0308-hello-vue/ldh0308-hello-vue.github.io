<script setup>
import { ref } from 'vue'
const message = ref({name: "dong", age: 34})
</script>

<template>
 <h1>{{ message }}</h1>
</template>

