import React from "react";

export const Logo = ({ settings, size = 120 }) => {
  const { hair = "none", skinColour = "#deaa87" } = settings;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      version="1.1"
      viewBox="0 0 174.733 174.823"
    >
      <g
        id="layer1"
        strokeDasharray="none"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeOpacity="1"
        color="#000"
        display="inline"
        paintOrder="fill markers stroke"
        transform="translate(-47.82 -87.492)"
      >
        <g
          id="skin"
          fill={skinColour}
          fillOpacity="1"
          stroke="#2b1100"
          strokeWidth="3.528"
        >
          <ellipse
            id="path862-9"
            cx="185.795"
            cy="212.238"
            strokeLinecap="round"
            display="inline"
            overflow="visible"
            rx="10.708"
            ry="11.914"
          ></ellipse>
          <ellipse
            id="path862"
            cx="82.279"
            cy="212.54"
            strokeLinecap="round"
            display="inline"
            overflow="visible"
            rx="10.708"
            ry="11.914"
          ></ellipse>
          <path
            id="path849"
            d="M83.73 190.543a51.645 60.041 0 00-.718 9.965 51.645 60.041 0 0051.646 60.043 51.645 60.041 0 0051.645-60.043 51.645 60.041 0 00-.717-9.965z"
            display="inline"
            overflow="visible"
          ></path>
          <path
            id="path2535"
            d="M83.73 194.934a69.582 69.582 0 01-.718-9.964c-.001-33.161 23.122-54.752 51.646-54.752 28.523 0 51.646 21.59 51.645 54.752 0 3.339-.24 6.672-.717 9.964z"
            display="inline"
            overflow="visible"
          ></path>
        </g>
        <circle
          id="path856"
          cx="118.563"
          cy="208.317"
          r="6.485"
          fill="#000"
          stroke="none"
          strokeWidth="4.637"
          display="inline"
          overflow="visible"
        ></circle>
        <circle
          id="circle858"
          cx="152.205"
          cy="208.317"
          r="6.485"
          fill="#000"
          stroke="none"
          strokeWidth="4.637"
          display="inline"
          overflow="visible"
        ></circle>
        <path
          id="path860"
          fill="none"
          fillOpacity="1"
          stroke="#2b1100"
          strokeLinecap="round"
          strokeWidth="4.906"
          d="M118.74 227.07c5.63 14.893 27.718 15.306 31.653.228"
          display="inline"
          overflow="visible"
        ></path>
      </g>
      <g id="layer2" display="inline">
        <g
          id="hair-1"
          style={hair === "hair1" ? {} : { display: "none" }}
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeWidth="1.521"
          color="#000"
          paintOrder="fill markers stroke"
        >
          <g
            id="g1695"
            display="inline"
            transform="scale(-4.71328 4.71328) rotate(-36.07 -116.557 101.477)"
          >
            <path
              id="path1689"
              fill="#000"
              strokeWidth="0.542"
              d="M3.048 87.225s.093-2.122 6.576-7.51c0 0 5.694 4.655 6.24 6.792"
              overflow="visible"
            ></path>
            <rect
              id="rect1691"
              width="4.764"
              height="3.494"
              x="6.881"
              y="78.244"
              fill="#ff0"
              strokeWidth="0.517"
              overflow="visible"
              rx="0.434"
              ry="0.207"
            ></rect>
            <path
              id="path1693"
              fill="#000"
              strokeWidth="0.547"
              d="M2.525 55.535c-.533.63-.133 1.504-.896 1.825-1.112.468-1.726-.365-2.923-.256-.823.074-1.121 1.03-1.885.714-1.112-.46-.967-1.501-1.885-2.28-.63-.534-1.498-.074-1.814-.84-.46-1.113.376-1.728.27-2.929-.072-.825-1.031-1.12-.71-1.882.469-1.111 1.475-.995 2.255-1.916.535-.632.1-1.49.868-1.802 1.118-.455 1.7.39 2.9.285.826-.073 1.142-1.028 1.906-.711 1.111.462.995 1.498 1.915 2.276.632.534 1.468.054 1.782.82.457 1.113-.35 1.73-.24 2.931.077.825 1.03 1.118.71 1.882-.465 1.114-1.476.966-2.253 1.883z"
              overflow="visible"
              transform="matrix(1.04972 0 0 .86596 10.494 29.895)"
            ></path>
          </g>
          <g
            id="g1679"
            display="inline"
            transform="rotate(-36.07 -440.11 202.19) scale(4.51841)"
          >
            <path
              id="path1672"
              fill="#000"
              strokeWidth="0.542"
              d="M3.048 87.225s.093-2.122 6.576-7.51c0 0 5.694 4.655 6.24 6.792"
              overflow="visible"
            ></path>
            <rect
              id="rect1674"
              width="4.764"
              height="3.494"
              x="6.881"
              y="78.244"
              fill="#ff0"
              strokeWidth="0.517"
              overflow="visible"
              rx="0.453"
              ry="0.216"
            ></rect>
            <path
              id="path1670"
              fill="#000"
              strokeWidth="0.547"
              d="M2.525 55.535c-.533.63-.133 1.504-.896 1.825-1.112.468-1.726-.365-2.923-.256-.823.074-1.121 1.03-1.885.714-1.112-.46-.967-1.501-1.885-2.28-.63-.534-1.498-.074-1.814-.84-.46-1.113.376-1.728.27-2.929-.072-.825-1.031-1.12-.71-1.882.469-1.111 1.475-.995 2.255-1.916.535-.632.1-1.49.868-1.802 1.118-.455 1.7.39 2.9.285.826-.073 1.142-1.028 1.906-.711 1.111.462.995 1.498 1.915 2.276.632.534 1.468.054 1.782.82.457 1.113-.35 1.73-.24 2.931.077.825 1.03 1.118.71 1.882-.465 1.114-1.476.966-2.253 1.883z"
              overflow="visible"
              transform="matrix(1.04972 0 0 .86596 10.494 29.895)"
            ></path>
          </g>
        </g>
      </g>
      <g id="layer3" display="inline">
        <g
          id="pants-main"
          fill="#c71303"
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeWidth="2.646"
          color="#000"
          paintOrder="fill markers stroke"
        >
          <path
            id="path1733"
            d="M63.59 53.895c-.388 4.272-1.214 8.56-6.097 11.52-10.029 6.078-17.94 1.245-21.88 6.382-3.942 5.136-4.263 22.248-3.327 31.338l.657.01-1.842-6.672h47.703V71.946z"
            display="inline"
            overflow="visible"
          ></path>
          <path
            id="path1793"
            d="M102.46 41.373c-1.775-1.087-2.843-.674-3.867-.88-1.52-.303-21.953-.303-21.953-.303s-2.5-.458-5.257.128l15.609 18.52h.747z"
            display="inline"
            overflow="visible"
          ></path>
          <path
            id="path1791"
            d="M141.314 97.844c.824-9.68-.338-24.457-2.371-26.96-3.229-2.566-16.956 1.786-25.747-7.143-2.39-2.426-3.872-4.533-4.921-6.445L93.61 74.693v21.78h47.703z"
            display="inline"
            overflow="visible"
          ></path>
        </g>
        <g id="pants-seam">
          <path
            id="path1789"
            fill="#fbfbf0"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeWidth="2.646"
            d="M141.314 110.48V96.472H93.61v-21.78l14.664-17.397c.44-8.114-.69-10.7-2.677-13.066-1.307-1.557-2.281-2.332-3.139-2.857L87.74 58.838h-.747l-15.61-18.52c-1.31.279-2.652.726-3.86 1.695-3.607 2.896-3.525 7.38-3.933 11.882l15.215 18.05v24.528H31.101v14.006z"
            color="#000"
            display="inline"
            overflow="visible"
            paintOrder="fill markers stroke"
          ></path>
        </g>
      </g>
    </svg>
  );
};
