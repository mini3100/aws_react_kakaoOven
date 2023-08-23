import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"

function MainFooter(props) {
    return (
        <footer css={S.SLayout}>
            <div css={S.SDivider}></div>
            <div css={S.SContainer}>
                <div css={S.SFooterLeft}>
                    <span>Oven</span>
                    <a href=''>서비스 이용약관 및 윤영원칙</a>
                    <a href='' css={S.SBold}>개인정보처리방침</a>
                </div>
                <div css={S.SFooterRight}>
                    <span>ⓒ 2015-2016 Kakao Corp.</span>
                </div>
            </div>
        </footer>
    );
}

export default MainFooter;