<template>
    <div>
        {{item}}
    </div>
</template>

<script setup>
import { ref } from "vue"

var props = defineProps(['item'])
var item = ref(props.item)
</script>