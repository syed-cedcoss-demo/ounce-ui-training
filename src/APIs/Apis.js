export const getCall = async (url) => {
  const option = {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    const result = await fetch(url, option);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const postCall = async (url, body) => {
  const option = {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body,
  };
  try {
    const result = await fetch(url, option);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
