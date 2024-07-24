import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    courseData: []
}

export const getAllCourses = createAsyncThunk("/course/get", async () => {
   try {
    const response = axiosInstance.get("/courses");
    toast.promise(response, {
        loading: "loading course data...",
        success: "Course loaded successfully",
        error: "Failed to get the courses",
    });
    
    return (await response).data.courses;
   } catch (error) {
         toast.error(error?.response?.data?.message);
   }
});

const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
});

export default courseSlice.reducer;