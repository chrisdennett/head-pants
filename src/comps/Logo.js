import React from "react";

export const Logo = ({ settings, size = 120, showAsBadge = false, id }) => {
  const {
    Hairdo = "none",
    Hair = "hair1",
    Skin = "#deaa87",
    Pants = "#c71303",
    Trim = "#fbfbf0",
    Glasses = "none",
    GlassesColour = "#000",
    Beards = "none",
    BeardColour = "#000",
    BadgeType = "text",
    BadgeColour = "#fff",
  } = settings;

  const Bobble = "#ffc843";

  const vb = showAsBadge ? "-40 -31 252 253" : "0 0 174.733 174.823";
  const showBadgeText = showAsBadge && BadgeType === "text";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      version="1.1"
      viewBox={vb}
      id={id}
    >
      {/* bg */}
      <g id="layer21" style={showAsBadge ? {} : { display: "none" }}>
        <circle
          id="path1920"
          cx="85.993"
          cy="95.773"
          r="123.722"
          fill={BadgeColour}
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="5.292"
          color="#000"
          overflow="visible"
          paintOrder="markers fill stroke"
        ></circle>
      </g>
      {/* face */}
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

      {/* BEARDS */}
      <g id="layer14" style={Beards === "beards2" ? {} : { display: "none" }}>
        <g id="beard2">
          <path
            id="path1058"
            fill={BeardColour}
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="2.646"
            d="M63.135 133.452s-1.513 39.696 23.817 40.83c25.33 1.134 25.098-31.126 23.817-38.184-1.036-5.708-12.506 1.473-24.198 1.59-9.478.095-19.103-8.708-23.436-4.236z"
            color="#000"
            overflow="visible"
            paintOrder="markers fill stroke"
          ></path>
        </g>
      </g>

      <g id="layer16" style={Beards === "beards3" ? {} : { display: "none" }}>
        <g
          id="beard2-9"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeWidth="4.363"
          display="inline"
          transform="matrix(.87023 0 0 .42268 11.503 100.95)"
        >
          <g id="beard3">
            <path
              id="path1127"
              fill={BeardColour}
              fillOpacity="1"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="4.363"
              d="M74.056 138.79c.598-8.316 6.925-9.945 14.92-9.274 8.866.743 12.337 7.156 11.966 12.896-.306 17.735-9.599 26.906-13.497 29.83-3.943.573-15.297-18.685-13.39-33.453z"
              color="#000"
              overflow="visible"
              paintOrder="markers fill stroke"
            ></path>
          </g>
        </g>
      </g>

      <g id="layer15">
        <path
          id="path860"
          fill="none"
          fillOpacity="1"
          stroke="#2b1100"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="4.906"
          d="M70.92 139.578c5.63 14.892 27.718 15.305 31.653.228"
          color="#000"
          display="inline"
          overflow="visible"
          paintOrder="fill markers stroke"
        ></path>
      </g>

      <g
        id="layer4"
        display="inline"
        style={Beards === "beards1" ? {} : { display: "none" }}
      >
        <g
          id="beard1"
          fill={BeardColour}
          fillOpacity="1"
          stroke="#000"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="2.646"
          color="#000"
          paintOrder="markers fill stroke"
        >
          <path
            id="path979"
            d="M38.183 109.635c-5.637 0-10.208 5.84-10.207 13.043 0 6.223 3.44 11.578 8.217 12.792a16.305 16.305 0 00-.656 4.598c0 6.126 3.336 11.426 8.018 12.74.641 6.524 4.983 11.418 10.129 11.418.591 0 1.182-.066 1.765-.197 1.48 4.753 5.302 7.909 9.576 7.909 1.879 0 3.72-.615 5.324-1.776a10.188 10.188 0 007.293 4.226l.07.12c.408 0 .813-.026 1.213-.074a10.166 10.166 0 006.998-3.081 10.167 10.167 0 006.999 3.08c.4.05.805.076 1.213.076l.07-.12a10.188 10.188 0 007.294-4.227c1.603 1.161 3.445 1.776 5.323 1.776 4.275 0 8.096-3.156 9.577-7.909.582.131 1.173.197 1.765.197 5.146 0 9.487-4.894 10.128-11.419 4.682-1.313 8.019-6.613 8.019-12.74 0-1.57-.223-3.127-.656-4.597 4.776-1.214 8.217-6.57 8.217-12.792 0-7.204-4.57-13.044-10.208-13.043-5.637 0-10.207 5.84-10.207 13.043 0 1.57.222 3.128.656 4.598-4.311 1.095-7.59 5.595-8.137 11.168-3.743 1.05-6.71 4.69-7.684 9.425a8.646 8.646 0 00-1.47-.126c-4.002 0-7.634 2.772-9.291 7.09a10.141 10.141 0 00-4.318-.966 10.166 10.166 0 00-7.29 3.09 10.166 10.166 0 00-7.289-3.09c-1.492 0-2.966.33-4.318.966-1.656-4.318-5.289-7.09-9.291-7.09-.492 0-.983.042-1.47.126-.973-4.736-3.94-8.376-7.683-9.425-.548-5.573-3.826-10.073-8.137-11.168.433-1.47.655-3.028.655-4.598 0-7.204-4.57-13.043-10.207-13.043z"
            overflow="visible"
          ></path>
          <path
            id="path1025"
            d="M80.903 135.72a6.049 5.293 0 00-4 1.322 5.104 3.78 0 00-3.372-.943 5.104 3.78 0 00-3.888 1.33 6.616 3.591 0 00-2.16-.197 6.616 3.591 0 00-5.215 1.382 4.726 4.159 0 00-3.86-1.76 4.726 4.159 0 00-4.725 4.16 4.726 4.159 0 004.726 4.157 4.726 4.159 0 004.047-2.011 6.616 3.591 0 005.026 1.255 6.616 3.591 0 004.467-.942 5.104 3.78 0 001.582.186 5.104 3.78 0 001.956-.288 6.049 5.293 0 005.416 2.935 6.049 5.293 0 005.29-2.726 6.049 5.293 0 005.29 2.726 6.049 5.293 0 005.414-2.935 5.104 3.78 0 001.957.288 5.104 3.78 0 001.582-.186 6.616 3.591 0 004.467.942 6.616 3.591 0 005.026-1.255 4.726 4.159 0 004.047 2.011 4.726 4.159 0 004.726-4.158 4.726 4.159 0 00-4.726-4.158 4.726 4.159 0 00-3.86 1.759 6.616 3.591 0 00-5.213-1.382 6.616 3.591 0 00-2.161.198 5.104 3.78 0 00-3.888-1.331 5.104 3.78 0 00-3.373.943 6.049 5.293 0 00-3.999-1.322 6.049 5.293 0 00-5.29 2.726 6.049 5.293 0 00-5.29-2.726z"
            overflow="visible"
          ></path>
        </g>
      </g>
      <g id="layer17" style={Beards === "beards4" ? {} : { display: "none" }}>
        <g id="beard4">
          <path
            id="path1025-0"
            fill={BeardColour}
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="2.646"
            d="M82.635 133.988c-6.201 2.074-20.785 1.34-23.992 5.096-.742 2.797-.991 4.594 1.687 4.352 5.603-5.02 25.903.843 27.595-1.589 3.862 1.628 31.151 1.877 32.356-1.515.865-2.725-1.837-3.764-4.495-3.65-7.33 3.34-23.092-6.882-27.861.031-1.118-1.768-3.234-2.735-5.29-2.725z"
            color="#000"
            display="inline"
            overflow="visible"
            paintOrder="markers fill stroke"
          ></path>
        </g>
      </g>
      <g id="layer18" style={Beards === "beards5" ? {} : { display: "none" }}>
        <g
          id="beard5"
          fill={BeardColour}
          fillOpacity="1"
          stroke={BeardColour}
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="2.523"
          color="#000"
          paintOrder="markers fill stroke"
        >
          <path
            id="path1219"
            d="M38.05 118.78l.297 3.413"
            overflow="visible"
          ></path>
          <path
            id="path1221"
            d="M42.209 123.283l.295 3.415"
            overflow="visible"
          ></path>
          <path
            id="path1223"
            d="M47.406 130.56l.295 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1225"
            d="M42.035 131.08l.296 3.413"
            overflow="visible"
          ></path>
          <path
            id="path1227"
            d="M43.768 139.741l.295 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1229"
            d="M42.035 131.08l.296 3.413"
            overflow="visible"
          ></path>
          <path
            id="path1231"
            d="M49.485 140.78l.295 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1233"
            d="M53.122 134.197l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1235"
            d="M57.28 138.702l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1237"
            d="M62.477 145.285l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1239"
            d="M57.107 146.497l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1241"
            d="M58.146 155.16l.296 3.413"
            overflow="visible"
          ></path>
          <path
            id="path1243"
            d="M57.107 146.497l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1245"
            d="M64.21 153.946l.295 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1247"
            d="M46.886 149.789l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1249"
            d="M64.21 164.34l.295 3.415"
            overflow="visible"
          ></path>
          <path
            id="path1251"
            d="M55.201 160.703l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1253"
            d="M52.083 151.348l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1255"
            d="M136.399 116.7l-.296 3.415"
            overflow="visible"
          ></path>
          <path
            id="path1257"
            d="M132.241 121.205l-.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1259"
            d="M127.044 128.48l-.296 3.415"
            overflow="visible"
          ></path>
          <path
            id="path1261"
            d="M132.414 129l-.295 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1263"
            d="M130.682 137.662l-.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1265"
            d="M132.414 129l-.295 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1267"
            d="M124.965 138.702l-.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1269"
            d="M121.327 132.119l-.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1271"
            d="M117.17 136.623l-.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1273"
            d="M111.972 143.206l-.295 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1275"
            d="M117.343 144.418l-.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1277"
            d="M116.303 153.08l-.295 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1279"
            d="M117.343 144.418l-.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1281"
            d="M110.24 151.868l-.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1283"
            d="M127.564 147.71l-.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1285"
            d="M110.24 162.262l-.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1287"
            d="M119.248 158.624l-.295 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1289"
            d="M122.367 149.269l-.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1291"
            d="M98.806 154.813l-.295 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1293"
            d="M97.767 163.474l-.296 3.415"
            overflow="visible"
          ></path>
          <path
            id="path1295"
            d="M98.806 154.813l-.295 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1297"
            d="M91.704 162.262l-.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1299"
            d="M71.955 167.979l-.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1301"
            d="M100.712 169.018l-.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1303"
            d="M103.83 159.663l-.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1305"
            d="M104.35 150.482l-.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1307"
            d="M69.753 151.175l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1309"
            d="M70.793 159.49l.295 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1311"
            d="M76.856 156.545l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1313"
            d="M77.202 165.553l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1315"
            d="M82.746 169.018l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1317"
            d="M89.329 170.577l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1319"
            d="M83.959 161.05l.295 3.413"
            overflow="visible"
          ></path>
          <path
            id="path1321"
            d="M92.1 139.741l.297 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1323"
            d="M83.959 161.05l.295 3.413"
            overflow="visible"
          ></path>
          <path
            id="path1325"
            d="M78.935 137.662l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1327"
            d="M78.935 137.662l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1329"
            d="M85.171 140.78l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1331"
            d="M65.422 137.316l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1333"
            d="M107.692 136.276l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1335"
            d="M89.329 155.679l.296 3.414"
            overflow="visible"
          ></path>
          <path
            id="path1337"
            d="M97.298 135.757l.296 3.414"
            overflow="visible"
          ></path>
        </g>
      </g>
      <g id="layer19" style={Beards === "beards6" ? {} : { display: "none" }}>
        <g
          id="beard6"
          fill={BeardColour}
          fillOpacity="1"
          stroke={BeardColour}
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="2.646"
          color="#000"
          paintOrder="markers fill stroke"
        >
          <path
            id="path1657"
            d="M39.325 117.628v.838"
            overflow="visible"
          ></path>
          <path
            id="path1659"
            d="M40.537 130.274v.838"
            overflow="visible"
          ></path>
          <path
            id="path1661"
            d="M43.829 122.998v.838"
            overflow="visible"
          ></path>
          <path
            id="path1663"
            d="M39.325 123.345v.838"
            overflow="visible"
          ></path>
          <path
            id="path1665"
            d="M44.695 128.715v.838"
            overflow="visible"
          ></path>
          <path
            id="path1667"
            d="M45.908 141.361v.838"
            overflow="visible"
          ></path>
          <path id="path1669" d="M49.2 134.085v.838" overflow="visible"></path>
          <path
            id="path1671"
            d="M44.695 134.432v.838"
            overflow="visible"
          ></path>
          <path id="path1673" d="M50.412 139.11v.837" overflow="visible"></path>
          <path
            id="path1675"
            d="M51.625 151.756v.837"
            overflow="visible"
          ></path>
          <path id="path1677" d="M54.916 144.48v.837" overflow="visible"></path>
          <path
            id="path1679"
            d="M50.412 144.826v.838"
            overflow="visible"
          ></path>
          <path
            id="path1681"
            d="M63.405 141.361v.838"
            overflow="visible"
          ></path>
          <path id="path1683" d="M55.09 148.984v.838" overflow="visible"></path>
          <path
            id="path1685"
            d="M66.003 147.251v.838"
            overflow="visible"
          ></path>
          <path id="path1687" d="M56.302 155.74v.838" overflow="visible"></path>
          <path id="path1690" d="M59.42 145.692v.838" overflow="visible"></path>
          <path
            id="path1692"
            d="M60.633 158.339v.837"
            overflow="visible"
          ></path>
          <path id="path1694" d="M56.129 138.59v.837" overflow="visible"></path>
          <path id="path1696" d="M59.42 151.41v.837" overflow="visible"></path>
          <path id="path1698" d="M65.484 162.15v.838" overflow="visible"></path>
          <path
            id="path1700"
            d="M64.964 154.527v.838"
            overflow="visible"
          ></path>
          <path
            id="path1702"
            d="M133.739 118.667v.838"
            overflow="visible"
          ></path>
          <path
            id="path1704"
            d="M132.526 131.314v.837"
            overflow="visible"
          ></path>
          <path
            id="path1706"
            d="M129.235 124.038v.838"
            overflow="visible"
          ></path>
          <path
            id="path1708"
            d="M133.739 124.384v.838"
            overflow="visible"
          ></path>
          <path
            id="path1710"
            d="M128.369 129.755v.837"
            overflow="visible"
          ></path>
          <path id="path1712" d="M127.156 142.4v.839" overflow="visible"></path>
          <path
            id="path1714"
            d="M123.864 135.125v.838"
            overflow="visible"
          ></path>
          <path
            id="path1716"
            d="M128.369 135.471v.838"
            overflow="visible"
          ></path>
          <path
            id="path1718"
            d="M122.652 140.149v.838"
            overflow="visible"
          ></path>
          <path
            id="path1720"
            d="M121.44 152.795v.838"
            overflow="visible"
          ></path>
          <path
            id="path1722"
            d="M118.148 145.52v.837"
            overflow="visible"
          ></path>
          <path
            id="path1724"
            d="M122.652 145.866v.837"
            overflow="visible"
          ></path>
          <path id="path1726" d="M109.659 142.4v.839" overflow="visible"></path>
          <path
            id="path1728"
            d="M117.974 150.023v.838"
            overflow="visible"
          ></path>
          <path id="path1730" d="M107.06 148.29v.839" overflow="visible"></path>
          <path
            id="path1732"
            d="M116.762 156.78v.837"
            overflow="visible"
          ></path>
          <path
            id="path1734"
            d="M113.643 146.732v.838"
            overflow="visible"
          ></path>
          <path
            id="path1736"
            d="M112.43 159.378v.838"
            overflow="visible"
          ></path>
          <path
            id="path1738"
            d="M116.935 139.629v.838"
            overflow="visible"
          ></path>
          <path
            id="path1740"
            d="M113.643 152.449v.837"
            overflow="visible"
          ></path>
          <path
            id="path1742"
            d="M106.021 164.055v.838"
            overflow="visible"
          ></path>
          <path id="path1744" d="M108.1 156.606v.838" overflow="visible"></path>
          <path
            id="path1746"
            d="M80.728 167.693v.838"
            overflow="visible"
          ></path>
          <path id="path1748" d="M86.965 163.19v.837" overflow="visible"></path>
          <path
            id="path1750"
            d="M70.507 152.275v.838"
            overflow="visible"
          ></path>
          <path
            id="path1752"
            d="M80.209 160.764v.838"
            overflow="visible"
          ></path>
          <path
            id="path1754"
            d="M75.878 163.363v.837"
            overflow="visible"
          ></path>
          <path id="path1756" d="M77.09 156.433v.838" overflow="visible"></path>
          <path
            id="path1758"
            d="M71.027 167.174v.838"
            overflow="visible"
          ></path>
          <path
            id="path1760"
            d="M71.547 159.551v.838"
            overflow="visible"
          ></path>
          <path id="path1762" d="M98.052 167.52v.838" overflow="visible"></path>
          <path
            id="path1764"
            d="M102.21 154.874v.838"
            overflow="visible"
          ></path>
          <path
            id="path1766"
            d="M98.745 160.937v.838"
            overflow="visible"
          ></path>
          <path id="path1768" d="M93.202 163.19v.837" overflow="visible"></path>
          <path
            id="path1770"
            d="M92.162 157.472v.838"
            overflow="visible"
          ></path>
          <path
            id="path1772"
            d="M89.044 168.733v.838"
            overflow="visible"
          ></path>
          <path
            id="path1774"
            d="M85.233 157.646v.837"
            overflow="visible"
          ></path>
          <path
            id="path1776"
            d="M68.082 136.338v.837"
            overflow="visible"
          ></path>
          <path
            id="path1778"
            d="M83.327 141.881v.838"
            overflow="visible"
          ></path>
          <path
            id="path1780"
            d="M89.564 137.377v.838"
            overflow="visible"
          ></path>
          <path
            id="path1782"
            d="M82.807 134.952v.837"
            overflow="visible"
          ></path>
          <path id="path1784" d="M78.476 137.55v.838" overflow="visible"></path>
          <path
            id="path1790"
            d="M74.145 133.739v.838"
            overflow="visible"
          ></path>
          <path
            id="path1792"
            d="M107.927 137.55v.838"
            overflow="visible"
          ></path>
          <path
            id="path1796"
            d="M101.344 135.125v.838"
            overflow="visible"
          ></path>
          <path id="path1798" d="M95.8 137.377v.838" overflow="visible"></path>
          <path id="path1802" d="M91.642 142.92v.838" overflow="visible"></path>
        </g>
      </g>

      {/* GLASSES */}
      <g id="layer5" style={Glasses === "glasses1" ? {} : { display: "none" }}>
        <g
          id="glasses1"
          stroke={GlassesColour}
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="2.646"
          color="#000"
        >
          <rect
            id="rect908"
            width="28.239"
            height="21.918"
            x="54.917"
            y="109.852"
            fill="#fff"
            fillOpacity="0.165"
            overflow="visible"
            paintOrder="markers fill stroke"
            rx="4.144"
            ry="4.144"
          ></rect>
          <rect
            id="rect914"
            width="28.239"
            height="21.918"
            x="91.429"
            y="109.852"
            fill="#fff"
            fillOpacity="0.165"
            overflow="visible"
            paintOrder="markers fill stroke"
            rx="4.144"
            ry="4.144"
          ></rect>
          <path
            id="path916"
            fill="#fff"
            fillOpacity="0.125"
            strokeLinecap="round"
            d="M54.266 117.087l-21.252-5.88"
            overflow="visible"
            paintOrder="fill markers stroke"
          ></path>
          <path
            id="path918"
            fill="#fff"
            fillOpacity="0.125"
            strokeLinecap="round"
            d="M120.295 116.954l20.718-5.48"
            overflow="visible"
            paintOrder="fill markers stroke"
          ></path>
          <path
            id="path920"
            fill="none"
            fillOpacity="0.125"
            d="M83.004 118.691c3.209-3.065 4.909-3.135 8.42 0"
            overflow="visible"
            paintOrder="fill markers stroke"
          ></path>
        </g>
      </g>
      <g id="layer13" style={Glasses === "glasses2" ? {} : { display: "none" }}>
        <g id="glasses2">
          <g
            id="glasses1-3"
            stroke={GlassesColour}
            strokeDasharray="none"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="3.175"
            color="#000"
            display="inline"
          >
            <rect
              id="rect914-2"
              width="25.927"
              height="23.966"
              x="91.105"
              y="108.383"
              fill="#fff"
              fillOpacity="0.165"
              overflow="visible"
              paintOrder="markers fill stroke"
              rx="14.204"
              ry="13.13"
            ></rect>
            <path
              id="path916-8"
              fill="#fff"
              fillOpacity="0.125"
              strokeLinecap="round"
              d="M56.004 117.221l-22.99-6.015"
              overflow="visible"
              paintOrder="fill markers stroke"
            ></path>
            <path
              id="path918-9"
              fill="#fff"
              fillOpacity="0.125"
              strokeLinecap="round"
              d="M117.488 116.954l23.525-5.48"
              overflow="visible"
              paintOrder="fill markers stroke"
            ></path>
            <path
              id="path920-4"
              fill="none"
              fillOpacity="0.125"
              d="M83.004 118.691c3.209-3.065 4.909-3.135 8.42 0"
              overflow="visible"
              paintOrder="fill markers stroke"
            ></path>
            <rect
              id="rect914-2-1"
              width="25.927"
              height="23.966"
              x="56.863"
              y="108.383"
              fill="#fff"
              fillOpacity="0.165"
              display="inline"
              overflow="visible"
              paintOrder="markers fill stroke"
              rx="14.204"
              ry="13.13"
            ></rect>
          </g>
        </g>
      </g>
      <g id="layer20" style={Glasses === "glasses3" ? {} : { display: "none" }}>
        <g
          id="glasses1-39"
          stroke={GlassesColour}
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeWidth="2.646"
          display="inline"
        >
          <g
            id="glasses3"
            stroke="#000"
            strokeDasharray="none"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            color="#000"
          >
            <rect
              id="rect908-1"
              width="28.484"
              height="13.473"
              x="54.636"
              y="113.555"
              fill="#fff"
              fillOpacity="0.165"
              strokeWidth="2.083"
              overflow="visible"
              paintOrder="markers fill stroke"
              rx="4.144"
              ry="4.144"
            ></rect>
            <rect
              id="rect914-1"
              width="28.484"
              height="13.473"
              x="91.465"
              y="113.555"
              fill="#fff"
              fillOpacity="0.165"
              strokeWidth="2.083"
              overflow="visible"
              paintOrder="markers fill stroke"
              rx="4.144"
              ry="4.144"
            ></rect>
            <path
              id="path916-2"
              fill="#fff"
              fillOpacity="0.125"
              strokeLinecap="round"
              strokeWidth="2.646"
              d="M54.266 117.087l-21.252-5.88"
              overflow="visible"
              paintOrder="fill markers stroke"
            ></path>
            <path
              id="path918-7"
              fill="#fff"
              fillOpacity="0.125"
              strokeLinecap="round"
              strokeWidth="2.646"
              d="M120.295 116.954l20.718-5.48"
              overflow="visible"
              paintOrder="fill markers stroke"
            ></path>
            <path
              id="path920-8"
              fill="none"
              fillOpacity="0.125"
              strokeWidth="2.646"
              d="M83.004 118.691c3.209-3.065 4.909-3.135 8.42 0"
              overflow="visible"
              paintOrder="fill markers stroke"
            ></path>
          </g>
        </g>
      </g>

      {/* TEXT */}
      <g
        id="text1926-1"
        style={showBadgeText ? {} : { display: "none" }}
        fill="#fff"
        stroke="#fff"
        strokeWidth="5.292"
        transform="translate(0 -3.43)"
      >
        <g id="bottomTextBg">
          <path
            id="path2259"
            fill="#fff"
            fillOpacity="1"
            fillRule="nonzero"
            d="M621.639 559.676c-4.296-.144-9.197.784-12.965 4.638-1.717 1.757-2.58 3.435-3.274 5.05-.278.607-.577 1.006-.808 1.337-3.871 2.684-6.735 4.769-9.102 7.19a10 10 0 00-2.178 3.38c-3.287 4.235-5.77 9.012-6.9 14.061-.142-.031-.274-.064-.422-.094h-.002c-5.899-1.235-9.057 1.48-11.19 3.225l-3.513 2.873-.834-1.027c-1.372-1.677-2.575-3.849-7.383-5.028-4.965-1.326-8.951.914-10.931 2.534l-3.875 3.173c-1.727 1.413-3.455 3.336-4.55 5.936-.094.23-.18.464-.257.701l-10.652 31.719-.014.053c-.1.302-.181.614-.252.93-6.355-.314-12.727 1.458-18.299 4.775-4.624 2.752-8.03 6.921-10.556 11.59l.185.052c-.038-.011-.083.003-.119-.008-.027-.008-.049-.03-.074-.037-.004.008-.001.018-.006.03-3.53-1.01-8.074-.457-11.184 1.394-3.252 1.936-4.925 3.82-7.789 6.77-2.87 2.9-5.713 6.047-8.54 9.449l-.022.03c-2.496 3.023-4.332 5.221-5.81 7.884a28.952 28.952 0 00-4.88-1.877l-.045-.014c-4.068-1.14-8.28-1.532-12.52-1.256v.002c-4.239.276-8.499 1.217-12.652 2.76-.772.287-1.505.67-2.183 1.137-8.195 3.446-15.598 8.495-21.653 15.295l-.08.09a34.45 34.45 0 00-4.02 5.65 35.31 35.31 0 00-2.624-1.87h-.008c-6.404-4.077-14.165-5.828-21.621-4.665v-.002c-3.405.53-6.67 1.672-9.922 3.218-1.424.664-2.533 1.691-3.83 2.489-.261-.156-.393-.369-.68-.51-3.017-1.497-4.707-1.337-6.209-1.32-1.144.01-2.212.164-3.307.308-.393.014-.785.051-1.173.111l-.141.024c-6.176 1.05-12.355 3.658-19.174 7.582l.817-11.024c.254-3.429-.541-7.952-3.596-11.33s-7.21-4.58-10.563-4.828c-6.29-.466-13.146.778-24.175 2.975l-.053.015c-3.805.778-7.214 1.802-10.512 4.022s-6.56 6.596-6.916 11.398c-.043.586.488 1.172.531 1.793a38.062 38.062 0 00-15.709 3.073l-.037.013a40.56 40.56 0 00-11.445 7.48c-.96-2.74-2.387-5.306-4.13-7.605l-.022-.037c-5.138-6.708-12.545-11.394-21.04-13.914a58.412 58.412 0 00-14.312-2.363 61.44 61.44 0 00-14.726 1.21 34.43 34.43 0 00-6.774 2.179 37.481 37.481 0 00-1.31-3.381c-3.79-8.59-10.658-15.475-19.311-19.91-5.438-2.788-11.252-4.501-17.191-4.946h-.002a43.722 43.722 0 00-18.38 2.54c.2-1.825.21-3.668-.001-5.485-.95-8.325-5.754-15.833-12.55-21.074-3.152-2.432-6.954-3.67-10.79-4.608l7.838-9.53v-.007l.06-.066a10 10 0 001.838-3.463c.902-2.125 1.517-4.505 1.041-7.05-.773-4.132-3.267-6.712-5.351-8.32-4.722-3.641-10.667-6.639-18.264-9.728-4.574-1.894-8.034-3.26-11.777-3.902-.05-2.7-1.295-5.96-3.215-8.036-2.716-2.937-4.793-3.814-7.774-5.367-1.636-.87-3.194-1.307-4.717-1.92.07-.517.353-.947.34-1.482-.087-3.774-1.906-6.437-3.38-8.031-2.768-2.993-4.78-3.784-7.76-5.338a2.824 2.824 0 00-.043-.024c-2.91-1.499-5.212-2.6-8.1-3.32a9.986 9.986 0 00-.324-.074v.002c-4.907-1.053-9.936 1.164-12.8 3.697l-.081.074c-1.564 1.415-2.357 1.999-3.418 2.866-2.977-1.531-6.225-2.509-9.139-2.223h-.015c-2.501.245-4.889.813-7.713 1.61h-.008c-1.414.388-2.606.748-3.78 1.181-1.174.434-1.998.199-4.745 2.738-1.665 1.54-2.932 4.49-3.36 7.463a46.177 46.177 0 00-6.267 1.32c-1.411.39-2.604.742-3.742 1.153-1.158.418-1.795-.038-4.807 2.746-2.127 1.967-4.182 6.192-3.772 9.892.295 2.663 1.512 3.937 2.569 5.36-2.217 1.481-4.52 3.05-6.385 4.199-1.043.614-1.56.712-3.336 2.356-1.618 1.496-3.653 3.978-4.076 7.757-.423 3.78 1.425 7.476 3.182 9.375 3.398 3.676 5.038 3.784 8.224 5.338 1.498.74 2.981 1.005 4.274 1.543-.04.243-.182.387-.207.64-.373 3.79 1.484 7.376 3.205 9.237 3.389 3.666 5.031 3.787 8.2 5.328 3.194 1.577 5.246 2.726 9.102 3.272 5.423.819 9.88-1.685 12.844-4.239l.096-.087c1.151-1.02 2.464-1.88 3.683-2.829 11.946 2.476 2.1 2.9 7.346 6.74-3.625.975-5.913 3.187-7.396 5.11-2.233 2.895-3.299 7.136-2.887 10.6.412 3.464 1.775 6.17 3.373 8.578 3.195 4.814 7.69 8.89 13.754 13.568 5.307 4.093 9.867 7.04 15.117 8.608 1.28.382 2.888.145 4.326.279.578 1.673.977 3.527 1.846 4.857 2.864 4.384 6.771 7.9 11.965 11.907 5.759 4.442 10.58 7.598 15.799 9.427 2.61.915 5.44 1.57 8.82 1.145 2.564-.323 5.398-1.59 7.586-3.436a39.52 39.52 0 001.28 3.739l.023.05c3.836 9.404 11.196 16.937 20.625 21.77 9.326 4.781 19.66 6.487 29.793 4.762h.008c1.799-.304 3.625-.777 5.394-1.438.901 3.792 2.618 7.413 5.05 10.465l.03.031c4.126 5.128 9.99 8.43 16.535 10.371 5.633 1.671 11.545 1.484 17.221.178 3.066 3.807 6.936 6.992 11.531 8.355 4.935 1.464 10.26 1.507 15.266.282 4.005-.953 7.815-2.68 11.088-5.168a25.05 25.05 0 002.78-2.424 44.857 44.857 0 004.403 5.672c6.163 6.628 14.428 10.874 23.268 11.529 4.825.358 9.524-.816 14.01-2.613 3.596 3.79 6.61 3.711 8.843 3.877 6.811.504 13.682.133 20.543-1.086l.053-.016c2.938-.538 5.634-1.222 8.211-2.383-.416 2.045-.307 3.955-.055 5.575 1.067 6.842 7.119 11.829 12.698 13.767h.008c8.932 3.115 18.718 3.724 28.877 2.14 5.833-.909 10.903-2.356 15.377-5.478 4.518-3.112 8.372-9.917 7.42-16.025a17.877 17.877 0 00-.9-3.367c8.212-1.97 15.65-6.552 20.896-13.494a43.216 43.216 0 003.691-5.729c.216.21.428.425.65.627l.043.05c3.151 2.829 7 4.929 11.11 5.995l.045.008c6.378 1.624 13.044.746 19.443-1.63 5.51-2.047 10.132-5.748 13.887-10.202 4.736 1.201 9.741 1.424 14.232-.244 4.83-1.794 9.118-4.957 12.387-8.948a30.738 30.738 0 003.926-6.048c3.207 1.418 6.79 1.94 9.691 1.517 5.4-.786 10.148-3.087 15.666-6.37 6.626-3.944 11.504-7.325 15.22-11.694 1.002-1.177 1.532-2.932 2.311-4.406 1.308.184 2.683.81 3.854.65h.023c5.385-.75 9.472-2.995 14.86-6.201 7.56-4.5 12.673-7.83 16.593-12.336 1.95-2.242 3.698-5.069 4.319-8.63.599-3.435-.211-7.266-1.81-10.122 2.734 1.112 5.625 1.816 8.587 2.017h.059c8.181.512 16.22-2.63 22.779-7.994 7.982-6.528 13.431-15.323 15.23-25.18.128-.68.228-1.377.301-2.085 2.522.62 5.065.932 7.76.763l.074-.008c4.358-.305 8.166-2.617 10.711-5.218 1.092-1.117 1.693-1.938 2.531-3.07.07-.098.139-.196.205-.296.235-.212.55-.503.895-.79a385.85 385.85 0 013.441-2.835c3.475-2.76 5.746-4.618 7.647-6.562 5.616-5.744 9.387-12.926 10.305-20.662 1.058-8.653-1.737-17.725-7.92-23.77-4.165-4.071-9.836-6.303-15.635-6.953.026-.281.184-.547.191-.828v-.191c.027-4.072-1.914-8.57-4.761-11.354-2.604-2.546-5.543-4.081-8.71-5.307a37.095 37.095 0 00-9.863-2.334c-.584-.058-1.185-.1-1.799-.12zM7.428 630.109c.057.008.075.045.133.053l-.245-.039c.041.008.07-.021.112-.014zm493.035 36.06c-.002.014-.008.027-.01.04l-.006-.002c.007-.014.009-.023.015-.037zm-37.205 87.677c.4.218.893.184 1.306.375-.781-.134-1.076-.235-1.306-.375zm-251.28 9.011c.186.405.594.666.805 1.057-.53-.559-.697-.797-.804-1.057zm183.239 11.92l.062.055c-.022-.023-.023-.009-.045-.031-.009-.01-.01-.015-.017-.024z"
            transform="matrix(.26458 0 0 .26458 0 3.43)"
          ></path>
        </g>
      </g>
      <g
        id="layer22"
        style={showBadgeText ? {} : { display: "none" }}
        fillOpacity="1"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeOpacity="1"
        color="#000"
        display="inline"
        paintOrder="markers fill stroke"
      >
        <g id="text1995" fill="#fff" stroke="#fff" strokeWidth="7.938">
          <path
            id="path2091"
            style={{}}
            d="M22.555 16.588l-3.877-6.124c-.502-.792-.873-1.258-1.114-1.399-.246-.149-.652-.136-1.217.036-.826.24-1.397.113-1.711-.384a1.06 1.06 0 01-.066-1.083c.177-.374.545-.737 1.103-1.09.187-.119.656-.4 1.408-.843l.699-.442a159.249 159.249 0 002.244-1.454c.215-.158.962-.73 2.242-1.713.42-.332.817-.616 1.19-.852 1.273-.806 2.57-1.263 3.893-1.372 2.301-.196 4.071.684 5.31 2.64 1.002 1.584 1.2 3.236.594 4.958-.576 1.615-1.675 2.936-3.297 3.963-.411.26-.933.553-1.565.877-.333.178-.538.292-.616.34-.225.143-.257.343-.094.599l.044.07 1.29 1.857c.252.363.495.6.729.713.237.1.604.13 1.099.087.677-.047 1.116.088 1.317.406.31.49.175 1.101-.403 1.837-.578.736-1.55 1.536-2.916 2.401-2.872 1.819-4.62 2.235-5.244 1.25-.147-.234-.198-.452-.153-.654.046-.203.224-.566.534-1.089.187-.324.22-.633.099-.926-.12-.294-.628-1.163-1.522-2.61z"
          ></path>
          <path
            id="path2093"
            style={{}}
            d="M44.859 2.884q-.49.185-.52.535-.016.346.393 1.428.62 1.637 1.172 2.474.162.234.345.327.182.093.621.162.934.133 1.198.829.322.85-.624 1.621-.938.753-3.503 1.723-4.769 1.805-5.452 0-.117-.309-.043-.543.068-.247.444-.772.426-.588.429-1.164.011-.594-.385-1.873-.282-.94-2.418-6.585-.678-1.791-1.102-2.367-.424-.577-1.13-.649-.669-.056-.945-.202-.281-.159-.418-.52-.18-.476.049-.96.237-.503.831-.92.5-.35 1.467-.717.425-.16 2.176-.676.331-.096 1.027-.36 1.16-.438 3.035-1.324 1.19-.554 1.68-.74 2.758-1.043 5.065-.398 2.078.584 2.882 2.71.449 1.186.253 2.38-.202 1.181-1.009 2.047-.334.362-.227.646.142.373.86.366 1.54-.022 2.547.731 1.007.754 2.053 2.7.438.807.754.982.312.162 1.199.092.274-.015.54.179.26.181.377.49.15.4-.003.93-.158.516-.56.934-.892.912-2.774 1.624-2.513.951-4.098.033-.714-.407-1.403-1.178-.677-.775-1.863-2.507-.76-1.112-1.414-1.44-.641-.331-1.506-.048zm-3.235-6.29l.994 3.056.044.116q.176.464.363.57.2.101.613-.055 1.134-.429 1.43-1.204.291-.788-.196-2.077-.942-2.487-2.707-1.82-.503.191-.621.501-.119.31.08.913z"
          ></path>
          <path
            id="path2095"
            style={{}}
            d="M65.953-14.118q3.512-.457 6.397 1.211 1.955 1.15 3.348 3.206 1.364 2.046 1.648 4.232.42 3.225-1.382 6.044Q74.44 2.97 71.653 4.29q-1.716.807-3.52 1.041-2.364.307-4.651-.396-2.765-.85-4.553-3.063-1.737-2.136-2.101-4.938-.423-3.252 1.099-5.98 1.352-2.426 3.991-3.825 1.766-.952 4.035-1.247zm-.789 4.09q-1.148.15-1.684 1.262-.42.832-.283 1.885.2 1.544 1.094 3.498.891 1.941 2.052 3.388.51.615 1.177.931.68.315 1.323.231 1.038-.135 1.566-.995.54-.863.375-2.134-.214-1.653-.996-3.497-.782-1.844-1.805-3.087-.627-.766-1.373-1.155-.745-.39-1.446-.326z"
          ></path>
          <path
            id="path2097"
            style={{}}
            d="M90.748-14.595q1.541.071 3.125.42 1.298.28 1.845.692.546.412.515 1.086-.02.427-.238.665-.217.225-.921.537-.818.376-.967.935-.136.545-.407 4.313-.21 3.646-.284 4.373-.062.729-.231 1.41-.492 1.992-1.756 3.079-1.035.89-2.615 1.355-1.58.465-3.3.386-1.529-.071-3.052-.541-1.51-.47-2.606-1.224-.91-.622-1.415-1.625-.505-1.016-.453-2.131.063-1.377.972-2.231.909-.869 2.217-.809 1.28.06 2.14.858.859.812.807 1.941-.014.29-.21.956-.034.136-.041.302-.02.44.283.73.304.29.827.314.922.043 1.525-.757.602-.8.665-2.15l.044-1.252.128-3.374q.018-3.076-.026-3.616-.03-.553-.262-.909-.193-.284-.355-.375-.147-.09-.841-.3-.327-.085-.547-.412-.22-.328-.203-.685.035-.744.633-1.158.613-.427 1.947-.64 1.487-.236 3.057-.163z"
          ></path>
          <path
            id="path2099"
            style={{}}
            d="M100.95-13.437l6.977 1.22q2.117.37 3.096.458.993.076 1.964-.034.3-.032.462-.004.706.124 1.116.979.68 1.392.374 3.143-.154.882-.625 1.332-.454.438-1.106.324-.448-.078-.675-.3-.21-.233-.52-.944-.438-1.014-1.31-1.474-.854-.472-2.944-.837-1.562-.273-1.998.224-.229.268-.357.763-.115.498-.476 2.56-.143.815.093 1.066.239.238 1.392.44.57.1.869-.086.3-.2.475-.798.233-.771.378-1.04.16-.28.47-.449.328-.194.708-.128.556.097.857.696.217.443.231 1.48.03 1.027-.16 2.113-.375 2.145-1.28 3.4-.497.682-1.243.552-.462-.081-.598-.343-.134-.275-.098-1.038.065-1.57-1.524-1.847-.61-.107-.91.246-.284.342-.466 1.387-.112.638-.209 1.67-.08 1.022-.042 1.364.037.427.565.687.544.249 1.86.479 2.037.356 3.159.02 1.124-.348 2.016-1.605.517-.721.863-.94.36-.217.849-.132.57.1.849.666.294.555.164 1.302-.143.814-.777 1.962-.635 1.149-1.412 1.992-.393.407-.622.52-.232.128-.545.073-.258-.045-.732-.212-.84-.315-2.286-.61l-11.51-2.012q-.693-.121-1.02-.486-.326-.38-.229-.936.069-.393.263-.541.193-.148.824-.318.439-.105.674-.33.248-.222.445-.705.806-1.972 1.414-5.447.916-5.24.504-6.724-.088-.296-.232-.433-.144-.137-.633-.376-.734-.366-.594-1.167.076-.435.394-.729.317-.294.757-.33.55-.029 2.07.237z"
          ></path>
          <path
            id="path2101"
            style={{}}
            d="M129.099-7.054q1.9.66 3.382 2.108.697.68 1.023.793.234.08.796.144.182.02.39.092.678.235.969 1.037.725 1.944-.052 4.183-.547 1.575-1.88 1.929-.722.187-1.45-.066-.665-.23-.982-.661-.317-.431-.455-1.296-.203-1.223-.4-1.787-.194-.578-.575-1.119-.955-1.323-2.335-1.802-1.341-.466-2.474.235-1.116.692-1.68 2.32-.778 2.239-.291 4.493.673 3.02 3.537 4.014 1.054.366 2.205.372 1.163.01 1.93-.351.658-.297.97-.189.456.158.632.701.18.53-.027 1.128-.262.755-1.043 1.535-.781.779-1.604 1.091-.35.127-1.268-.002-.527-.081-1.482.025-2.248.255-4.331-.468-2.174-.754-3.996-2.48-2.12-2.006-2.764-4.855-.642-2.775.222-5.262 1.003-2.89 3.626-4.649 2.281-1.527 5.173-1.749 2.203-.169 4.234.536z"
          ></path>
          <path
            id="path2103"
            style={{}}
            d="M145.288.398l6.321 3.575q1.04.541 2.015.776.414.108.69.264.972.55 1.07 2.504.109 1.962-.753 3.485-.59 1.044-1.498 1.164-.683.089-1.355-.291-.635-.36-.906-.972-.264-.625-.259-1.698.025-.968-.074-1.325-.099-.356-.423-.54-.444-.25-.846.013-.402.263-.884 1.114l-3.8 6.717q-.583 1.032-.632 1.622-.048.59.409 1.18.492.643.577 1.024.104.375-.14.807-.488.864-1.901.619-1.401-.239-3.824-1.61-2.975-1.682-4.136-2.988-.98-1.093-.465-2.004.278-.492.866-.524.142.001 1.014.194.53.126.91-.15.39-.27 1.094-1.265.626-.882 1.89-2.921 1.271-2.052 2.14-3.587.61-1.08.7-1.63.09-.551-.294-.768-.467-.265-1.291.156-1.496.769-2.235.873-.877.122-1.453-.204-.647-.367-.796-1.084-.141-.729.286-1.485.42-.743 1.259-1.44.844-.71 1.836-1.147 1.603-.708 2.49-.206.24.136.512.384.573.498.954.777.392.286.932.59z"
          ></path>
        </g>
        <path
          id="path1947"
          fill="none"
          stroke="none"
          strokeWidth="1.587"
          d="M-10.29 152.66c53.427 76.922 141.24 72.233 195.996 0"
          overflow="visible"
        ></path>
        <path
          id="path1952"
          fill="none"
          stroke="none"
          strokeWidth="1.587"
          d="M-23.676 84.414C-.355 40.725 32.487 3.83 80.687 4.181c52.24.38 89.086 25.718 111.722 79.743"
          overflow="visible"
        ></path>
      </g>
      <g id="layer23" style={showBadgeText ? {} : { display: "none" }}>
        <g
          id="text"
          fill="#000"
          fillOpacity="1"
          stroke="none"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          color="#000"
          transform="translate(0 -3.43)"
        >
          <g id="text1926" strokeWidth="1.587" display="inline">
            <path
              d="M2.593 163.193l.607-.405.513-.385q.384-.356-.171-.957-.134-.144-.883-.833-.145-.133-.256-.253-.467-.505-.094-.85.156-.144 1.186-.428 1.043-.295 1.577-.343.837-.083 1.315.433.133.145.276.347.11.143.199.24.266.288.79-.062l.762-.55q.096-.065.18-.143.313-.312-.02-.672-.178-.193-1.105-1.074-.178-.17-.256-.253-.467-.505-.094-.85.168-.155 1.163-.429 1.007-.284 1.6-.342.837-.083 1.326.445.133.145.276.347.11.166.187.25.266.289.79-.084l.524-.35q.643-.461 1.736-1.45.552-.487 1.08-.374.55.138 1.572.664 1.033.538 1.333.863.377.408.017.742-.132.122-.487.316-.26.13-1.32.864l-1.976 1.381q-.262.175-.286.197-.334.265.177.818l.577.625q.334.36.54.391.22.02.625-.265l.5-.35q.75-.515 1.723-1.415.553-.511 1.104-.397.563.126 1.572.664 1.033.538 1.344.875.144.156.147.376.003.22-.141.353-.132.123-.498.305-.249.14-1.308.875l-1.977 1.382q-.25.164-.322.23-.276.256.113.677.8.865 1.046 1.083.27.219.347.303.356.384-.041.751-.24.222-1.961.699-1.393.374-1.893-.167-.178-.192-.429-.584-.12-.179-.187-.25-.255-.277-.767.085l-.632.45q-.261.175-.333.242-.373.344.25 1.017.433.469.836.809.236.183.336.29.367.397.018.72-.216.2-1.143.499-.926.3-1.566.379-.826.095-1.182-.29-.222-.24-.44-.596-.12-.179-.187-.25-.255-.277-.743.063-1.284.853-2.424 1.862-.707.61-1.282.517-.484-.065-1.632-.631-1.136-.554-1.391-.83-.356-.385.077-.785.108-.1.44-.296 1.21-.74 2.745-1.803l.786-.548q.167-.11.287-.22.42-.39-.046-.894l-.656-.709q-.466-.504-1.003-.097l-.298.208q-1.143.79-2.126 1.654-.707.61-1.283.517-.483-.065-1.63-.631-1.137-.554-1.393-.83-.355-.385.09-.796.095-.089.427-.284 1.223-.751 2.746-1.803zm7.339.079l.733.793q.289.312.462.33.184.031.553-.221l.75-.538q.25-.164.31-.22.288-.266-.123-.71l-.733-.794q-.289-.312-.473-.342-.173-.019-.53.245l-.762.526q-.167.11-.287.22-.3.278.1.71z"
              style={{}}
              id="path2034"
            ></path>
            <path
              d="M32.166 167.379l-4.356 5.3q-.776.951-.154 1.43.311.24.94.043 2.665-.858 4.765.761 2.06 1.59 2.308 3.786.115.977-.255 1.911-.356.945-1.43 2.39l-3.49 4.768q-.458.619-.535 1.014-.064.405.15 1.252.146.588-.174 1.002-1.08 1.4-5.303-1.858-3.758-2.899-2.749-4.207.17-.22.325-.287.155-.067.933-.272 1.094-.293 3.293-3.144 1.33-1.723 1.615-2.764.402-1.405-.7-2.255-.79-.61-1.606-.329-.592.205-1.471 1.345l-1.929 2.501q-1.189 1.728-1.294 1.999-.105.27-.033 1.276.036.462-.244.825-1.13 1.464-4.939-1.475-4.457-3.438-3.288-4.954.27-.35.553-.421.292-.084 1.149-.043.762.03 2.123-1.36 1.384-1.392 4.122-4.942 2.149-2.786 2.823-3.981.258-.442.255-.733.02-.295-.205-.779-.484-1.034-.064-1.578.5-.648 1.419-.58.918.068 3.002.93 2.832 1.152 4.218 2.221.752.58.226 1.208z"
              style={{}}
              id="path2036"
            ></path>
            <path
              d="M47.96 193.66l-6.845-3.508q-.451-.231-.653.162-.485.946.101 2.314.609 1.36 1.788 1.964.7.359 1.678.53 1.001.163 1.756.054.675-.096.966.053.379.194.504.847t-.129 1.148q-.537 1.048-2.348 1.352-3.204.546-6.233-1.007-3.058-1.567-4.215-4.404-.557-1.389-.578-2.962-.015-2.086.918-3.907 1.254-2.446 3.74-3.636 2.147-1.032 4.553-.847 1.806.135 3.54 1.023 2.766 1.419 3.897 3.984.572 1.287.617 2.67.057 1.574-.54 2.74-.485.946-1.192 1.356-.7.396-1.325.075zm-5.07-6.037l1.47.754q.933.478 1.373-.381.403-.787.206-1.513-.198-.727-.926-1.1-.816-.418-1.61-.016-.743.373-1.057.984-.224.437-.11.717.13.286.654.555z"
              style={{}}
              id="path2038"
            ></path>
            <path
              d="M61.887 188.91q2.73.809 4.219 2.753.785 1.035.893 2.108.13 1.063-.364 2.726l-.725 2.328q-.721 2.432-.59 3.256.07.396.199.537.129.14.608.368.478.227.306.808-.223.753-1.077 1.387-.838.639-1.958.904-1.382.341-2.668-.04-1.647-.489-2.27-1.902-.208-.506-.49-.59-.314-.093-.948.146-1.909.68-3.901.088-2.055-.61-3.065-1.865-.66-.827-.871-1.897-.208-1.085.095-2.105.484-1.632 2.174-2.496 2.642-1.367 6.741-.168.91.27 1.197.167.29-.118.486-.777.494-1.663.367-2.503-.122-.855-.906-1.088-.47-.14-.931.031-.445.175-1.217.766-1.987 1.578-3.51 1.126-.768-.228-1.12-.827-.35-.6-.132-1.337.223-.753 1.043-1.329.835-.571 2.038-.829 3.287-.664 6.377.253zm-3.746 8.771q-.69-.205-1.375.206-.67.416-.902 1.2-.224.754-.003 1.331.226.562.822.74 1.256.372 1.884-1.746.256-.863.156-1.217-.084-.35-.582-.514z"
              style={{}}
              id="path2040"
            ></path>
            <path
              d="M88.49 188.016l-1.105 14.9q-.094 1.273-.023 1.64.088.367.552.746.557.451.73.776.19.326.156.766-.096 1.306-2.775 1.797-2.41.428-4.777.253-.522-.04-.673-.214-.136-.158-.142-.75-.02-.838-.526-.875-.277-.02-.9.425-1.766 1.232-3.806 1.08-2.53-.187-4.414-2.214-1.108-1.214-1.733-2.737-.838-1.982-.693-3.94.17-2.302 1.602-4.345 1.322-1.888 3.424-2.799 1.762-.755 3.41-.633 1.894.14 3.332 1.1.235.149.382.16.522.039.626-1.365.045-.604-.226-.936-.253-.347-.97-.63-1.004-.402-.944-1.218.088-1.191 2.504-1.685 4.264-.85 5.684-.744 1.403.104 1.304 1.442zm-9.47 7.552q-1.061-.078-1.765 1.002-.944 1.44-1.125 3.887-.164 2.22.552 3.405.51.859 1.49.931 1.06.079 1.624-1.11.582-1.204.785-3.946.186-2.513-.323-3.388-.392-.685-1.239-.78z"
              style={{}}
              id="path2042"
            ></path>
            <path
              d="M96.43 191.729q.985-.154 1.256-.014.267.124.373.803.094.598.482.538.161-.025.987-.783.622-.578 1.642-1.051 1.032-.492 1.906-.628 2.053-.32 3.892.85 1.398.892 2.334 2.435.98 1.62 1.278 3.528.635 4.074-1.703 7.138-1.798 2.384-4.498 2.805-1.374.214-2.93-.206-.311-.084-.49-.056-.484.075-.333 1.045.199 1.278 1.144 1.71.876.41 1.049.565.192.17.26.606.151.97-.852 1.656-1 .703-2.972 1.01-3.509.547-6.364-.449-1.453-.502-1.617-1.553-.075-.485.079-.774.172-.275.711-.641.78-.52.8-1.565.035-1.05-.622-5.899-.733-3.96-.987-4.417-.09-.152-.226-.18-.121-.031-.82-.055-.533-.016-.914-.337-.384-.338-.467-.872-.101-.646.276-1.202.375-.572 1.32-1.2 3.682-2.412 6.005-2.807zm2.553 5.862l.45 4.485q.027.277.067.536.078.5.563.74.484.24 1.212.126 2.231-.348 1.659-4.018-.37-2.377-1.46-3.201-.675-.508-1.483-.382-1.148.18-1.008 1.714z"
              style={{}}
              id="path2044"
            ></path>
            <path
              d="M117.397 186.323q2.67-.992 5.027-.331 1.25.356 1.98 1.15.741.772 1.345 2.398l.818 2.297q.883 2.378 1.483 2.958.294.275.482.31.187.035.707-.07.519-.106.73.461.273.737-.029 1.757-.286 1.014-1.023 1.898-.9 1.102-2.158 1.57-1.61.598-2.956-.159-.47-.28-.747-.177-.306.114-.67.686-1.118 1.69-3.067 2.413-2.01.746-3.57.349-1.025-.266-1.836-.994-.818-.744-1.188-1.741-.593-1.596.24-3.301 1.292-2.68 5.29-4.182.89-.33 1.057-.585.162-.27-.078-.914-.603-1.626-1.209-2.221-.61-.611-1.378-.326-.46.17-.726.583-.25.408-.513 1.343-.642 2.456-2.13 3.008-.752.28-1.392.011-.641-.268-.909-.99-.273-.735.036-1.688.325-.959 1.132-1.887 2.23-2.504 5.252-3.626zm2.27 9.263q-.674.251-.975.991-.286.735-.001 1.502.273.736.797 1.065.518.314 1.101.098 1.227-.456.458-2.527-.313-.844-.605-1.067-.277-.229-.774-.062z"
              style={{}}
              id="path2046"
            ></path>
            <path
              d="M145.161 178.689l3.143 4.833q.363.545.663.729.313.175 1.482.508.345.099.588.507.552.928-.34 1.955-.894 1.026-3.749 2.725-1.94 1.155-2.943 1.295-1.039.142-1.507-.645-.168-.282-.159-.458 0-.191.17-.996.21-.926-1.781-4.272-1.155-1.941-2.158-2.601-.809-.528-1.793.058-.942.56-.934 1.374.008.814.954 2.403l1.657 2.785q.494.83.776 1.08.297.243 1.415.777.305.161.498.485.493.83-.425 1.91-.92 1.08-3.366 2.535-3.91 2.327-4.872.71-.2-.338-.189-.573.018-.258.276-.85.206-.484.104-.88-.111-.41-.83-1.81-.856-1.663-1.902-3.42-.577-.97-.908-1.174-.324-.226-1.287-.243-.83-.02-1.157-.568-.335-.563-.052-1.207.275-.659 1.481-2.12 1.066-1.281 2.125-2.35 1.05-1.082 1.514-1.358.422-.25.888-.109.48.134.73.556.025.042.195.36.053.12.103.205.402.675.965.34.337-.2.399-.961.171-2.464 2.478-3.836 1.771-1.055 3.59-.88 1.279.134 2.166.825.879.676 1.992 2.356z"
              style={{}}
              id="path2048"
            ></path>
            <path
              d="M153.505 169.587l3.501 4.281q.622.76 1.383.941.774.17 1.356-.306.494-.404.932-1.523.097-.27.287-.425.304-.248.858-.088.553.16.906.59.642.786.371 2.213-.545 3.003-3.104 5.096-2.027 1.658-4.188 1.523-2.171-.148-3.704-2.023l-4.787-5.852q-.238-.291-.366-.293-.125-.024-.417.214l-1.304 1.067q-.368.3-.562.27-.205-.044-.568-.487l-.456-.558q-.298-.39-.164-.795l2.818-8.393q.122-.29.438-.55l1.027-.839q.316-.259.542-.19.228.047.58.477l1.399 1.71q.31.38.518.401.22.01.612-.31l2.344-1.917q.468-.384.753-.32.274.05.73.608l.61.747q.498.608.518.994.009.373-.46.756l-2.293 1.876q-.354.29-.377.52-.023.23.267.585z"
              style={{}}
              id="path2050"
            ></path>
            <path
              d="M159.449 158.18q.572-.585 2.122-1.655.31-.224.481-.4.195-.198.545-.977.157-.372.34-.56.527-.538 1.755-.413.984.093 1.914.453.93.36 1.41.829.468.457.463 1.094-.016.625-.496 1.116-.4.41-.92.543-.508.121-1.884.172-1.458.04-1.938.53-.32.328-.315.814.005.463.333.784.573.56 2.152-.048 2.822-1.108 4.905-1.131 1.759-.02 3.046 1.238 1.626 1.59 1.319 4.082-.253 2.155-1.992 3.934-.446.456-1.777 1.512-1.238 1.01-1.376 1.15-.148.152-.308.385-.285.385-.433.538-.538.55-1.128.59-.902.057-2.226-.437-1.337-.506-2.004-1.158-1.076-1.052-.253-1.895.32-.327.806-.379.485-.075 2.28-.037.983.023 1.49-.098.497-.133.852-.496.377-.386.407-.814.018-.44-.321-.772-.527-.515-1.84-.037-2.767.98-4.573.862-1.795-.13-3.083-1.389-1.392-1.361-1.563-3.2-.25-2.623 1.81-4.73z"
              style={{}}
              id="path2052"
            ></path>
          </g>
          <g id="text1956" transform="translate(0 3.43)">
            <path
              d="M22.555 16.588l-3.877-6.124q-.752-1.188-1.114-1.399-.37-.223-1.217.036-1.24.361-1.711-.384-.332-.524-.067-1.083.266-.56 1.104-1.09.28-.178 1.408-.843l.698-.442q1.926-1.236 2.244-1.454.323-.237 2.243-1.713.63-.498 1.19-.852Q25.365.031 27.349-.132q3.452-.294 5.31 2.64 1.503 2.376.594 4.958-.864 2.422-3.297 3.963-.617.39-1.565.877-.5.267-.616.34-.338.215-.095.599l.045.07 1.29 1.858q.377.544.729.712.356.15 1.099.088 1.015-.072 1.317.405.464.734-.403 1.837-.867 1.104-2.916 2.401-4.308 2.728-5.244 1.25-.221-.35-.153-.654.069-.304.534-1.089.28-.486.099-.926-.181-.44-1.522-2.61zm.437-10.928L25.5 9.62q.287.454.544.422.44-.051.953-.375.769-.487 1.02-1.25.366-1.096-.556-2.551-.958-1.514-2.27-1.629-.832-.076-1.624.425-.861.545-.574 1z"
              style={{}}
              id="path2055"
            ></path>
            <path
              d="M44.859 2.884q-.49.185-.52.535-.017.346.393 1.428.62 1.637 1.172 2.474.162.234.345.327.182.093.621.162.934.133 1.198.829.322.85-.624 1.621-.939.753-3.503 1.723-4.77 1.805-5.452 0-.117-.309-.043-.543.068-.247.444-.772.426-.588.429-1.164.01-.594-.385-1.873-.282-.94-2.418-6.585-.678-1.791-1.102-2.367-.425-.577-1.13-.649-.67-.056-.945-.202-.281-.158-.418-.52-.18-.476.049-.96.237-.503.83-.92.501-.35 1.468-.717.425-.16 2.175-.676.332-.096 1.028-.36 1.16-.438 3.035-1.324 1.19-.554 1.68-.74 2.758-1.043 5.065-.398 2.077.584 2.882 2.71.449 1.186.252 2.38-.2 1.181-1.008 2.047-.334.362-.227.646.141.373.86.366 1.54-.022 2.546.731 1.008.754 2.054 2.7.438.807.754.982.312.162 1.199.092.274-.015.54.179.26.181.376.49.152.4-.002.93-.158.516-.56.934-.892.912-2.774 1.624-2.513.951-4.098.033-.714-.407-1.404-1.178-.676-.775-1.862-2.507-.76-1.112-1.414-1.44-.641-.331-1.506-.048zm-3.235-6.29l.994 3.056.044.116q.176.464.363.57.2.101.613-.055 1.134-.429 1.43-1.204.291-.788-.197-2.077-.94-2.487-2.707-1.82-.502.191-.62.501-.119.31.08.913z"
              style={{}}
              id="path2057"
            ></path>
            <path
              d="M65.953-14.118q3.512-.457 6.396 1.211 1.956 1.15 3.35 3.206 1.363 2.046 1.647 4.232.42 3.225-1.382 6.044Q74.44 2.97 71.652 4.29q-1.715.807-3.519 1.041-2.364.307-4.651-.396-2.765-.85-4.553-3.063-1.737-2.136-2.101-4.938-.423-3.252 1.099-5.98 1.352-2.426 3.99-3.825 1.767-.952 4.036-1.247zm-.789 4.09q-1.148.15-1.684 1.262-.42.832-.283 1.885.2 1.544 1.094 3.498.891 1.941 2.052 3.388.51.615 1.177.931.68.315 1.323.231 1.038-.135 1.565-.995.542-.863.376-2.134-.215-1.653-.996-3.497-.782-1.844-1.805-3.087-.628-.766-1.373-1.155-.745-.39-1.446-.326z"
              style={{}}
              id="path2059"
            ></path>
            <path
              d="M90.748-14.595q1.541.071 3.125.42 1.298.28 1.845.692.546.412.515 1.086-.02.427-.238.665-.217.225-.921.537-.817.376-.967.935-.136.545-.407 4.313-.21 3.646-.284 4.373-.062.729-.231 1.41-.492 1.992-1.756 3.079-1.035.89-2.615 1.355-1.58.465-3.3.386-1.529-.071-3.052-.541-1.51-.47-2.606-1.224-.91-.622-1.415-1.625-.505-1.016-.453-2.131.063-1.377.972-2.231.909-.869 2.217-.809 1.28.06 2.14.858.859.812.807 1.941-.014.29-.21.956-.034.136-.041.302-.02.44.283.73.304.29.827.314.922.043 1.525-.757.602-.8.665-2.15l.044-1.252.128-3.374q.018-3.076-.026-3.616-.03-.553-.262-.909-.193-.284-.355-.375-.147-.09-.841-.3-.327-.085-.547-.412-.22-.328-.203-.685.035-.744.633-1.158.613-.427 1.947-.64 1.487-.236 3.057-.163z"
              style={{}}
              id="path2061"
            ></path>
            <path
              d="M100.95-13.437l6.977 1.22q2.118.37 3.096.458.994.076 1.964-.034.3-.032.462-.004.706.124 1.116.979.68 1.392.374 3.143-.154.882-.625 1.332-.454.438-1.106.324-.448-.078-.675-.3-.21-.233-.52-.944-.438-1.014-1.309-1.474-.855-.472-2.945-.837-1.561-.273-1.998.224-.229.268-.357.763-.115.497-.476 2.56-.143.815.093 1.066.238.238 1.392.44.57.1.869-.086.3-.2.475-.799.233-.77.378-1.039.16-.28.47-.449.328-.195.708-.128.556.097.857.696.217.443.231 1.48.03 1.027-.16 2.113-.375 2.145-1.28 3.4-.497.682-1.243.552-.462-.081-.598-.343-.134-.275-.098-1.038.065-1.57-1.524-1.847-.61-.107-.91.246-.284.342-.466 1.387-.112.638-.209 1.67-.08 1.022-.042 1.364.037.427.565.687.544.249 1.86.479 2.037.356 3.159.02 1.124-.348 2.016-1.605.517-.721.863-.94.36-.217.849-.132.57.1.849.666.294.555.164 1.302-.143.814-.777 1.962-.635 1.149-1.412 1.992-.393.407-.622.52-.232.128-.545.073-.258-.045-.732-.212-.84-.315-2.286-.61l-11.51-2.012q-.693-.121-1.02-.486-.326-.38-.229-.936.069-.393.263-.541.193-.148.825-.318.438-.105.673-.33.248-.222.445-.705.806-1.972 1.414-5.447.916-5.24.504-6.724-.088-.296-.232-.433-.144-.137-.633-.376-.734-.366-.594-1.167.076-.435.394-.729.317-.294.757-.33.55-.029 2.07.237z"
              style={{}}
              id="path2063"
            ></path>
            <path
              d="M129.1-7.054q1.9.66 3.381 2.108.698.68 1.023.793.234.08.796.144.183.02.391.092.677.235.968 1.037.725 1.944-.052 4.183-.547 1.575-1.88 1.929-.722.187-1.45-.066-.665-.23-.982-.661-.317-.431-.455-1.296-.202-1.223-.4-1.787-.194-.578-.575-1.119-.955-1.323-2.335-1.802-1.341-.466-2.474.235-1.116.692-1.68 2.32-.778 2.239-.291 4.493.673 3.02 3.537 4.014 1.054.366 2.205.372 1.163.01 1.93-.351.658-.297.97-.189.456.158.632.701.181.53-.027 1.128-.262.756-1.043 1.535-.78.779-1.604 1.091-.35.127-1.268-.002-.527-.081-1.482.025-2.248.255-4.33-.468-2.175-.754-3.997-2.48-2.12-2.006-2.764-4.855-.641-2.775.222-5.262 1.003-2.89 3.626-4.649 2.281-1.527 5.173-1.749 2.203-.169 4.234.536z"
              style={{}}
              id="path2065"
            ></path>
            <path
              d="M145.288.398l6.321 3.575q1.04.541 2.015.776.415.108.69.264.972.55 1.07 2.504.109 1.962-.753 3.486-.59 1.043-1.497 1.163-.684.089-1.355-.291-.636-.36-.907-.972-.264-.625-.259-1.698.025-.968-.074-1.325-.099-.356-.423-.54-.443-.25-.846.013-.402.263-.884 1.115l-3.8 6.716q-.583 1.032-.631 1.622-.049.59.408 1.18.492.643.577 1.024.104.375-.14.807-.488.864-1.901.619-1.401-.239-3.824-1.61-2.975-1.682-4.136-2.988-.98-1.093-.465-2.004.278-.492.866-.524.142.001 1.015.194.53.126.908-.15.39-.27 1.096-1.265.625-.882 1.89-2.921 1.27-2.052 2.139-3.587.61-1.08.7-1.63.09-.551-.293-.768-.468-.265-1.292.156-1.496.769-2.235.873-.877.122-1.452-.204-.648-.366-.796-1.084-.142-.729.285-1.485.421-.743 1.259-1.44.845-.71 1.836-1.147 1.603-.708 2.491-.206.24.136.511.384.573.498.954.777.393.286.932.59z"
              style={{}}
              id="path2067"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
