<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <label>{{props.label}}</label>
    <input :placeholder="props.placeholder" type="text" v-model="value" @input="$emit('val', value)" />
</template>

<script setup>
import { ref } from "vue"

var props = defineProps(['placeholder', 'label'])

var value = ref('')
</script>