import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
    padding-bottom: 9px;
`;

export const SHeaderRight = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
`;

export const STitle = css`
    margin: 20px 0 10px;
    font-size: 36px;
    line-height: 40px;
`

export const SInputBox = css`
    transition: all 0.2s ease;
    position: relative;
    border: 1px solid #ccc;
    border-radius: 2px;
    margin-right: 20px;
    padding: 6px 42.5px 6px 12px;
    height: 34px;
    &:focus-within {
        border-color: #3498d8;
        box-shadow: 0px 0px 5px #3498d8;
    }
`

export const SInput = css`
    outline: none;
    border: none;
`

export const SSearchIcon = css`
    position: absolute;
    top: 0px;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    & * {
        font-size: 16px;
    }
`;

export const SButtons = css`
    display: flex;

    & label:first-child span {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        border-right-color: #adadad;
    }
    & label:last-child span {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-left: none;
    }
`

export const SBtnBox = css`
    cursor: pointer;

    & input {
        display: none;
    }

    & input:checked + span {
        background-color: #e6e6e6;
        box-shadow: inset 0px 0px 10px #bbb;
        border-color: #adadad;
    }

    & span {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #ccc;
        
        border-radius: 2px;
        padding: 6px 12px;
        height: 34px;
    }

    & span * {
        font-size: 16px;
    }

    &:hover span {
        background-color: #e6e6e6;
        border-color: #adadad;
    }
`;
