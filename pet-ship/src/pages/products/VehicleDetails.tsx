import React, { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

interface IProductData {
  id: number;
}

export const VehicleDetails = () => {
  const { id } = useLoaderData() as IProductData;
  const navigate = useNavigate();

  useEffect(() => {
    console.log("ProductDetails: ", id);
  }, [id]);

  return (
    <div>
      <span>Vehicle Details: {id}</span>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};
