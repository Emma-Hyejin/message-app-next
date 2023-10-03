import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
 
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

//서버로부터 초기 응답을 컨트롤 할 수 있는 파일