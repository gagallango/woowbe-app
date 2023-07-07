<template>
  <div class="go-back">
    <a @click="$router.back()"> Go back</a>
  </div>
</template>

<script>
export default {
  name: "GoBack",
};
</script>

<style lang="less">
.go-back {
  position: fixed;
  bottom: 0;
  border-radius: 5px;
  left: 0;
  width: auto;
  padding: 10px 10px;
  margin: 0 20px 10px;
  background: #e5e5e5;
  cursor: pointer;
  font-size: 12px;
  a {
    &:hover {
      font-weight: 700;
    }
  }
}
</style>
