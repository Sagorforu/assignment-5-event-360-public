export const getServices = async () => {
  return await fetch("https://event360-assignment-5.vercel.app/services").then(
    (res) => res.json()
  );
};
