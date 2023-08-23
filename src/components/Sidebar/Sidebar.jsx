import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { useLocation, useNavigate } from 'react-router-dom';

function Sidebar(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathName = location.pathname;
    const [ menuListArray, setMenuListArray ] = useState({
        list: [
            {
                id: 1,
                path: "/myproject",
                name: "나의 프로젝트"
            },
            {
                id: 2,
                path: "/sharedproject",
                name: "나에게 공유된 프로젝트"
            }
        ]
    })

    const handleMenuClick = (path) => {
        navigate(path);
    }

    return (
        <div css={S.SLayout}>
            <ul css={S.SListContainer}>
                {menuListArray.list.map(item => {
                    const isSelected = pathName.startsWith(item.path);
                    return (
                        <li css={S.SListBox(isSelected)} onClick={() => handleMenuClick(item.path)}>{item.name}</li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;