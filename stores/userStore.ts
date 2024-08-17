import { defineStore } from 'pinia';
import { ref } from 'vue';
import { type User } from '@/types/User';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);

  const setUser = (newUser: User) => {
    user.value = newUser;
  };

  const fetchUserData = async () => {
    try {
      const data = await $fetch<User>('https://dummyjson.com/users/1');
      user.value = data;
      return data; 
    } catch (error) {
      console.error('Failed to fetch user data:', error);
      throw error; 
    }
  };
  
  return {
    user,
    setUser,
    fetchUserData,
  };
});
