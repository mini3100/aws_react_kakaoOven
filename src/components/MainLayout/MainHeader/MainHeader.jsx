import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { useRecoilState } from 'recoil';
import { isMenuOpenState } from '../../../store/MenuStore';

function MainHeader(props) {
    const [ isMenuOpen, setIsMenuOpen ] = useRecoilState(isMenuOpenState);
    const handleMenuOpenClick = (e) => {
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.STitle}>
                    <h1 css={S.SLogo}>Oven</h1>
                    <span css={S.SSmallLogo}>BETA</span>
                </div>
                <div css={S.SMenu} onClick={handleMenuOpenClick}>
                    <div css={S.SProfile}>
                        <div css={S.SImgBox}>
                            <img css={S.SImg} src="https://www.gravatar.com/avatar/cc36315253382f42473b761678e56762?d=retro" alt="" />
                        </div>
                        <span css={S.SUsername}>chachang</span>
                        <span css={S.SDropdownBtn}>▼</span>
                    </div>
                    <ul css={S.SNav(isMenuOpen)}>
                        <li css={S.SMenuListBox}>프로젝트 대쉬보드</li>
                        <li css={S.SMenuListBox}>계정 설정하기</li>
                        <li css={S.SMenuListBox}>헬프데스크</li>
                        <li css={S.SDivider}></li>
                        <li css={S.SMenuListBox}>로그아웃</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainHeader;