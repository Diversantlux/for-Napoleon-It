<template lang="pug">
  a(:href='linkLink' target='_blank' rel='noopener') {{linkName}}
</template>

<script>
export default {
    name: "BlankLink",
    props:{
        linkLink: String,
        linkName: String
    }
}
</script>

<style scoped>

</style>