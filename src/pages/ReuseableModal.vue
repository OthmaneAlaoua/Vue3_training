<template>
  <section @click="close" class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="my-5 text-2xl">Re-useable Modal</h1>
      <Modal></Modal>
    </div>
  </section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="z-30 m-auto bg-white p-2 rounded shadow w-1/3">
        <div class="p-2 border">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "ReuseableModal",
  components: {
    Modal
  }
}
</script>

<style scoped>

</style>