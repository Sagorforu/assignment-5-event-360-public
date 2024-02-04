export const getRecentEvents = async () => {
  return await fetch(
    "https://event360-assignment-5.vercel.app/recent-events"
  ).then((res) => res.json());
};
