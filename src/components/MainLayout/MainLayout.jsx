import React from 'react';
import { useRecoilState } from 'recoil';
import { isMenuOpenState } from '../../store/MenuStore';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"
import MainHeader from './MainHeader/MainHeader';
import MainBody from './MainBody/MainBody';
import MainFooter from './MainFooter/MainFooter';

function MainLayout({ children }) {
    const [ isMenuOpen, setIsMenuOpen ] = useRecoilState(isMenuOpenState);

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    }

    return (
        <div onClick={handleMenuClose} css={S.SLayout}>
            <MainHeader />
            <MainBody>
                {children}
            </MainBody>
            <MainFooter />
        </div>
    );
}

export default MainLayout;