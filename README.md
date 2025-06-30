# [사전 과제] 게시판 웹앱
<img width="100%" alt="Image" src="https://github.com/user-attachments/assets/eb4f3301-19d5-41c6-b2c1-5d8c88a148fa" />
`배포 링크` : 🔗[배포 페이지](https://test-project-seven-mocha.vercel.app/)    


<br/><br/>

## 동작 소개
웹 사이트 진입 시 회원가입/로그인 버튼을 눌러 로그인이 성공하면 accessToken과 refreshToken을 발급받아 /boards 페이지에 접근할 수 있다.
accessToken의 만료시간을 저장해 만료시간 5초 전에 재발급 요청을 자동으로 보내 로그인 상태가 지속되도록 한다.

/boards 페이지에 진입하면 로그인한 사용자의 이메일과 로그아웃버튼이 있어 로그아웃을 가능하다.
데이터 요청 시 총 데이터 수와 totalPage를 받아 데이터의 양에 따른 페이지 버튼을 생성해 유동적인 페이지네이션을 구현했다.

사용자는 글 작성, 글 수정, 글 삭제 그리고 글 조회를 할 수 있다.
모든 페이지는 미디어쿼리를 사용해 모바일과 데스크탑의 스타일을 다르게 설정했다.


<br/><br/>
## 🛠️ Stacks
<div>
    <img src="https://img.shields.io/badge/react-61DAFB?style=flat-square&logo=react&logoColor=white"/>
    <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/>
    <img src="https://img.shields.io/badge/axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/>
    <p>🐻zustand</p>

</div>


