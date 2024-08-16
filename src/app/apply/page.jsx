"use client";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import {
  getDownloadURL,
  getStorage,
  ref, 
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase.js";
import { useRouter } from "next/navigation.js";

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
  const router = useRouter()

  // Adding image to the database
  const handlerImageSubmit = () => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 10) {
      setUploading(true);
      setImageUploadError(false);
      const promise = [];
      for (let i = 0; i < files.length; i++) {
        promise.push(storeImage(files[i]));
      }
      Promise.all(promise)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          console.error(err);
          setImageUploadError("Image upload error (2 mb per image)");
        });
    } else {
      setImageUploadError(
        `You can upload max 10 images maximum (2 mb per image) and please select at least one image to upload ${currentUser.user.username}`
      );
      setUploading(false);
    }
  };
  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
          setFilePerc(Math.round(progress));
        },
        (error) => {
          reject(error);
          setFileUploadError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  // Adding idea to the database
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  //  Adding Handler Submit to submit the form data to the database of MongoDB and Firebase Storage
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
          body: JSON.stringify({
            ...formData,
          }),
        }
      );

      const data = await res.json();

      setLoading(false);

      if (data.success === true) {
        setError(data.message);
        console.log("Registration Successful:", data);
        router.push('/')
        return;
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <main className="max-w-7xl mx-auto mt-20">
      <div className="flex flex-wrap items-center gap-3 w-full mt-10">
        <h1 className="text-2xl font-light">Please complete the form</h1>
      </div>

      <form
        onSubmit={handlerSubmitForm}
        className="mt-11 flex-col flex justify-center w-full"
      >
        <div className="flex justify-end mb-4"></div>
        <div className="gridsystem">
          <div className=" text-black ">
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
            <select
              name="typeofideas"
              id="typeofservices"
              value={formData.typeofservices}
              onChange={handleChange}
              className="p-2 w-full rounded-md"
            >
              <option value="Select one services">Select one services</option>
              <option value="Website Development">Website Development</option>
              <option value="App Development Android & IOS">
                App Development Android & IOS
              </option>
              <option value="Web applications">Web applications</option>
              <option value="UI design">UI design</option>
              <option value="Digital Marketing and Branding">
                Digital Marketing and Branding
              </option>
              <option value="Brand Design">Brand Design</option>
              <option value="Professional Training">
                Professional Training
              </option>
              <option value="POS System - Software and Hardware">
                POS System - Software and Hardware
              </option>
              <option value="SEO Services">SEO Services</option>
              <option value="Photo editing">Photo editing</option>
            </select>
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
            {loading ? "applying..." : "Apply now"}
          </Button>
          {error && <p className="text-green-700 text-xs">{error}</p>}
        </div>
      </form>
    </main>
  );
}