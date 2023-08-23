import { css } from "@emotion/react";

export const SListGroup = css`
    &:first-child {
        border-top-left-radius: 2px;
        border-top-right-radius: 2px;
    }
    &:last-child {
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
    }
`

export const SListItem = css`
    position: relative;
    border: 1px solid #ccc;
    padding: 20px 35px;
`

export const SCheckBox = css`
    position: absolute;
    top: 10px;
    left: 10px;
    & * {
        cursor: pointer;
    }
`

export const SListItemBox = css`
    display: flex;
`;

export const SProjectImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border: 1px solid #c5c5c5;
    background-color: #c5c5c5;
    width: 180px;
    height: 120px;
`

export const SProjectImg = css`
    background-color: white;
    width: 100%;
    height: 90px;
`

export const SItemBody = css`
    flex-grow: 1;
`

export const SProjectName = css`
    margin: 0 50px 10px 0;
    font-size: 24px;
    font-weight: 500;
    color: #3498db;
    cursor: pointer;
    &:hover {
        color: #2a6496;
        text-decoration: underline;
    }
`;

export const Sdivider = css`
    margin: 8px 0 15px;
    border-bottom: 1px solid #eee;
`;

export const StextBox = css`
    display: flex;
    align-items: center;
`;

export const SEditTime = css`
    display: flex;
    align-items: center;
    margin-right: 20px;
    font-weight: 700;
    font-size: 12px;
`;

export const STestAble = css`
    border-radius: 2px;
    padding: 0.2em 0.6em 0.3em;
    background-color: #5cb85c;
    font-weight: 700;
    font-size: 11px;
    color: white;
`;

export const SMenuBox = css`
    position: absolute;
    top: 10px;
    right: 10px;
`

export const SMenuBtn = css`
    border: 1px solid white;
    border-radius: 2px;
    padding: 1px 5px;
    background-color: white;
    font-size: 8px;
    cursor: pointer;
    & *, & {
        color: #888;
    }

    &:hover {
        border-color: #ccc;
        background-color: #e6e6e6;
    }
`