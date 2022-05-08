<template>
  <div
    class="
      event-wrapper
      flex-col
      shadow-sm
      border
      rounded-lg
      hover:shadow-xl
      cursor-pointer
    "
    @click="navigateToEvent"
  >
    <div class="relative">
      <img
        :src="event.images[0].url"
        :alt="event.name"
        class="w-full rounded-lg rounded-bl-none rounded-br-none h-auto lg:h-52"
      />
      <div class="absolute bottom-0 px-4">
        <div class="flex my-4 justify-start">
          <div
            class="rounded-full bg-blue-700 text-white px-4 py-1 text-xs"
            v-for="(genre, index) of getGenres"
            :key="genre + index"
          >
            {{ genre }}
          </div>
        </div>
      </div>
    </div>

    <div class="event-details flex flex-col text-left text-base p-4 relative">
      <h3 class="text-base whitespace-nowrap text-ellipsis overflow-hidden">
        {{ event.name }}
      </h3>
      <div class="mt-4 text-xs flex bottom-0 align-bottom">
        <span>{{ getStartDate }}</span>
        <address
          class="text-xs ml-2"
          v-if="
            event._embedded &&
            event._embedded.venues &&
            event._embedded.venues.length > 0
          "
        >
          {{ getAddresses }}
        </address>
      </div>
      <em
        class="
          pi pi-arrow-right
          absolute
          bottom-4
          right-4
          hover:translate-x-1
          transition-transform
        "
      ></em>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    event: {},
  },
  mounted() {},
  computed: {
    getAddresses() {
      let addresses = "";

      addresses = this.event._embedded.venues
        .map(
          (venue) =>
            `${venue.city && venue.city.name}, ${venue.country.countryCode}`
        )
        .join(" ");
      return addresses;
    },
    getGenres() {
      let genre = [];
      if (this.event.classifications && this.event.classifications.length > 0) {
        genre = this.event.classifications.map(
          (classification) => classification.genre.name
        );
        genre = genre.filter((g) => g.toLowerCase() !== "undefined");
      }
      return genre;
    },
    getStartDate() {
      return moment(this.event.dates.start.dateTime).format("MMM Do YYYY");
    },
  },
  methods: {
    navigateToEvent() {
      this.$emit("navigate", this.event);
    },
  },
};
</script>

<style>
</style>