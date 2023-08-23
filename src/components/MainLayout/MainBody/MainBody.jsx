import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import Sidebar from '../../Sidebar/Sidebar';
import { AiFillPlusCircle } from 'react-icons/ai'
import MainBodyHeader from './MainBodyHeader/MainBodyHeader';
import { useLocation } from 'react-router-dom';

function MainBody({ children }) {
    const location = useLocation();
    const pathName = location.pathname;
    return (
        <div css={S.SLayout}>
            <MainBodyHeader />
            <div css={S.SBodyContainer}>
                <Sidebar />
                <div css={S.SBodyRight}>
                    <div css={S.SButtons}>
                        <button css={S.SSelectAllBtn}>모두 선택</button>
                        {pathName.startsWith("/myproject") && 
                        <button css={S.SAddProjectBtn}>
                            <AiFillPlusCircle />
                            새로운 프로젝트 만들기
                        </button>}
                    </div>
                    <div css={S.SPageBox}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBody;