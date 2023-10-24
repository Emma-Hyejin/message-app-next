import React from "react";
import { Metadata} from "next";

//<head> HTML 요소 : title/meta - seo 지원을 위해 설정 가능.
export const metadata: Metadata = {
    title: 'Next.js'
}

export default function Page (){
    return (
        <h1>HEllo, Next.js!</h1>
    )
};

// 기본 적인 "/"