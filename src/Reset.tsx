/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const ResetCSS = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      html,
      body {
        height: 100%;
        font-family: sans-serif; /* 원하는 폰트로 변경 가능 */
        line-height: 1.5;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
      }

      ol,
      ul {
        list-style: none;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      a {
        text-decoration: none;
        color: inherit; /* 기본 색상 유지 */
      }

      button {
        cursor: pointer;
      }
      ::-webkit-scrollbar {
        display: none; /* 스크롤바 숨기기 */
      }
    `}
  />
);

export default ResetCSS;
