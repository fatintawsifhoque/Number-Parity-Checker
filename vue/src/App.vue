<template>
  <section class="h-screen w-screen flex flex-col justify-center items-center bg-slate-200">
    <input type="number" class="border h-12 rounded-lg outline-none pl-2" v-model="input">
    <h2 v-if="st" class="mt-5"><span class="text-xl font-bold">{{ input }}</span> is a <span class="text-xl font-bold">{{ st }}</span> number</h2>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';

const input = ref(null)
const st = ref('')

watch(input, (newVal) => {
    if (newVal === null || newVal === '') {
        st.value = ''
        return
    }

    if (newVal % 2 === 0) {
        st.value = 'Even'
    } else {
        st.value = 'Odd'
    }
})
</script>

<style scoped>
</style>