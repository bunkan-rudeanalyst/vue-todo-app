<template>
  <div class="container">
    <h1>ToDo アプリ</h1>

    <div class="input-area">
      <input v-model="newTask" placeholder="新しいタスクを入力" />
      <button @click="addTask">追加</button>
    </div>

    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input type="checkbox" v-model="task.done" />
        <span :class="{ done: task.done }">{{ task.text }}</span>
        <button @click="deleteTask(index)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTask = ref('')
const tasks = ref([])

const addTask = () => {
  const text = newTask.value.trim()
  if (text === '') return

  tasks.value.push({ text, done: false }) // ← doneを持たせる
  newTask.value = ''
}

const deleteTask = (index) => {
  tasks.value.splice(index, 1)
}
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: 50px auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: sans-serif;
}

.input-area {
  display: flex;
  gap: 0.5em;
  margin-bottom: 1em;
}

input[type="text"] {
  flex: 1;
  padding: 0.5em;
}

button {
  padding: 0.5em 1em;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 0.5em;
}

.done {
  text-decoration: line-through;
  color: gray;
}
</style>
