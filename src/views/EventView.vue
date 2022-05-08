<template>
  <div class="event-view-wrapper lg:px-4">
    <div class="container mx-auto" v-if="event">
      <div class="grid grid-cols-1 xl:grid-cols-3 xl:gap-4">
        <div class="">
          <img
            v-if="event.images && event.images.length > 0"
            :src="event.images[0].url"
            :alt="event.name"
            class="w-full rounded-lg"
          />
        </div>
        <div class="col-span-2 text-left my-4 xl:my-0">
          <div class="flex mb-4 justify-start">
            <div
              class="rounded-full bg-blue-700 text-white px-4 py-1 text-xs mx-2"
              v-for="(classification, index) of getClassification"
              :key="classification.name + index"
            >
              {{ classification.name }}
            </div>
          </div>
          <h1 class="text-3xl">{{ event.name }}</h1>
          <p v-if="event.description" class="my-2">{{ event.description }}</p>
          <p v-if="event.additionalInfo" class="my-2">
            {{ event.additionalInfo }}
          </p>
          <p v-if="event.dates" class="my-2">{{ getStartDate }}</p>
          <p class="my-2 text-2xl font-bold">{{ getPriceRange }}</p>
          <a :href="event.url" target="_blank">
            <button
              class="bg-blue-700 rounded-full px-6 py-2 text-white shadow my-4"
            >
              View Event
            </button>
          </a>
          <p class="text-gray-400 my-2" v-if="event.pleaseNote">
            {{ event.pleaseNote }}
          </p>
          <p
            class="text-red-500 font-semibold"
            v-if="event.ticketLimit && event.ticketLimit.info"
          >
            {{ event.ticketLimit.info }}
          </p>
          <div
            class="mt-4 border-t py-4"
            v-if="event.seatmap && event.seatmap.staticUrl"
          >
            <h4 class="text-lg font-semibold">Seat Map</h4>
            <img
              :src="event.seatmap.staticUrl"
              alt="seat map"
              class="w-full xl:w-1/2"
            />
          </div>
        </div>
      </div>
      <div class="section my-4">
        <div class="flex items-center justify-between my-4">
          <h3 class="text-2xl text-left">Venue</h3>
          <div class="border-t w-11/12"></div>
        </div>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4"
          v-if="event._embedded"
        >
          <div
            v-for="venue of event._embedded.venues"
            :key="venue.id"
            class="border rounded-lg p-4 text-left"
          >
            <h4 class="text-xl mb-4">{{ venue.name }}</h4>
            <address class="text-sm">
              {{ getVenueAddress(venue) }}
            </address>
            <div v-if="venue.images && venue.images.length > 0" class="mt-4">
              <img
                v-for="(image, index) of venue.images"
                :key="'image' + index"
                :src="image.url"
                :alt="image.attribution"
                class="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="section my-4">
        <div class="flex items-center justify-between my-4">
          <h3 class="text-2xl text-left">Promoters</h3>
          <div class="border-t w-10/12"></div>
        </div>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4"
          v-if="event.promoters"
        >
          <div
            v-for="promoter of event.promoters"
            :key="'promoter' + promoter.id"
            class="border rounded-lg p-4 text-left"
          >
            <h4 class="text-xl mb-4 font-semibold">{{ promoter.name }}</h4>
            <p>{{ promoter.description }}</p>
          </div>
        </div>
      </div>

      <div class="section my-4">
        <div class="flex items-center justify-between my-4">
          <h3 class="text-2xl text-left">Attractions</h3>
          <div class="border-t w-10/12"></div>
        </div>
        <div
          class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4"
          v-if="event._embedded"
        >
          <div
            v-for="attraction of event._embedded.attractions"
            :key="attraction.id"
            class="border rounded-lg p-4 text-left"
          >
            <h4 class="text-xl mb-4">{{ attraction.name }}</h4>
            <div
              v-if="attraction.images && attraction.images.length > 0"
              class="mt-4"
            >
              <img
                :src="attraction.images[0].url"
                :alt="attraction.images[0].attribution"
                class="w-full rounded-lg xl:h-52 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getEventService } from "@/services/events.js";
import moment from "moment";

export default {
  data() {
    return {
      event: {},
    };
  },
  mounted() {
    if (this.$route.params.id) {
      this.getEventDetail(this.$route.params.id);
    }
  },

  computed: {
    getClassification() {
      let classifications = [];
      if (this.event.classifications) {
        this.event.classifications.map((classification) => {
          classifications.push({
            type: "segment",
            name: classification.segment.name,
          });
          classifications.push({
            type: "genre",
            name: classification.genre.name,
          });
        });
        classifications = classifications.filter(
          (classification) => classification.name.toLowerCase() !== "undefined"
        );
      }
      return classifications;
    },
    getStartDate() {
      return moment(this.event.dates.start.dateTime).format(
        "MMM Do YYYY, hh:mm A"
      );
    },
    getPriceRange() {
      let priceRange = "";
      if (this.event.priceRanges && this.event.priceRanges.length > 0) {
        priceRange = `${this.event.priceRanges[0].min} ${this.event.priceRanges[0].currency} - ${this.event.priceRanges[0].max} ${this.event.priceRanges[0].currency}`;
      }
      return priceRange;
    },
  },
  methods: {
    async getEventDetail(id) {
      this.event = await getEventService(id);
    },
    getVenueAddress(venue) {
      return `${venue.address.line1}, ${venue.city.name}, ${
        venue.state && venue.state.name
      }, ${venue.country.countryCode} ${venue.postalCode}`;
    },
  },
};
</script>
