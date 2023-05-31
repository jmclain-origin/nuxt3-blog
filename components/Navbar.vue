<script setup>
import { ref } from 'vue';
const { data, status, signOut } = useAuth();
const auth = ref({ user: data.user, status: status.value });
console.log(auth.user)

</script>

<template>
  <nav
    class="py-3 px-4 bg-zinc-800 text-neutral-200 border-b-2 border-b-primary-400"
  >
    <div class="flex justify-end items-center md:container mx-auto space-x-6">
      <NuxtLink class="nav-link" to="/"
        ><Icon name="bi:house" class="h-8 w-8 md:h-9 md:w-9"
      /></NuxtLink>
      <NuxtLink class="nav-link" to="/blog"
        ><Icon name="carbon:blog" class="h-8 w-8 md:h-9 md:w-9"
      /></NuxtLink>
      <NuxtLink class="nav-link" to="/about"
        ><Icon name="clarity:help-info-line" class="h-8 w-8 md:h-9 md:w-9"
      /></NuxtLink>
      <NuxtLink  class="nav-link" @click="signOut"
        ><Icon v-if="auth.status === 'unauthenticated'" name="uiw:login" class="h-8 w-8 md:h-9 md:w-9"/>
        <Avatar :avatarImg="auth.user?.image" />
      </NuxtLink>
    </div>
  </nav>
</template>
