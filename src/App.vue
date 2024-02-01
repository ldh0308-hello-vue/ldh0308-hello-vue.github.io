   <script setup>
   import { ref } from 'vue'
   let id = 0
   const newTodo = ref('')
   const todos = ref([
           { id : id++, issue: 'BackLog'},{id : id++, issue: 'Todo'},
           { id : id++, issue: 'Going Hawaii'}
 ])

  function addTodo(e){
  //    e.preventDefault();  // 이벤트 막기
      todos.value.push({id : id++,issue : newTodo.value})
  }
 
  function removeTodo(todo){
      console.log('dddd')
      todos.value = todos.value.filter(item => item !== todo)
  }
  </script>
  <template>
      <form @submit.prevent="addTodo">  <!-- 위에 e.preventDefault() 대신에  submit.prevnet 를 달아도 됨. -->
          <input v-model="newTodo">
          <button>할 일 추가</button>
      </form>
      <ul>
          <li v-for="todo in todos">
              {{ todo.issue }} - <button @click="removeTodo(todo)">Done</button>
          </li>
      </ul>
 </template>
