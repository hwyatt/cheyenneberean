import moment from "moment";

export async function fetchEvents(id?: string, limit?: number) {
  let url;
  if (id) {
    const [eventId, occurrenceDate] = id.split("-");
    url = `https://cheyenneberean.ccbchurch.com/api/events/${eventId}/occurrences/${occurrenceDate}`;
  } else {
    const start = moment().format("YYYY-MM-DD");
    const end = moment().add(1, "month").format("YYYY-MM-DD");

    url = `https://cheyenneberean.ccbchurch.com/api/calendar?page=1&type=PUBLIC&start=${start}&end=${end}&include_shared_events=false`;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    return Array.isArray(data) ? data.slice(0, limit ? limit : 15) : data;
  } catch (err) {
    console.log(err);
    return `Error fetching events from CCB: ${err}`;
  }
}
