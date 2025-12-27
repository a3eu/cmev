import eventsData from "@/data/events.json";

export interface Event {
  id: string;
  date: string;
  title: string;
  time?: string;
  location: string;
  city?: string;
  description?: string;
  link?: string;
}

export function getEvents(): Event[] {
  return eventsData.events as Event[];
}

// Parse date string as local time to avoid timezone issues
function parseLocalDate(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day); // month is 0-indexed
}

export function getUpcomingEvents(): Event[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return getEvents()
    .filter((event) => parseLocalDate(event.date) >= today)
    .sort((a, b) => parseLocalDate(a.date).getTime() - parseLocalDate(b.date).getTime());
}

export function getPastEvents(): Event[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return getEvents()
    .filter((event) => parseLocalDate(event.date) < today)
    .sort((a, b) => parseLocalDate(b.date).getTime() - parseLocalDate(a.date).getTime());
}

export function formatEventDate(dateString: string): string {
  const date = parseLocalDate(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}


