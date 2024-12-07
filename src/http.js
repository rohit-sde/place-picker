export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:1000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("failed to fetch places");
  }

  return resData.places;
}

export async function fetchUserPlaces() {
  const response = await fetch("http://localhost:1000/user-places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch user places");
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:1000/user-places", {
    method: "Put",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("Failed to update user data");
  }

  return resData.message;
}
