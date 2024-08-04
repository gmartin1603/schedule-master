const baseUrl = process.env.QAPP_BASEURL;

const commonService = {
  commonAPI: (params, data) => {
    return new Promise((resolve, reject) => {
      //   console.log("commonAPI", `${baseUrl}${params}`);
      fetch(`${baseUrl}${params}`, {
        method: "POST",
        // mode: "cors",
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          console.warn(`commonAPI ERROR - Method: ${params}`);
          console.error(err);
          reject(err);
        });
    });
  },
};

export default commonService;
