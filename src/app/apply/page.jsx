"use client";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../firebase.js";
import { useRouter } from "next/navigation.js";
import CircularProgress from '@mui/material/CircularProgress';
import { Snackbar, Alert } from '@mui/material';

export default function MultilineTextFields() {
  const [files, setFiles] = useState([]);
  const [filePerc, setFilePerc] = useState(0);
  const [imageUploadError, setImageUploadError] = useState(false);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    typeofservices: "",
    description: "",
    imageUrls: [],
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const router = useRouter();

  const handleImageSubmit = () => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 10) {
      setUploading(true);
      setImageUploadError(false);
      const promises = Array.from(files).map(file => storeImage(file));
      Promise.all(promises)
        .then(urls => {
          setFormData(prevData => ({
            ...prevData,
            imageUrls: [...prevData.imageUrls, ...urls],
          }));
          setUploading(false);
        })
        .catch(err => {
          console.error(err);
          setImageUploadError("Image upload error. (2 MB per image)");
          setUploading(false);
        });
    } else {
      setImageUploadError("You can upload a maximum of 10 images. Please select at least one image.");
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + "-" + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        snapshot => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setFilePerc(Math.round(progress));
        },
        error => {
          reject(error);
          setFileUploadError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleChange = (e) => {
    setFormData(prevData => ({ ...prevData, [e.target.id]: e.target.value }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("https://mydashboard-api-backend-side.onrender.com/apis/aply/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setOpenSnackbar(true);
        router.push("/");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <main className="max-w-7xl mx-auto mt-20 px-4">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Complete the Form</h1>

      <form onSubmit={handleSubmitForm} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
        <div>
          <TextField
            type="text"
            variant="outlined"
            onChange={handleChange}
            value={formData.fullName}
            label="Full Name"
            id="fullName"
            className="w-full"
            required
          />
        </div>
        <div>
          <TextField
            type="email"
            variant="outlined"
            onChange={handleChange}
            value={formData.email}
            label="Email"
            id="email"
            className="w-full"
            required
          />
        </div>
        <div>
          <TextField
            type="text"
            variant="outlined"
            label="Description"
            onChange={handleChange}
            value={formData.description}
            id="description"
            className="w-full"
            multiline
            rows={4}
            required
          />
        </div>
        <div>
          <select
            name="typeofservices"
            id="typeofservices"
            value={formData.typeofservices}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="" disabled>Select a service</option>
            <option value="Website Development">Website Development</option>
            <option value="App Development Android & IOS">App Development Android & IOS</option>
            <option value="Web applications">Web applications</option>
            <option value="UI design">UI design</option>
            <option value="Digital Marketing and Branding">Digital Marketing and Branding</option>
            <option value="Brand Design">Brand Design</option>
            <option value="Professional Training">Professional Training</option>
            <option value="POS System - Software and Hardware">POS System - Software and Hardware</option>
            <option value="SEO Services">SEO Services</option>
            <option value="Photo editing">Photo editing</option>
          </select>
        </div>
        <div>
          <input
            type="file"
            onChange={(e) => setFiles(e.target.files)}
            className="w-full border rounded-md p-2"
            accept="image/*"
            multiple
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleImageSubmit}
            disabled={uploading}
            className="mt-4 w-full py-2"
          >
            {uploading ? <CircularProgress size={24} /> : "Upload Images"}
          </Button>
          {imageUploadError && <p className="text-red-600 mt-2">{imageUploadError}</p>}
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="w-1/2 py-3"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : "Submit"}
        </Button>
        {error && <Alert severity="error" onClose={() => setError(false)}>{error}</Alert>}
      </form>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Application submitted successfully!
        </Alert>
      </Snackbar>
    </main>
  );
}
