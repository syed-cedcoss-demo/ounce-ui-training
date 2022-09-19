export const getCall = async (url) => {
  try {
    fetch(url)
      .then((response) => {
        console.log("response.json()", response.json());
        return response;
      })
      .catch((err) => {
        console.log("err", err);
        return err;
      });
  } catch (error) {}
};

export default getCall;
