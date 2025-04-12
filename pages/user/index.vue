<template>
  <div>
    <h1>Users</h1>
    <button @click="getUsers" data-testid="get-users">Get Users</button>
    <div>
      <input type="text" v-model="newUser.name" />
      <button @click="addUser(newUser)">Add User</button>
    </div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { User } from "~/domains/User";
import { useUser } from "~/stores/user/useUser";
const { users, getUsers, addUser } = useUser();

const newUser = reactive<User>({
  id: "",
  name: "",
});
</script>
