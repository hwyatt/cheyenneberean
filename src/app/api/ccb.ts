import moment from "moment";

export type CCBEventResponse = {
  event_id: number;
  occurrence: string;
  start: string; // ISO date-time string
  end: string; // ISO date-time string
  event: {
    id: number;
    campus_id: number;
    name: string;
    description: string;
    start: string; // ISO date-time string
    end: string; // ISO date-time string
    owner_id: number;
    setup: string; // ISO date-time string
    cleanup: string; // ISO date-time string
    group: {
      id: string;
      name: string;
      grouping_id: string;
    };
    guest_counts: {
      going: number;
      maybe: number;
      not_going: number;
      not_responded: number;
      requesting: number;
    };
    recurs: boolean;
    recur_end_date: string | null; // Nullable ISO date-time string
    recurrence: {
      frequency: string;
      interval: string;
      frequency_modifier: string;
      end: string | null; // Nullable ISO date-time string
    };
    images: {
      thumbnail: string;
      large: string;
      medium: string;
    };
    checkin: {
      grouping_id: number;
      room_ratio: number;
      room_description: string;
      checkin_label_type: string;
      checkin_label_quantity: number;
      attend_max_quantity: number;
      checkin_type: string;
      allowed: boolean;
      label_settings_source: string;
      label_settings_source_id: number;
      announcement: string | null;
    };
  };
  group_id: string;
  checkin_label_type: string;
};

export async function fetchEvents(
  id?: string,
  limit?: number,
  filter?: string
) {
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
    let data = await response.json();

    if (Array.isArray(data)) {
      if (filter) {
        filter = filter.toLowerCase();
        data = data.filter((item) =>
          item?.event?.group?.name?.toLowerCase().includes(filter)
        );
      }

      return data.slice(0, limit ? limit : 15);
    }

    return data;
  } catch (err) {
    console.log(err);
    return `Error fetching events from CCB: ${err}`;
  }
}
