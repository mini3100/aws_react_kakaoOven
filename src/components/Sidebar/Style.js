import { css } from "@emotion/react";

export const SLayout = css`
    padding: 0 15px;
    width: 33%;
`;

export const SListContainer = css`
    
`;

export const SListBox = (isSelected) => 
css`
    padding: 10px 15px;
    font-size: 14px;
    line-height: 20px;
    ${isSelected ? "background-color: #3498d8; color: white;" : ""}
    cursor: pointer;
    &:hover {
        ${!isSelected && "background-color: #eee;"}
    }
    
`;