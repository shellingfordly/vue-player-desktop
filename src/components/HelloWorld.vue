<template>
  <Button @click="getCPU">get</Button>
</template>

<script setup>
import { http } from "../utils/http";

function getCPU() {
  http
    .request({
      url: "/personalized?limit=8",
    })
    .then((res) => {
      console.log(res);
    });
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
