import React from "react";
import Photo from "../components/photo";

export default function Home() {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <Photo />
      </div>
      <div className="col-span-4">This is the home! this is a test in order to se how long this is going to be ordered</div>
    </div>
  );
}
