import React from "react";

export default function ImageComponent({imgurl,headerLabel,bottomLabel}: { imgurl: string,headerLabel: string,bottomLabel: string }) {
    return(
    <div
  className="h-60 w-full bg-cover bg-center flex items-center justify-center"
  style={{ backgroundImage: `url(${imgurl})` }}
>
  <div className="text-center">
    <h1
      className="text-white text-4xl font-bold"
      style={{ textShadow: "2px 2px 6px rgba(0, 0, 0, 0.7)" }}
    >
      {headerLabel}
    </h1>
    <span
      className="text-white text-lg"
      style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)" }}
    >
      {bottomLabel}
    </span>
  </div>
</div>

    )
}