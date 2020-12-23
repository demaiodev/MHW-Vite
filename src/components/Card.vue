<template>
  <div class="p-8">
    <div class="bg-white rounded-lg shadow-xl">
      <div class="p-8">
        <div>
          <!-- Insert your svg or image here -->
          <img :src="image" :alt="name" style="height: 300px; width: 300px" />
        </div>
        <div class="mt-8 text-center">
          <h1 class="font-bold text-lg text-gray-700 mb-1">
            {{ name }}
          </h1>
          <!-- <p class="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p> -->
          <button
            class="mt-6 bg-blue-500 hover:bg-blue-400 text-white rounded-full px-12 py-3 shadow-xl focus:outline-none"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    name: {
      type: String
    },
    image: {
      type: String
    }
  }
}
</script>
