import { shallowMount } from "@vue/test-utils";
import EventCard from "@/components/EventCard.vue";

describe("EventCard.vue", () => {
  it("renders props.msg when passed", () => {
    const event = {
      name: "East Conf Semis: 76ers vs Heat Round 2 Home Game 2",
      type: "event",
      id: "vvG1FZ9kXIUxLf",
      test: false,
      url: "https://www.ticketmaster.com/east-conf-semis-76ers-vs-heat-philadelphia-pennsylvania-05-08-2022/event/02005C6FA8DA27D4",
      locale: "en-us",
      images: [
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_TABLET_LANDSCAPE_3_2.jpg",
          width: 1024,
          height: 683,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_RECOMENDATION_16_9.jpg",
          width: 100,
          height: 56,
          fallback: false,
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_ARTIST_PAGE_3_2.jpg",
          width: 305,
          height: 203,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_RETINA_LANDSCAPE_16_9.jpg",
          width: 1136,
          height: 639,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_TABLET_LANDSCAPE_LARGE_16_9.jpg",
          width: 2048,
          height: 1152,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_RETINA_PORTRAIT_16_9.jpg",
          width: 640,
          height: 360,
          fallback: false,
        },
        {
          ratio: "4_3",
          url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_CUSTOM.jpg",
          width: 305,
          height: 225,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_EVENT_DETAIL_PAGE_16_9.jpg",
          width: 205,
          height: 115,
          fallback: false,
        },
        {
          ratio: "16_9",
          url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_TABLET_LANDSCAPE_16_9.jpg",
          width: 1024,
          height: 576,
          fallback: false,
        },
        {
          ratio: "3_2",
          url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_RETINA_PORTRAIT_3_2.jpg",
          width: 640,
          height: 427,
          fallback: false,
        },
      ],
      sales: {
        public: {
          startDateTime: "2022-04-27T14:00:00Z",
          startTBD: false,
          startTBA: false,
          endDateTime: "2022-05-09T00:00:00Z",
        },
        presales: [
          {
            startDateTime: "2022-04-05T16:00:00Z",
            endDateTime: "2022-07-02T00:00:00Z",
            name: "Resale",
          },
          {
            startDateTime: "2022-04-26T13:30:00Z",
            endDateTime: "2022-04-27T13:59:00Z",
            name: "76ers Playoffs Presale",
          },
        ],
      },
      dates: {
        start: {
          localDate: "2022-05-08",
          localTime: "20:00:00",
          dateTime: "2022-05-09T00:00:00Z",
          dateTBD: false,
          dateTBA: false,
          timeTBA: false,
          noSpecificTime: false,
        },
        timezone: "America/New_York",
        status: {
          code: "onsale",
        },
        spanMultipleDays: false,
      },
      classifications: [
        {
          primary: true,
          segment: {
            id: "KZFzniwnSyZfZ7v7nE",
            name: "Sports",
          },
          genre: {
            id: "KnvZfZ7vAde",
            name: "Basketball",
          },
          subGenre: {
            id: "KZazBEonSMnZfZ7vFJA",
            name: "NBA",
          },
          type: {
            id: "KZAyXgnZfZ7v7l1",
            name: "Group",
          },
          subType: {
            id: "KZFzBErXgnZfZ7vA7d",
            name: "Team",
          },
          family: false,
        },
      ],
      promoter: {
        id: "696",
        name: "NBA PLAYOFFS & FINALS",
        description: "NBA PLAYOFFS & FINALS / NTL / USA",
      },
      promoters: [
        {
          id: "696",
          name: "NBA PLAYOFFS & FINALS",
          description: "NBA PLAYOFFS & FINALS / NTL / USA",
        },
      ],
      priceRanges: [
        {
          type: "standard",
          currency: "USD",
          min: 85.0,
          max: 1000.0,
        },
      ],
      products: [
        {
          name: "Parking - East Conf Semis: 76ers vs Heat Round 2 Home Game 2",
          id: "vvG1FZ9Fkh0VpH",
          url: "https://www.ticketmaster.com/parking-east-conf-semis-76ers-vs-philadelphia-pennsylvania-05-08-2022/event/02005C819B9345BC",
          type: "Parking",
          classifications: [
            {
              primary: true,
              segment: {
                id: "KZFzniwnSyZfZ7v7n1",
                name: "Miscellaneous",
              },
              genre: {
                id: "KnvZfZ7v7ll",
                name: "Undefined",
              },
              subGenre: {
                id: "KZazBEonSMnZfZ7vAv1",
                name: "Undefined",
              },
              type: {
                id: "KZAyXgnZfZ7vAva",
                name: "Parking",
              },
              subType: {
                id: "KZFzBErXgnZfZ7vAFe",
                name: "Parking",
              },
              family: false,
            },
          ],
        },
      ],
      seatmap: {
        staticUrl:
          "https://maps.ticketmaster.com/maps/geometry/3/event/02005C6FA8DA27D4/staticImage?type=png&systemId=HOST",
      },
      accessibility: {},
      ticketLimit: {
        info: "There is an 4 ticket limit for this event",
      },
      ageRestrictions: {
        legalAgeEnforced: false,
      },
      code: "PHI:ESXR2G2",
      _links: {
        self: {
          href: "/discovery/v2/events/vvG1FZ9kXIUxLf?locale=en-us",
        },
        attractions: [
          {
            href: "/discovery/v2/attractions/K8vZ9171oZ0?locale=en-us",
          },
          {
            href: "/discovery/v2/attractions/K8vZ9171oZ7?locale=en-us",
          },
        ],
        venues: [
          {
            href: "/discovery/v2/venues/KovZpZAF6FtA?locale=en-us",
          },
        ],
      },
      _embedded: {
        venues: [
          {
            name: "Wells Fargo Center",
            type: "venue",
            id: "KovZpZAF6FtA",
            test: false,
            url: "https://www.ticketmaster.com/wells-fargo-center-tickets-philadelphia/venue/16534",
            locale: "en-us",
            postalCode: "19145",
            timezone: "America/New_York",
            city: {
              name: "Philadelphia",
            },
            state: {
              name: "Pennsylvania",
              stateCode: "PA",
            },
            country: {
              name: "United States Of America",
              countryCode: "US",
            },
            address: {
              line1: "3601 South Broad St",
            },
            location: {
              longitude: "-75.1736273",
              latitude: "39.904551",
            },
            markets: [
              {
                name: "Philadelphia",
                id: "18",
              },
            ],
            dmas: [
              {
                id: 294,
              },
              {
                id: 358,
              },
              {
                id: 416,
              },
            ],
            boxOfficeInfo: {
              willCallDetail:
                "WILL CALL OPENS ONE HOUR PRIOR TO SHOW. PURCHASING CREDIT CARD REQUIRED TO PICK UP TICKETS - WILL CALL IS LOCATED AT THE MAIN BOX OFFICE ON THE BROAD STREET SOUTH SIDE OF THE CTR.",
            },
            parkingDetail:
              "PLENTY OF PARKING AROUND FACILITY. *PRICE VARIES WITH EVENT *ROAMING SECURITY PATROLS THROUGHOUT PARKING AREA UNTIL ONE HOUR AFTER THE GAME IS COMPLETED *A TOW TRUCK WILL BE ON SITE AT EVERY EVENT APPROXIMATELY ONE HOUR AFTER THE EVENT BEGINS AND STAYING ONE HOUR AFTER THE EVENT IS COMPLETED. *SERVICES PROVIDED BY THE CENTER INCLUDE JUMP STARTS, OPENING OF LOCKED DOORS, AND TOWING CAPABILITIES TO ANYWHERE IN THE TRI-STATE AREA. *ALL SERVICES ARE FREE EXCEPT FOR TOWING COSTS.",
            accessibleSeatingDetail:
              "THE CENTER IS EQUIPPED WITH ELEVATORS AND ACCESSIBLE SEATING IS AVAILABLE. FOR INFORMATION ON ACCESSIBLE SEATING, PLEASE CALL (215) 389-9571. TELECOMMUNICATION DEVICE FOR THE DEAF,(TDD) CALL (215) 389-9599",
            upcomingEvents: {
              _total: 41,
              tmr: 21,
              ticketmaster: 20,
              _filtered: 0,
            },
            _links: {
              self: {
                href: "/discovery/v2/venues/KovZpZAF6FtA?locale=en-us",
              },
            },
          },
        ],
        attractions: [
          {
            name: "Philadelphia 76ers",
            type: "attraction",
            id: "K8vZ9171oZ0",
            test: false,
            url: "https://www.ticketmaster.com/philadelphia-76ers-tickets/artist/805998",
            locale: "en-us",
            externalLinks: {
              twitter: [
                {
                  url: "https://twitter.com/Sixers",
                },
              ],
              wiki: [
                {
                  url: "https://en.wikipedia.org/wiki/Philadelphia_76ers",
                },
              ],
              facebook: [
                {
                  url: "https://www.facebook.com/Sixers",
                },
              ],
              instagram: [
                {
                  url: "https://www.instagram.com/Sixers/",
                },
              ],
              homepage: [
                {
                  url: "https://www.nba.com/sixers/",
                },
              ],
            },
            aliases: [
              "philadelphia sixers",
              "philadelphia 76ers",
              "sixers",
              "philadelphia",
            ],
            images: [
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_TABLET_LANDSCAPE_3_2.jpg",
                width: 1024,
                height: 683,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_RECOMENDATION_16_9.jpg",
                width: 100,
                height: 56,
                fallback: false,
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_ARTIST_PAGE_3_2.jpg",
                width: 305,
                height: 203,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_RETINA_LANDSCAPE_16_9.jpg",
                width: 1136,
                height: 639,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                width: 2048,
                height: 1152,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_RETINA_PORTRAIT_16_9.jpg",
                width: 640,
                height: 360,
                fallback: false,
              },
              {
                ratio: "4_3",
                url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_CUSTOM.jpg",
                width: 305,
                height: 225,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_EVENT_DETAIL_PAGE_16_9.jpg",
                width: 205,
                height: 115,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_TABLET_LANDSCAPE_16_9.jpg",
                width: 1024,
                height: 576,
                fallback: false,
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/94e/ec74f677-ac36-4f43-9eda-df3fec87e94e_1490311_RETINA_PORTRAIT_3_2.jpg",
                width: 640,
                height: 427,
                fallback: false,
              },
            ],
            classifications: [
              {
                primary: true,
                segment: {
                  id: "KZFzniwnSyZfZ7v7nE",
                  name: "Sports",
                },
                genre: {
                  id: "KnvZfZ7vAde",
                  name: "Basketball",
                },
                subGenre: {
                  id: "KZazBEonSMnZfZ7vFJA",
                  name: "NBA",
                },
                type: {
                  id: "KZAyXgnZfZ7v7l1",
                  name: "Group",
                },
                subType: {
                  id: "KZFzBErXgnZfZ7vA7d",
                  name: "Team",
                },
                family: false,
              },
            ],
            upcomingEvents: {
              _total: 9,
              ticketmaster: 9,
              _filtered: 0,
            },
            _links: {
              self: {
                href: "/discovery/v2/attractions/K8vZ9171oZ0?locale=en-us",
              },
            },
          },
          {
            name: "Miami Heat",
            type: "attraction",
            id: "K8vZ9171oZ7",
            test: false,
            url: "https://www.ticketmaster.com/miami-heat-tickets/artist/805966",
            locale: "en-us",
            externalLinks: {
              twitter: [
                {
                  url: "https://twitter.com/miamiheat/",
                },
              ],
              wiki: [
                {
                  url: "https://en.wikipedia.org/wiki/Miami_Heat",
                },
              ],
              facebook: [
                {
                  url: "https://www.facebook.com/MiamiHeat/",
                },
              ],
              instagram: [
                {
                  url: "https://www.instagram.com/miamiheat/",
                },
              ],
              homepage: [
                {
                  url: "https://www.nba.com/heat/",
                },
              ],
            },
            images: [
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/599/f9331497-7667-4f9d-9d26-d144cb25a599_1339911_RETINA_PORTRAIT_16_9.jpg",
                width: 640,
                height: 360,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/599/f9331497-7667-4f9d-9d26-d144cb25a599_1339911_TABLET_LANDSCAPE_16_9.jpg",
                width: 1024,
                height: 576,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/599/f9331497-7667-4f9d-9d26-d144cb25a599_1339911_RETINA_LANDSCAPE_16_9.jpg",
                width: 1136,
                height: 639,
                fallback: false,
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/599/f9331497-7667-4f9d-9d26-d144cb25a599_1339911_RETINA_PORTRAIT_3_2.jpg",
                width: 640,
                height: 427,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/599/f9331497-7667-4f9d-9d26-d144cb25a599_1339911_EVENT_DETAIL_PAGE_16_9.jpg",
                width: 205,
                height: 115,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/599/f9331497-7667-4f9d-9d26-d144cb25a599_1339911_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                width: 2048,
                height: 1152,
                fallback: false,
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/599/f9331497-7667-4f9d-9d26-d144cb25a599_1339911_ARTIST_PAGE_3_2.jpg",
                width: 305,
                height: 203,
                fallback: false,
              },
              {
                ratio: "16_9",
                url: "https://s1.ticketm.net/dam/a/599/f9331497-7667-4f9d-9d26-d144cb25a599_1339911_RECOMENDATION_16_9.jpg",
                width: 100,
                height: 56,
                fallback: false,
              },
              {
                ratio: "3_2",
                url: "https://s1.ticketm.net/dam/a/599/f9331497-7667-4f9d-9d26-d144cb25a599_1339911_TABLET_LANDSCAPE_3_2.jpg",
                width: 1024,
                height: 683,
                fallback: false,
              },
              {
                ratio: "4_3",
                url: "https://s1.ticketm.net/dam/a/599/f9331497-7667-4f9d-9d26-d144cb25a599_1339911_CUSTOM.jpg",
                width: 305,
                height: 225,
                fallback: false,
              },
            ],
            classifications: [
              {
                primary: true,
                segment: {
                  id: "KZFzniwnSyZfZ7v7nE",
                  name: "Sports",
                },
                genre: {
                  id: "KnvZfZ7vAde",
                  name: "Basketball",
                },
                subGenre: {
                  id: "KZazBEonSMnZfZ7vFJA",
                  name: "NBA",
                },
                type: {
                  id: "KZAyXgnZfZ7v7l1",
                  name: "Group",
                },
                subType: {
                  id: "KZFzBErXgnZfZ7vA7d",
                  name: "Team",
                },
                family: false,
              },
            ],
            upcomingEvents: {
              _total: 4,
              ticketmaster: 4,
              _filtered: 0,
            },
            _links: {
              self: {
                href: "/discovery/v2/attractions/K8vZ9171oZ7?locale=en-us",
              },
            },
          },
        ],
      },
    };
    const wrapper = shallowMount(EventCard, {
      propsData: { event },
    });
    expect(wrapper.find(".text-base.whitespace-nowrap").text()).toMatch(
      "East Conf Semis: 76ers vs Heat Round 2 Home Game 2"
    );
    expect(wrapper.find(".text-xs.ml-2").text()).toMatch("Philadelphia, US");
  });
});
