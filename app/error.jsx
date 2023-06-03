"use client"; // Error components must be Client components

import { MdError } from "react-icons/md";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-center">
      <MdError className="text-8xl text-teal-500 mx-auto" />
      <h2 className=" text-teal-600 p-8">Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
