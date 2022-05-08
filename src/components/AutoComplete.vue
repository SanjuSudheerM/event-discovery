<template>
  <vue-autosuggest
    :suggestions="filteredCountries"
    :input-props="{
      id: 'autosuggest__input',
      placeholder: 'Search Country',
      class: 'focus:outline-0 py-2 px-3 rounded border w-full',
    }"
    @input="searchCountry($event)"
    @selected="selectHandler"
    @click="clickHandler"
  >
    <template slot-scope="{ suggestion }">
      {{ suggestion.item.name }}
    </template>
  </vue-autosuggest>
</template>

<script>
import { COUNTRIES_WITH_CODES } from "@/constants/countries";

export default {
  components: {},
  data() {
    return {
      query: "",
      userRepositories: {},
      filteredCountries: [],
    };
  },

  methods: {
    selectHandler(e) {
      this.$emit("selectedCountry", e.item.code);
    },
    clickHandler: function () {},
    searchCountry: function (e) {
      const data = COUNTRIES_WITH_CODES.filter((country) =>
        country.name.toLowerCase().includes(e.toLowerCase())
      ).slice(0, 10);
      this.filteredCountries = [{ data }];
    },
  },
};
</script>
