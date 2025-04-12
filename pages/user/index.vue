<template>
  <div>
    <h1>Users</h1>
    <button @click="getUsers" data-testid="get-users">Get Users</button>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useUser } from "~/stores/user/useUser";
const { users, getUsers } = useUser();
</script>
