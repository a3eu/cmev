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

export function getUpcomingEvents(): Event[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return getEvents()
    .filter((event) => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getPastEvents(): Event[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return getEvents()
    .filter((event) => new Date(event.date) < today)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function formatEventDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}


