<script setup>
import { ref } from 'vue'

const awesome = ref(true)

function toggleAwesome(){
    awesome = !awesome
}

function isAwesome(){
    if(true){
	console.log("Vue is awesome!")
    } else { console.log("On no")
    }
}
</script>

<template>
 <button @click="toggleAwesome">toggle</button>
 <br>
 <h1 v-if="isAwesome">{{ isAwesome() }}</h1>

 <h4 v-if="awesome">TRUE</h4>
 <h4 v-show="awesome">TRue</h4>
</template>

