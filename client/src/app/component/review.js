"use client";
import React, {useState} from "react";
import axios from "axios";
import HttpService from "../utils/httpServices";
import { useSelector, useDispatch } from 'react-redux';
import { stepFormFail, stepFormRequest, stepFormSuccess } from "../redux/Slice/stepformSlice";

const Review = ({ formData, previousStep , setActiveStep }) => {
  const { stepFormData } = useSelector(state => state.stepForm);
  const dispatch = useDispatch(); 
  const user_id = stepFormData?._id

const submithandler = async ()=>{
  const payload = {
    step: 4,
    _id : user_id
  };

  try {
    dispatch(stepFormRequest());
    const response = await axios.post(HttpService.StepFormData, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response?.status === 200) {
      dispatch(stepFormSuccess(response))
      console.log(response?.data?.data)
      alert("Your order is completed successfully")
      setActiveStep(4)
    } else {
      dispatch(stepFormFail(response.data.errMsg));
      console.error("API error:", response.data);
    }
  } catch (err) {
    console.error("Request failed:", err);
    dispatch(stepFormFail(err?.response?.data?.errMsg));
  }
}
 
const exportOrder= async ()=>{
  const payload = {
    _id : user_id
  };

  try {
    dispatch(stepFormRequest());
    const response = await axios.post(HttpService.ExportDetails, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response?.status === 200) {
      const csvUrl = response?.data?.data?.csv; 
      const link = document.createElement("a");
      link.href = csvUrl;
      link.setAttribute("download", "orders.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      console.error("API error:", response.data);
    }
  } catch (err) {
    dispatch(stepFormFail(err?.response?.data?.errMsg));
  }
}

  return (
    <div>
      <h2 className="text-center mb-2">Review Your Order</h2>

      <ul>
        <li>
          <span className="font-bold">Meal Category:</span> {formData.mealCategory}
        </li>
        <li>
          <span className="font-bold">Number of People:</span> {formData.numberOfPeople}
        </li>
        <li>
          <span className="font-bold">Restaurant: </span>{formData.restaurant}
        </li>
        <li>
          <span className="font-bold">Dishes: </span>
          {formData.dishes
            .map((dish) => `${dish.name} (Servings: ${dish.servings})`)
            .join(", ")}
        </li>
      </ul>

      <div className="flex space-x-20">
        <button
          type="button"
          className="bg-red-500 hover:bg-red-300 text-white font-bold py-2 px-4 rounded mt-10"
          onClick={previousStep}
        >
          Previous
        </button>
        <button
          type="button"
          className="bg-green-600	 hover:bg-green-400 text-white font-bold py-2 px-4 rounded mt-10"
          onClick={submithandler}
        >
          Submit
        </button>
        <button
          type="button"
          className="bg-stone-700	 hover:bg-stone-500	 text-white font-bold py-2 px-4 rounded mt-10"
          onClick={exportOrder}
        >
          Export
        </button>
      </div>
    </div>
  );
};

export default Review;
