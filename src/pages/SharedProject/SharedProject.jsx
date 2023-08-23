import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"

function SharedProject(props) {
    return (
        <div css={S.SLayout}>
            <div>
                <img src="https://t1.daumcdn.net/oven/web/542CF1754D191D002B" alt="" />
            </div>
            <div css={S.SText}>
                프로젝트가 없습니다.
            </div>
        </div>
    );
}

export default SharedProject;