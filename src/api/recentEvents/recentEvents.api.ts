export const getRecentEvents = async () => {
  return await fetch("http://localhost:5000/recent-events").then((res) =>
    res.json()
  );
};
