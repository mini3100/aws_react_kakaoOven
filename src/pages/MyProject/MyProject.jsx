import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { AiTwotoneSetting, AiOutlineClockCircle } from 'react-icons/ai'

function MyProject(props) {
    return (
        <div css={S.SListGroup}>
            <div css={S.SListItem}>
                <div css={S.SCheckBox}>
                    <input type="checkbox" />
                </div>
                <div css={S.SListItemBox}>
                    <div css={S.SProjectImgBox}>
                        <div css={S.SProjectImg}></div>
                        {/* <img src="" alt="" /> */}
                    </div>
                    <div css={S.SItemBody}>
                        <h3 css={S.SProjectName}>todolist</h3>
                        <div css={S.Sdivider}></div>
                        <div css={S.StextBox}>
                            <div css={S.SEditTime}><AiOutlineClockCircle />2시간 전</div>
                            <div css={S.STestAble}>로그인없이 테스트 가능</div>
                        </div>
                    </div>
                </div>
                <div css={S.SMenuBox}>
                    <button css={S.SMenuBtn}><AiTwotoneSetting />▼</button>
                </div>
            </div>
        </div>
    );
}

export default MyProject;