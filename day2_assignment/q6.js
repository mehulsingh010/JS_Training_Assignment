/* Create a promise that makes a fetch call, but resolves with the data only 2 seconds after
the data has been received in the fetch. */

async function fetchData() {
  const url = "https://reqres.in/api/users";

  try {
    const response = await fetch(url);
    const data = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (response) {
      console.log("Data fetched after 2 seconds", data);
    }
  } catch (error) {
    console.log(error.message);
  }
}

fetchData();
