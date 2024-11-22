const GEOCODE_API_URL = import.meta.env.VITE_GEOCODE_API_URL;

export const getAddress = async ({ latitude, longitude }) => {
  const res = await fetch(
    `${GEOCODE_API_URL}?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
};
