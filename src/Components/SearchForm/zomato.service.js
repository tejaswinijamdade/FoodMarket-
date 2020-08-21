const userKey = process.env.REACT_APP_USER_KEY;

const zomatoBaseUrl = "https://developers.zomato.com/api/v2.1";

export function getLocationFromZomato(latitude, longitude) {
  return fetch(`${zomatoBaseUrl}/geocode?lat=${latitude}&lon=${longitude}`, {
    headers: {
      accept: "application/json",
      "user-key": userKey,
    },
    method: "GET",
  }).then((docs) => {
    if (docs.status === 200) {
      return docs.json();
    }
    throw new Error("Something went wrong contact developer");
  });
}

export function getNameFromZomato(query) {
  return fetch(`${zomatoBaseUrl}/search?q=${encodeURIComponent(query)}`, {
    headers: {
      accept: "application/json",
      "user-key": "62cbd0c5323ca3fc6daa01f4368da091",
    },
    method: "GET",
  }).then((docs) => {
    if (docs.status === 200) {
      return docs.json();
    }
    throw new Error("Something went wrong contact developer");
  });
}

export function getHotelInfoFromId(id) {
  return fetch(`${zomatoBaseUrl}/restaurant?res_id=${id}`, {
    headers: {
      accept: "application/json",
      "user-key": "62cbd0c5323ca3fc6daa01f4368da091",
    },
    method: "GET",
  }).then((docs) => {
    if (docs.status === 200) {
      return docs.json();
    }
    throw new Error("Something went wrong contact developer");
  });
}
