<template>
  <div class="card">
    <h1>Глобальный поиск по всему проекту</h1>



    <button class="btn" @click="navigate">Открыть пользователей</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {useRouter} from 'vue-router'

export default defineComponent({
  data() {
    const router = useRouter()
    return {
      title: 'Как Vue работает с TypeScript?',
      navigate: () => router.push('/users')
    }
  }
})

</script>
