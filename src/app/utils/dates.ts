export const formatGroupDayAndTime = (isoString: string): string => {
  const date = new Date(isoString);

  const dayOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    timeZone: "UTC",
  };
  const day = new Intl.DateTimeFormat("en-US", dayOptions).format(date);

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "UTC", // Ensure it is treated as UTC time
  };
  const time = new Intl.DateTimeFormat("en-US", timeOptions).format(date);

  return `${day}s at ${time}`;
};

export const formatEventDayAndTime = (isoString: string): string => {
  const date = new Date(isoString);

  const dayOptions: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  const day = new Intl.DateTimeFormat("en-US", dayOptions).format(date);

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "UTC", // Ensure it is treated as UTC time
  };
  const time = new Intl.DateTimeFormat("en-US", timeOptions).format(date);

  return `${day} at ${time}`;
};
