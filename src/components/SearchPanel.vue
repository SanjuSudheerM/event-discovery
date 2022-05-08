<template>
  <div class="search-panel-wrapper">
    <div class="container mx-auto">
      <div class="p-4 rounded-lg shadow-sm flex flex-col justify-start border">
        <div class="text-left mb-4">
          <h3 class="text-2xl">Search Events</h3>
        </div>
        <div class="flex flex-col lg:flex-row justify-around items-center mb-1">
          <div class="flex-1 w-full lg:w-auto mb-2 lg:mb-0 mr-0 lg:mr-2">
            <input
              type="text"
              class="focus:outline-0 py-2 px-3 rounded border w-full"
              placeholder="Search by event / venue / genre"
              v-model="form.keyword"
            />
          </div>
          <div class="flex-1 mx-0 lg:mx-2 w-full lg:w-auto mb-2 lg:mb-0">
            <auto-complete
              @selectedCountry="
                (e) => {
                  form.countryCode = e;
                }
              "
            />
          </div>
          <div class="flex-1 mx-0 lg:mx-2 w-full lg:w-auto mb-2 lg:mb-0">
            <vue-date-picker
              v-model="form.startDateTime"
              class="text-3xl focus:outline-0 py-1 px-3 rounded border"
            />
          </div>
          <div class="flex-1 mx-0 lg:mx-2 w-full lg:w-auto mb-2 lg:mb-0">
            <vue-date-picker
              v-model="form.endDateTime"
              class="text-3xl focus:outline-0 py-1 px-3 rounded border"
            />
          </div>
          <button
            class="
              py-2
              px-4
              rounded
              bg-blue-700
              text-white
              ml-0
              lg:ml-2
              hover:bg-blue-500
            "
            @click="searchEvents"
          >
            Search Events
          </button>
        </div>
        <div class="mt-4">
          <div class="flex">
            <div class="flex items-center">
              <input
                type="checkbox"
                id="includeTBA"
                class="mr-2"
                v-model="form.includeTBA"
              />
              <label for="includeTBA">Include TBA</label>
            </div>
            <div class="flex items-center mx-4">
              <input
                type="checkbox"
                id="includeTBD"
                class="mr-2"
                v-model="form.includeTBD"
              />
              <label for="includeTBD">Include TBD</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AutoComplete from "./AutoComplete.vue";
export default {
  components: { AutoComplete },
  data() {
    return {
      form: {
        keyword: "",
        countryCode: "",
        startDateTime: null,
        endDateTime: null,
        includeTBD: false,
        includeTBA: false,
      },
    };
  },
  methods: {
    searchEvents() {
      const finalSearchParam = { ...this.form };
      if (this.form.keyword.length === 0) {
        delete finalSearchParam.keyword;
      }
      if (this.form.countryCode.length === 0) {
        delete finalSearchParam.countryCode;
      }
      if (this.form.startDateTime) {
        finalSearchParam.startDateTime =
          new Date(this.form.startDateTime).toISOString().split(".")[0] + "Z";
      } else {
        delete finalSearchParam.startDateTime;
      }

      if (this.form.endDateTime) {
        finalSearchParam.endDateTime =
          new Date(this.form.endDateTime).toISOString().split(".")[0] + "Z";
      } else {
        delete finalSearchParam.endDateTime;
      }

      finalSearchParam.includeTBD = this.form.includeTBD ? "yes" : "no";
      finalSearchParam.includeTBA = this.form.includeTBA ? "yes" : "no";

      this.$emit("searchParams", finalSearchParam);
    },
  },
};
</script>

<style>
</style>