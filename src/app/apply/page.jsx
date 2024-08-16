"use client";
import React, { useState } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  TextField,
} from "@mui/material";
import { useRouter } from "next/navigation.js";

export default function MultilineTextFields() {
  const [files, setFiles] = useState([]);
  const [filePerc, setFilePerc] = useState(0);
  const [imageUploadError, setImageUploadError] = useState(false);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [uploading, setUploading] = useState(false); // This state controls the button text
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    typeofservices: "",
    description: "",
    imageUrls: [],
  });
  const router = useRouter();

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Handle service selection change
  const handleServiceChange = (event) => {
    setFormData({ ...formData, typeofservices: event.target.value });
  };

  // Handle image upload
  const handlerImageSubmit = async () => {
    if (files.length === 0) {
      alert("Please select an image to upload.");
      return;
    }

    setUploading(true); // Set uploading to true when upload starts
    setImageUploadError(false);

    try {
      // Replace with your actual image upload logic
      // Here, we're simulating an upload with a delay
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulated upload time

      // Assuming image upload is successful and returns URLs
      const uploadedUrls = Array.from(files).map((file) => URL.createObjectURL(file));

      setFormData((prev) => ({
        ...prev,
        imageUrls: [...prev.imageUrls, ...uploadedUrls],
      }));

      console.log("Images uploaded successfully:", uploadedUrls);
    } catch (error) {
      setImageUploadError(true);
      console.error("Error uploading images:", error);
    } finally {
      setUploading(false); // Set uploading to false when upload is complete
    }
  };

  // Handle form submission
  const handlerSubmitForm = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      setError(false);

      const res = await fetch(
        `https://mydashboard-api-backend-side.onrender.com/apis/aply/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData }),
        }
      );

      const data = await res.json();

      setLoading(false);

      if (data.success === true) {
        setError(data.message);
        console.log("Registration Successful:", data);
        router.push("/");
        return;
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto mt-20 py-[50px]">
      <div className="flex flex-wrap items-center gap-3 w-full mt-10">
        <h1 className="text-2xl font-light">Please complete the form</h1>
      </div>

      <form
        onSubmit={handlerSubmitForm}
        className="mt-11 flex-col flex justify-center w-full"
      >
        <div className="gridsystem">
          <div className="text-black my-2">
            <TextField
              type="text"
              variant="outlined"
              onChange={handleChange}
              value={formData.fullName}
              label="Enter your name here"
              name="name"
              id="fullName"
              className="border p-2 w-full rounded-md"
            />
          </div>
          <div className="text-black my-2">
            <TextField
              type="text"
              variant="outlined"
              onChange={handleChange}
              value={formData.email}
              label="Enter your email here"
              name="email"
              id="email"
              className="border p-2 w-full rounded-md"
            />
          </div>

          <div className="text-black input-group mt-3">
            <TextField
              type="text"
              variant="outlined"
              label="Give us more details here"
              required
              name="description"
              onChange={handleChange}
              value={formData.description}
              id="description"
              autoComplete="off"
              className="input w-full"
              multiline
              rows={10}
            />
          </div>

          <div className="text-black my-2">
            <FormControl fullWidth variant="outlined">
              <InputLabel id="typeofservices-label">Type of Services</InputLabel>
              <Select
                labelId="typeofservices-label"
                id="typeofservices"
                value={formData.typeofservices}
                onChange={handleServiceChange}
                label="Type of Services"
                sx={{
                  color: "black",
                  backgroundColor: "white",
                  "& .Mui-selected": {
                    color: "black",
                  },
                }}
              >
                <MenuItem value="">
                  <em>Select a service</em>
                </MenuItem>
                <MenuItem value="Website Development">Website Development</MenuItem>
                <MenuItem value="App Development Android & IOS">App Development Android & IOS</MenuItem>
                <MenuItem value="Web applications">Web applications</MenuItem>
                <MenuItem value="UI design">UI design</MenuItem>
                <MenuItem value="Digital Marketing and Branding">
                  Digital Marketing and Branding
                </MenuItem>
                <MenuItem value="Brand Design">Brand Design</MenuItem>
                <MenuItem value="Professional Training">Professional Training</MenuItem>
                <MenuItem value="POS System - Software and Hardware">
                  POS System - Software and Hardware
                </MenuItem>
                <MenuItem value="SEO Services">SEO Services</MenuItem>
                <MenuItem value="Photo editing">Photo editing</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="flex gap-3">
            <input
              onChange={(e) => setFiles(e.target.files)}
              type="file"
              className="p-2 border w-full border-gray-300 rounded-lg"
              id="images"
              accept="image/*"
              multiple
            />
            <button
              disabled={uploading}
              type="button"
              onClick={handlerImageSubmit}
              className="font-medium w-full text-xs  text-green-700 border rounded-xl p-3"
            >
              {uploading ? "Uploading..." : "Upload Image"}
            </button>
          </div>
        </div>
        <div className="flex flex-col my-3">
          <Button type="submit" variant="contained">
            {loading ? "Applying..." : "Apply now"}
          </Button>
          {error && <p className="text-green-700 text-xs">{error}</p>}
        </div>
      </form>
    </main>
  );
}
