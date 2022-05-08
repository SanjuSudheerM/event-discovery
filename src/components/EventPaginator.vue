<template>
  <div class="paginator-wrapper my-4">
    <ul class="flex list-none">
      <li
        @click="updatePageNumber(currentPage - 1)"
        class="
          border
          py-2
          px-4
          cursor-pointer
          rounded-tl-lg rounded-bl-lg
          hover:bg-blue-700 hover:text-white hover:border-blue-700
        "
      >
        Prev
      </li>
      <li
        v-if="currentPage > 0"
        @click="updatePageNumber(currentPage - 1)"
        class="
          border
          py-2
          px-4
          hover:bg-blue-700 hover:text-white hover:border-blue-700
          cursor-pointer
        "
      >
        {{ currentPage }}
      </li>
      <li
        class="
          border
          py-2
          px-4
          bg-blue-700
          text-white
          hover:bg-blue-700 hover:text-white hover:border-blue-700
          cursor-pointer
        "
      >
        {{ currentPage + 1 }}
      </li>
      <li
        class="
          border
          py-2
          px-4
          hover:bg-blue-700 hover:text-white hover:border-blue-700
          cursor-pointer
        "
        v-if="currentPage < maxPage"
        @click="updatePageNumber(currentPage + 1)"
      >
        {{ currentPage + 2 }}
      </li>
      <li
        @click="updatePageNumber(currentPage + 1)"
        class="
          border
          py-2
          px-4
          rounded-tr-lg rounded-br-lg
          hover:bg-blue-700 hover:text-white hover:border-blue-700
          cursor-pointer
        "
      >
        Next
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    maxPage: Number,
  },
  methods: {
    updatePageNumber(newPageNumber) {
      if (newPageNumber >= 0 && newPageNumber <= this.maxPage) {
        this.$emit("pageChange", newPageNumber);
      }
    },
  },
};
</script>

<style>
</style>