<template>
  <ul class="list">
    <li
        class="list-item"
        v-for="user in users"
        :key="user.id"
    >
      {{ user.name }}<br>
      {{ user.id }}
    </li>
  </ul>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {useUsers} from '@/use/users'

export default defineComponent({
  async setup() {
    const {users} = await useUsers()

    return {
      users
    }
  }
})
</script>
