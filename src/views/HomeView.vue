<template>
  <div class="home-wrapper lg:px-4">
    <search-panel @searchParams="getSearchParams" />
    <div class="container mx-auto">
      <div class="flex items-center justify-between" v-if="events.length !== 0">
        <p class="my-4 text-left">Found {{ page.totalElements }} events</p>
        <div class="flex items-center my-4">
          <select
            @change="onSelectSortOption"
            v-model="sort.field"
            class="border rounded-lg px-4 py-1 focus:outline-0 mx-2"
          >
            <option value="">Select Field</option>
            <option
              v-for="field of sortableFields"
              :key="field.key"
              :value="field.key"
            >
              {{ field.displayName }}
            </option>
          </select>
          <button
            class="
              flex
              items-center
              bg-blue-700
              text-white
              px-4
              py-1
              mx-1
              rounded
            "
            v-if="sort.field !== ''"
            @click="toggleSortType()"
          >
            <span>{{ sort.type }}</span>
            <em
              class="pi pi-arrow-down text-white pl-2"
              v-if="sort.type === 'asc'"
            ></em>
            <em
              class="pi pi-arrow-up text-white pl-2"
              v-if="sort.type === 'desc'"
            ></em>
          </button>

          <div>
            <span>Items per page</span>
            <select
              class="focus:outline-0 border rounded-lg px-4 py-1 mx-2"
              v-model="page.size"
              @change="pageSizeChanged"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="200">200</option>
            </select>
          </div>
        </div>
      </div>
      <div
        class="
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-4
        "
        v-if="events.length !== 0"
      >
        <event-card
          v-for="event of events"
          :key="event.id"
          :event="event"
          @navigate="navigateToEvent"
        ></event-card>
      </div>
      <div
        class="
          empty-wrapper
          text-center
          my-10
          shadow
          p-10
          flex flex-col
          justify-center
          rounded-lg
        "
        v-if="events.length === 0"
      >
        <img src="@/assets/empty.svg" alt="no result" class="w-80 mx-auto" />
        <h4 class="text-lg mt-4">No events found</h4>
      </div>
      <div class="flex justify-end">
        <event-paginator
          :currentPage="parseInt(page.number, 10)"
          :maxPage="parseInt(page.size, 10)"
          @pageChange="pageNumberChange"
          v-if="events.length !== 0"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SearchPanel from "@/components/SearchPanel.vue";
import EventCard from "@/components/EventCard.vue";
import EventPaginator from "@/components/EventPaginator.vue";

import { SORTABLE_FIELDS } from "@/constants/sortableFields.js";

import { searchEvents } from "@/services/events.js";

export default {
  name: "HomeView",
  data() {
    return {
      events: [],
      page: {
        size: 20,
        number: 0,
        totalElements: 0,
        totalPages: 0,
      },
      sort: {
        field: "",
        type: "",
        finalKey: "",
      },
      sortableFields: SORTABLE_FIELDS,
      searchParams: {},
    };
  },
  mounted() {
    const currentPageNumber = sessionStorage.getItem("CURRENT_PAGE");
    if (currentPageNumber) {
      this.page.number = parseInt(currentPageNumber, 10);
      this.search();
    }
  },
  components: {
    SearchPanel,
    EventCard,
    EventPaginator,
  },
  methods: {
    getSearchParams(params) {
      this.searchParams = params;
      this.search();
    },
    async search() {
      const response = await searchEvents(
        this.searchParams,
        this.page.number,
        this.page.size,
        this.sort.finalKey
      );
      this.page = response.page;
      this.events = response.events;
    },
    pageNumberChange(e) {
      this.page.number = e;
      this.search();
    },
    pageSizeChanged() {
      this.search();
    },
    onSelectSortOption() {
      if (this.sort.field !== "") {
        this.sort.type = this.sort.type === "" ? "asc" : this.sort.type;
        this.setSortKey();
        this.search();
      }
    },
    toggleSortType() {
      this.sort.type = this.sort.type === "asc" ? "desc" : "asc";
      this.setSortKey();
      this.search();
    },
    setSortKey() {
      this.sort.finalKey = `${this.sort.field},${this.sort.type}`;
    },
    navigateToEvent(e) {
      sessionStorage.setItem("CURRENT_PAGE", this.page.number);
      this.$router.push({ name: "event", params: { id: e.id } });
    },
  },
};
</script>
