export const getServices = async () => {
  return await fetch("http://localhost:5000/services").then((res) =>
    res.json()
  );
};