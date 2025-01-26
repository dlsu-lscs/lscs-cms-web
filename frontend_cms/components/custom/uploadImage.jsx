import React, { useState } from "react";

export default function UploadImage({ setSelectedImage, selectedImage }) {
  return (
    <div>
      {/* Conditionally render the selected image if it exists */}
      {selectedImage ? (
        <div>
          {/* Display the selected image */}
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          {/* Button to remove the selected image */}
          <button
            className="bg-white text-black text-xs p-1 rounded hover:bg-slate-300 mt-2"
            onClick={() => setSelectedImage(null)}
          >
            Remove
          </button>
        </div>
      ) : (
        <div>
          {/* Display the selected image */}
          <img
            alt="not found"
            width={"250px"}
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
          />
        </div>
      )}

      {/* Input element to select an image file */}
      <input
        type="file"
        name="myImage"
        // Event handler to capture file selection and update the state
        className="mt-2"
        onChange={(event) => {
          console.log(event.target.files[0]); // Log the selected file
          setSelectedImage(event.target.files[0]); // Update the state with the selected file
        }}
      />
    </div>
  );
}
