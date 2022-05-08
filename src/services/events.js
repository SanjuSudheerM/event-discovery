import axios from "axios";

export async function searchEvents(searchParams, pageNumber, size = 20, sort) {
  let responseObject = { events: [], page: {} };
  try {
    const request = await axios.get(
      constructSearchQuery(searchParams, pageNumber, size, sort)
    );
    const response = await request.data;
    if (response._embedded) {
      responseObject.events = response._embedded.events;
    }
    responseObject.page = response.page;
  } catch (e) {
    console.error(e);
  }
  return responseObject;
}

function constructSearchQuery(searchParams, pageNumber, size, sort) {
  const sortString = sort ? `&sort=${sort}` : "";
  const defaultUrl = `${process.env.VUE_APP_SERVICE_URL}?apikey=${process.env.VUE_APP_API_KEY}&page=${pageNumber}&size=${size}${sortString}`;
  const query = Object.keys(searchParams)
    .map((key) => {
      return `${key}=${searchParams[key]}`;
    })
    .join("&");

  return query.length > 0 ? `${defaultUrl}&${query}` : defaultUrl;
}

export async function getEventService(eventId) {
  let data = null;
  try {
    const url = `${process.env.VUE_APP_SERVICE_URL}/${eventId}?apikey=${process.env.VUE_APP_API_KEY}`;
    const request = await axios.get(url);
    data = await request.data;
  } catch (e) {
    console.error(e);
  }
  return data;
}
