import React from "react";

export const Logo = ({ settings, size = 120 }) => {
  const {
    Hairdo = "none",
    Hair = "",
    Skin = "#deaa87",
    Pants = "#c71303",
    Trim = "#fbfbf0",
  } = settings;

  const Bobble = "#ff0";

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
          fill={Skin}
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
      <g id="layer2" display="inline" fill={Hair}>
        <g
          id="hair-1"
          style={Hairdo === "hair1" ? {} : { display: "none" }}
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
              fill={Bobble}
              strokeWidth="0.517"
              overflow="visible"
              rx="0.434"
              ry="0.207"
            ></rect>
            <path
              id="path1693"
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
              fill={Bobble}
              strokeWidth="0.517"
              overflow="visible"
              rx="0.453"
              ry="0.216"
            ></rect>
            <path
              id="path1670"
              strokeWidth="0.547"
              d="M2.525 55.535c-.533.63-.133 1.504-.896 1.825-1.112.468-1.726-.365-2.923-.256-.823.074-1.121 1.03-1.885.714-1.112-.46-.967-1.501-1.885-2.28-.63-.534-1.498-.074-1.814-.84-.46-1.113.376-1.728.27-2.929-.072-.825-1.031-1.12-.71-1.882.469-1.111 1.475-.995 2.255-1.916.535-.632.1-1.49.868-1.802 1.118-.455 1.7.39 2.9.285.826-.073 1.142-1.028 1.906-.711 1.111.462.995 1.498 1.915 2.276.632.534 1.468.054 1.782.82.457 1.113-.35 1.73-.24 2.931.077.825 1.03 1.118.71 1.882-.465 1.114-1.476.966-2.253 1.883z"
              overflow="visible"
              transform="matrix(1.04972 0 0 .86596 10.494 29.895)"
            ></path>
          </g>
        </g>
      </g>

      <g id="layer6">
        <g
          id="hair-2"
          style={Hairdo === "hair2" ? {} : { display: "none" }}
          fill={Hair}
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          color="#000"
          paintOrder="fill markers stroke"
        >
          <path
            id="path866"
            strokeWidth="2.646"
            d="M39.218 73.343L27.504 68.25l9.168-7.13-2.547-12.734 13.243 5.603-1.019-12.733 5.603 4.074 3.056-13.752 4.584 7.64 7.13-8.149 5.094 38.71z"
            overflow="visible"
          ></path>
          <path
            id="path868"
            strokeWidth="2.543"
            d="M133.832 73.395l15.823-8.452-13.271-2.817 2.552-11.738-13.27 5.165 1.02-11.739-5.614 3.757-3.063-12.678-4.594 7.043-7.145-9.39-5.104 37.562z"
            overflow="visible"
          ></path>
        </g>
      </g>
      <g id="layer7">
        <g id="hair-3" style={Hairdo === "hair3" ? {} : { display: "none" }}>
          <g
            id="g955"
            fill={Hair}
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="2.646"
            color="#000"
            paintOrder="fill markers stroke"
          >
            <path
              id="path911"
              d="M16.808 46.859c-20.12 18.858-11.715 121.73-11.715 121.73l43.148 1.018-1.527-2.637c-2.717-12.06-2.852-17.547-7.657-31.163a9.815 9.815 0 01-4.598 1.154c-5.913 0-10.707-5.334-10.707-11.914 0-5.98 3.986-11.035 9.315-11.813l-.979-1.69 3.243-2.928c.118-1.865.311-3.722.578-5.565-2.892 11.662-26.63-81.724 12.74-21.527 6.728 13.723 31.49-24.58 16.036-35.684-15.216-14.075-38.815-14.668-47.877 1.019z"
              overflow="visible"
            ></path>
            <path
              id="path951"
              d="M156.76 46.859c20.12 18.858 11.714 121.73 11.714 121.73l-43.148 1.018 1.526-2.637c2.717-12.06 2.853-17.547 7.658-31.163a9.815 9.815 0 004.597 1.154c5.914 0 10.708-5.334 10.708-11.914 0-5.98-3.986-11.035-9.315-11.813l.979-1.69-3.243-2.928a69.404 69.404 0 00-.579-5.565c2.893 11.662 26.63-81.724-12.74-21.527-6.727 13.723-31.49-24.58-16.035-35.684 15.216-14.075 38.815-14.668 47.877 1.019z"
              overflow="visible"
            ></path>
          </g>
        </g>
      </g>
      <g id="layer8" transform="translate(-47.82 -87.492)">
        <g id="hair-4" style={Hairdo === "hair4" ? {} : { display: "none" }}>
          <path
            id="path2535-5"
            fill={Hair}
            fillOpacity="1"
            stroke="#2b1100"
            strokeDasharray="none"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="3.528"
            d="M83.73 194.934a69.582 69.582 0 01-.718-9.964c0-11.262.55-22.247 5.189-30.448.607-1.074-2.471-2.332-1.34-4.032 1.16-1.744 6.533-3.93 7.29-4.904 1.58-2.033-5.512-2.365-3.668-4.101 4.441-4.4 7.663-1.575 8.859-2.387.691-.47 1.866-4.47 3.98-5.8 1.503-1.095 4.026 1.273 5.646.354 7.566-4.288 16.338-3.434 25.69-3.434 9.533 0 15.807 6.551 22.949 1.303 1.826-1.343 4.436 5.588 7.136 4.038 4.533-2.603 6.852 4.894 7.093 6.034 1.298 6.16 5.324.519 7.382 2.982 1.493 1.786-1.098 5.084.157 7.105.964 1.552 3.447-.36 4.209 1.236 3.428 7.18 2.72 22.148 2.72 32.054-.001 3.339-.241 6.672-.718 9.964z"
            color="#000"
            display="inline"
            overflow="visible"
            paintOrder="fill markers stroke"
          ></path>
        </g>
      </g>
      <g id="layer9">
        <g
          id="hair-5"
          display="inline"
          style={Hairdo === "hair5" ? {} : { display: "none" }}
        >
          <g
            id="g1014"
            fill={Hair}
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="2.646"
            color="#000"
            paintOrder="fill markers stroke"
          >
            <path
              id="path951-6"
              d="M139.61 73.742c2.533 4.272-9.221 26.49 1.32 37.226 21.76 22.163 18.689 57.57 18.548 57.62l-50.556 1.019 1.526-2.637c16.16-12.524 16.476-15.23 24.062-31.163a9.815 9.815 0 004.598 1.154c5.913 0 10.707-5.334 10.707-11.914 0-5.98-3.986-11.035-9.315-11.813l.979-1.69-3.243-2.928a69.404 69.404 0 00-.579-5.565c2.893 11.662-13.696-26.102-12.74-21.527-6.727 13.723-31.49-24.58-16.035-35.684 13.362 3.075 23.4 15.549 30.727 27.902z"
              overflow="visible"
            ></path>
            <path
              id="path1010"
              d="M34.028 73.742c-2.533 4.272 9.22 26.49-1.32 37.226-21.761 22.163-18.69 57.57-18.548 57.62l50.556 1.019-1.527-2.637c-16.159-12.524-16.475-15.23-24.061-31.163a9.815 9.815 0 01-4.598 1.154c-5.914 0-10.707-5.334-10.707-11.914 0-5.98 3.985-11.035 9.315-11.813l-.98-1.69 3.244-2.928c.118-1.865.31-3.722.578-5.565-2.893 11.662 13.696-26.102 12.74-21.527 6.727 13.723 31.49-24.58 16.035-35.684-13.361 3.075-23.4 15.549-30.727 27.902z"
              overflow="visible"
            ></path>
          </g>
        </g>
      </g>

      <g id="layer10" display="inline">
        <g
          id="hair-6"
          style={Hairdo === "hair6" ? {} : { display: "none" }}
          fill={Hair}
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          color="#000"
          paintOrder="fill markers stroke"
        >
          <path
            id="path1028"
            strokeWidth="2.653"
            d="M102.317 47.593c0 1.276.39 2.533 1.137 3.657-2.43 1.77-3.794 4.162-3.794 6.655 0 5.22 5.855 9.45 13.078 9.45.527 0 1.053-.023 1.576-.07a3.812 3.812 0 00-.067.714c0 3.914 5.967 7.087 13.329 7.087 7.361 0 13.329-3.173 13.33-7.087 2.998-5.152-2.67-9.041-9.58-6.785 10.429-6.33-3.187-16.587-9.067-13.57-1.339-17.796-19.364-5.676-19.942-.05z"
            overflow="visible"
          ></path>
          <path
            id="path1028-9"
            strokeWidth="2.428"
            d="M69.876 47.804c0 1.1-.38 2.182-1.105 3.15 2.362 1.526 3.687 3.587 3.687 5.735 0 4.497-5.69 8.142-12.708 8.142-.512 0-1.024-.02-1.533-.06.044.205.066.41.066.615 0 3.373-5.799 6.106-12.952 6.106-7.154 0-8.003.773-8.003-2.6-7.943 1.784-8.179-12.086 1.362-9.256-1.87-7.134-1.96-17.238 9.466-14.705.173-15.944 17.132-9.625 18.67-1.52 16.081 8.265 2.828-.857 3.05 4.393z"
            overflow="visible"
          ></path>
        </g>
      </g>

      <g id="layer12">
        <g id="hair-7" style={Hairdo === "hair7" ? {} : { display: "none" }}>
          <path
            id="path2535-51-0"
            fill={Hair}
            fillOpacity="1"
            stroke="#2b1100"
            strokeDasharray="none"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="3.271"
            d="M48.888 21.17a6.6 6.6 0 00-2.559.57 6.578 6.578 0 00-3.353 8.699l8.409 18.959-16.155-15.76a6.578 6.578 0 00-9.322.116 6.578 6.578 0 00.116 9.322l12.76 12.448-17.349.214a6.578 6.578 0 00-6.51 6.673 6.578 6.578 0 006.673 6.51l18.228-.224c-3.055 6.043-4.763 12.976-4.763 20.634 0 2.85.243 5.695.723 8.506H139.91c.48-2.81.722-5.656.722-8.506 0-7.658-1.707-14.591-4.762-20.634l18.228.224a6.578 6.578 0 006.673-6.51 6.578 6.578 0 00-6.51-6.673l-17.35-.214 12.76-12.448a6.578 6.578 0 00.116-9.322 6.578 6.578 0 00-9.322-.115l-16.154 15.759 8.41-18.959a6.578 6.578 0 00-3.354-8.699 6.578 6.578 0 00-8.699 3.353l-9.6 21.646c-6.795-2.698-14.405-4.142-22.442-4.142-.26 0-.519.005-.778.008-.26-.003-.518-.008-.778-.008-8.037 0-15.647 1.444-22.441 4.142l-9.601-21.646a6.578 6.578 0 00-6.14-3.923z"
            color="#000"
            display="inline"
            overflow="visible"
            paintOrder="fill markers stroke"
          ></path>
        </g>
      </g>
      <g id="layer11">
        <g
          id="hair-8"
          style={Hairdo === "hair8" ? {} : { display: "none" }}
          fill={Hair}
        >
          <path
            id="path2535-51"
            fillOpacity="1"
            stroke="#2b1100"
            strokeDasharray="none"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="3.271"
            d="M35.786 97.837a50.522 50.522 0 01-.722-8.506c-.002-28.305 23.283-46.734 52.005-46.734 28.723 0 52.007 18.43 52.006 46.734 0 2.85-.242 5.695-.722 8.506z"
            color="#000"
            display="inline"
            overflow="visible"
            paintOrder="fill markers stroke"
          ></path>
          <g id="g1178">
            <path
              id="path1098"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="2.503"
              d="M38.492 136.234c-2.712 2.977-5.984-.14-6.47 2.449-.45 3.226.674 7.911 2.668 9.765a6.884 6.884 0 00-3.401 5.013 6.506 6.506 0 001.143 4.707l-.155-.018c-2.22-.244-5.481 1.789-7.093 2.807-.065-2.74-7.674-5-11.547-5.426-4.21-.462-3.319 2.477-3.73 5.42-.41 2.945 2.67 5.707 6.879 6.17 2.219.243 4.423-1.26 6.034-2.278.066 2.74 3.04 5.131 6.913 5.557 4.208.462 9.011-3.137 9.421-6.082.171-1.227-.268-2.484-1.245-3.557 3.194-.182 5.865-2.669 6.312-5.879.307-2.203-.496-4.38-2.138-5.793.922-.563.736-.734 1.433-1.69-2.92-4.35-3.23-6.057-5.024-11.165z"
              color="#000"
              overflow="visible"
              paintOrder="fill markers stroke"
            ></path>
            <g id="g1159" transform="translate(38.118 13.333)">
              <g
                id="g1171"
                fill="#6f0"
                fillOpacity="1"
                stroke="#000"
                strokeDasharray="none"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                strokeOpacity="1"
                strokeWidth="2.646"
                color="#000"
                paintOrder="fill markers stroke"
                transform="matrix(.89732 0 0 .84866 -2.803 21.947)"
              >
                <path
                  id="path1165"
                  d="M-12.706 151.06l-4.078-13.02c4.41-4.046 12 5.372 10.666 6.432z"
                  overflow="visible"
                ></path>
                <path
                  id="path1167"
                  d="M-13.855 151.628l-11.49 7.356c.78 5.935 12.646 3.595 12.305 1.926z"
                  overflow="visible"
                ></path>
              </g>
            </g>
          </g>
          <g id="g1190" transform="matrix(-1 0 0 1 172.69 0)">
            <path
              id="path1180"
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="2.503"
              d="M38.492 136.234c-2.712 2.977-6.07-.572-6.557 2.017-.45 3.227.761 8.343 2.755 10.197a6.884 6.884 0 00-3.401 5.013 6.506 6.506 0 001.143 4.707l-.155-.018c-2.22-.244-5.481 1.789-7.093 2.807-.065-2.74-7.674-5-11.547-5.426-4.21-.462-3.319 2.477-3.73 5.42-.41 2.945 2.67 5.707 6.879 6.17 2.219.243 4.423-1.26 6.034-2.278.066 2.74 3.04 5.131 6.913 5.557 4.208.462 9.011-3.137 9.421-6.082.171-1.227-.268-2.484-1.245-3.557 3.194-.182 5.865-2.669 6.312-5.879.307-2.203-.496-4.38-2.138-5.793.922-.563.736-.734 1.433-1.69-2.92-4.35-3.23-6.057-5.024-11.165z"
              color="#000"
              overflow="visible"
              paintOrder="fill markers stroke"
            ></path>
            <g id="g1188" transform="translate(38.118 13.333)">
              <g
                id="g1186"
                fill="#6f0"
                fillOpacity="1"
                stroke="#000"
                strokeDasharray="none"
                strokeLinejoin="round"
                strokeMiterlimit="4"
                strokeOpacity="1"
                strokeWidth="2.646"
                color="#000"
                paintOrder="fill markers stroke"
                transform="matrix(.89732 0 0 .84866 -2.803 21.947)"
              >
                <path
                  id="path1182"
                  d="M-12.706 151.06l-4.078-13.02c4.41-4.046 12 5.372 10.666 6.432z"
                  overflow="visible"
                ></path>
                <path
                  id="path1184"
                  d="M-13.855 151.628l-11.49 7.356c.78 5.935 12.646 3.595 12.305 1.926z"
                  overflow="visible"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>

      <g id="layer3" display="inline">
        <g
          id="pants-main"
          fill={Pants}
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
            fill={Trim}
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
