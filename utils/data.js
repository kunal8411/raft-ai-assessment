import axios from "axios";

export async function fetchData() {
  try {
    const response = await axios.get(`${process.env.base_url}/api`);
    if (!response.data.success) {
      console.error("Error fetching data");
      return;
    }

    return response.data.allUsers;
  } catch (error) {
    console.error("Error fetching data:", error);
    return;
  }
}

export async function updateData(updatedData) {
  try {
    let data = await fetchData();
    let result = await compareArrays(data, updatedData);
    if (!result) {
      const response = await fetch(`${process.env.base_url}/api`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      const updatedDataResponse = await response.json();
      return updatedDataResponse;
    }
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
}

export async function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].type !== arr2[i].type) {
      return false;
    }
  }
  return true;
}
