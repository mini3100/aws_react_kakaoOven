import { css } from "@emotion/react";

export const SLayout = css`
    margin-bottom: 20px;
    background-color: #383d40;
    min-height: 50px;
    & * {
        color: white;
    }
`;

export const SContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px auto;
    width: 1170px;
    height: 50px;
`;

export const STitle = css`
    display: flex;
    padding: 15px;
    height: 50px;
    cursor: pointer;
`;

export const SLogo = css`
    font-size: 22px;
`;

export const SSmallLogo = css`
    padding: 1px 3px;
    font-size: 12px;
    color: #aaa;
`;

export const SMenu = css`
    position: relative;
    display: flex;
    padding: 15px;
    height: 50px;
    cursor: pointer;
    z-index: 3;
    /* 드래그 방지 */
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
`;

export const SProfile = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SImgBox = css`
    position: absolute;
    top: 10px;
    left: 10px;
    border-radius: 50%;
    background-color: white;
    width: 30px;
    height: 30px;
    overflow: hidden;
`;

export const SImg = css`
    width: 100%;
    height: 100%;
`

export const SUsername = css`
    padding: 0 10px 0 35px;
    font-size: 14px;
`

export const SDropdownBtn = css`
    font-size: 8px;
`;

export const SNav = (isMenuOpen) =>
css`
    ${isMenuOpen ? "" : "display: none;"}
    position: absolute;
    border: 1px solid #dbdbdb;
    padding: 5px 0px;
    right: 0px;
    top: 50px;
    min-width: 160px;
    background-color: #fffffff2;
`;

export const SMenuListBox = css`
    padding: 9px 24px;
    font-size: 14px;
    white-space: nowrap;
    color: #333;
    &:hover {
        background-color: #ecececf2;
    }
`

export const SDivider = css`
    margin: 9px 0;
    height: 1px;
    background-color: #e5e5e5;
`