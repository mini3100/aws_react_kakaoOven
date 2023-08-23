import { css } from "@emotion/react";

export const SLayout = css`
    margin: 0 auto;
    padding: 0 15px;
    width: 1170px;
`


export const SBodyContainer = css`
    display: flex;
    margin: 20px -15px 0;
`;

export const SBodyRight = css`
    padding: 0 15px;
    width: 100%;
`;

export const SButtons = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    width: 100%;
    & > * {
        border-radius: 2px;
        padding: 6px 12px;
    }
`;

export const SSelectAllBtn = css`
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #e6e6e6;
    }
`;

export const SAddProjectBtn = css`
    border: 1px solid #357ebd;
    background-color: #3498db;
    cursor: pointer;
    & *, & {
        color: white;
    }
    & * {
        position: relative;
        top: 2px;
        left: -2px;
    }
    &:hover {
        background-color: #3071a9;
    }
`;

export const SPageBox = css`
    flex-grow: 1;
    height: 602px;
`;