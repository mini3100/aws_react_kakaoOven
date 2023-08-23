import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { HiSearch } from 'react-icons/hi'
import { BiSolidGridAlt } from 'react-icons/bi'

function MainBodyHeader(props) {
    return (
        <div>
            <div css={S.SLayout}>
                <div>
                    <h1 css={S.STitle}>프로젝트 대쉬보드</h1>
                </div>
                <div css={S.SHeaderRight}>
                    <div css={S.SInputBox}>
                        <input css={S.SInput} type="text" placeholder='프로젝트 검색'/>
                        <span css={S.SSearchIcon}><HiSearch /></span>
                    </div>
                    <div css={S.SButtons}>
                        <label css={S.SBtnBox}>
                            <input type="radio" name='view' id='listBtn' checked/>
                            <span><AiOutlineUnorderedList /></span>
                        </label>
                        <label css={S.SBtnBox}>
                            <input type="radio" name='view' id='gridBtn'/>
                            <span><BiSolidGridAlt /></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainBodyHeader;