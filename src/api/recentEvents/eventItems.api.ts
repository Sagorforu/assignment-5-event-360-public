export const getEventItems = async () => {
  return await fetch(
    "https://event360-assignment-5.vercel.app/event-items"
  ).then((res) => res.json());
};
