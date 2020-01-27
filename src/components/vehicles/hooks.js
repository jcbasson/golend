import { useState, useEffect } from "react";
import { httpGet } from "../../services/httpService";

//TODO: Make this generic and reusable for other fetching
export const useFetchVehicles = (fetchUrl, year) => {
  const [vehicles, setVehicles] = useState({});

  useEffect(() => {
    httpGet(`${fetchUrl}/${year}`)
      .then(vehicles => {
        setVehicles(vehicles);
      })
      .catch(err => console.log("send to error log", err));
  }, [year, fetchUrl]);

  return [vehicles];
};
