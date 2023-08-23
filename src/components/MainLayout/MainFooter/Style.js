import { css } from "@emotion/react";

export const SLayout = css`
    margin: 0 auto;
    padding: 0px 15px;
    width: 1170px;
    height: 60px;
`
export const SDivider = css`
    margin: 20px 0;
    border-top: 1px solid #eee;
`

export const SContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & * {
        font-size: 14px;
    }
`;

export const SFooterLeft = css`
    & a {
        margin-left: 8px;
        text-decoration: none;
        color: #3498d8;
        cursor: pointer;
    }
    & a:hover {
        text-decoration: underline;
    }
`

export const SBold = css`
    font-weight: 600;
`

export const SFooterRight = css`
    & * {
        font-size: 13px;
    }
`