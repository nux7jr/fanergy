<template>
    <div>
      <h1>User Information</h1>
      <div v-if="error">Error: {{ error }}</div>
      <div v-else-if="loading">Loading...</div>
      <div v-else-if="user">
        <p>ID: {{ user.id }}</p>
        <p>Name: {{ user.name }}</p>
        <p>Email: {{ user.email }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  
  const userStore = useUserStore();

  const { data: user, error, pending: loading } = useAsyncData('user', () => userStore.fetchUserData());
  
  </script>
  