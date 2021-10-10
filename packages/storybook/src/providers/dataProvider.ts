import jsonServerProvider from "ra-data-json-server";

export const dataProvider = jsonServerProvider(
  "https://jsonplaceholder.typicode.com"
);

// export const jsonServerProvider = jsonServerProvider("http://localhost:3000");
