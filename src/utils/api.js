import { getToken } from "./token";

const authString = btoa(
  `382c2e14-c394-4847-8a9a-e9da77a53ead:362c841dced1a0b49f00398247de79a4b4455b973dd5c521ef8b6502ccf83920813893bdf2ec8f11082d7a0f2310ba8809b28e22642761298db64c5ba6927ce812d2218c657760c5712afce9b644aa78dd7d7c7d4b92e7fb8e092fa29aee07ed8c6639b058bcdf6062ca9771e523c90b`
);

const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
};

const getPositions = ({ search, lat, long, from, to, time }) => {
  let params = new URLSearchParams("");

  // Add a third parameter.
  params.set("search", search);
  params.set("longitude", long);
  params.set("latitude", lat);
  params.set("from_date", from);
  params.set("to_date", to);
  params.set("time", time);
  return fetch(
    `https://api.astronomyapi.com/api/v2/bodies/positions?${params.toString()}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: authString,
      },
    }
  ).then(checkResponse);
};

export { getPositions };
