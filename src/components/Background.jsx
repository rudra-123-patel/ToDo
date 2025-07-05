import React from "react";

function Background() {
  return (
    <div className="fixed inset-0 z-0 w-full min-h-full bg-zinc-800">
      <div className="absolute top-10 w-full flex justify-center text-zinc-300 text-xl font-semibold pointer-events-none select-none">
        Drag Task And Have Fun.
      </div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[13vw] leading-none tracking-tighter font-bold text-zinc-900 pointer-events-none select-none">
        ToDo.
      </h1>
    </div>
  );
}

export default Background;
