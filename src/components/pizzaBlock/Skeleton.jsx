import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = () => (
   <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={466}
      viewBox="0 0 280 466"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
   >
      <circle cx="128" cy="124" r="124" />
      <rect x="122" y="215" rx="0" ry="0" width="1" height="1" />
      <rect x="0" y="261" rx="10" ry="10" width="280" height="24" />
      <rect x="0" y="310" rx="10" ry="10" width="279" height="89" />
      <rect x="144" y="208" rx="0" ry="0" width="1" height="0" />
      <rect x="0" y="432" rx="10" ry="10" width="90" height="25" />
      <rect x="129" y="419" rx="25" ry="25" width="153" height="45" />
   </ContentLoader>
)

