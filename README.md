# Next.js Creating directories
App.Router 과 Page Router 방식 모두 같은 프로젝트에서 사용될 수 있지만 app 이 page 보다 우선됩니다. 
새 프로젝트를 만들 때는 혼동을 방지하기 위해 하나의 router 방식만 사용하는 것을 추천합니다. 

### 기본은 App 폴더 (추천)
새로운 Application을 개발하는 경우 APP Router 사용이 권장됩니다. 
React의 최신 기능을 활용할 수 있고 커뮤니티의 피드백을 바탕으로 개발된 Pages Router의 진화된 버전입니다. 

```bash
└── app
    ├── layout.tsx
    └── page.tsx
```
이 파일들은 사용자가 애플리케이션의 루트(/)를 방문할 때 렌더링 됩니다. 

> layout.tsx을 만드는 것을 깜빡했더라도 Next.js는 "next dev"를 사용해서 개발 서버를 실행할 때마다 자동으로 파일을 생성합니다.

### Option Page 폴더 추가 
App Router 말고 Page Route을 사용하고 싶다면 pages/ 폴더를 root 에 추가해줍니다. 

```bash
└── pages
    ├── index.tsx
    ├── _app.tsx
    └── _document.tsx
```

* index.tsx : /:홈페이지
* _app.tsx : global layout
* _document.tsx : 서버로부터의 초기 응답을 컨트롤


### Option pubic 폴더 
이미지, 폰트등과 같은 assetsa 정적 자산을 저장합니다. 
기본적으로 (/) 에서부터 참조할 수 있습니다. 
