# NextJS Introduction

### framework vs library

#### 프레임워크는 특정한 규칙을 따라서 작성해야하지만 라이브러리는 사용하고 싶을 때 자유롭게 사용할 수 있다.(폴더 구조, 이름 제한이 없다.)

#### pages폴더 하위에 url로 쓸 이름으로 파일을 만들고 export default function 해주면 된다. component 이름은 중요하지 않다.

### CSR VS SSR

#### CSR : 브라우저가 유저가 보는 UI를 만드는 모든 것을 한다는 것 (브라우저가 자바스크립트를 가져와서 client-side의 자바스크립트가 모든 UI를 만드는 것)

#### 브라우저가 HTML을 가져올 때 비어잇는 div로 가져온다는 것을 의미 그후에 브라우저가 모든 자바스크립트를 요청해서 실해 하고 앱이 유저에게 보여짐 (그 전까지 흰화면)

#### SSR : 실제 HTML를 로드함(기다릴 필요 x 연결속도가 느리거나 자바스크립트를 비활성화하여도) pre-rendering

#### 유저가 웹사이트에 가면, 초기 상태의 component로 된 미리 생성된 html 페이지를 보게 되고 상호작용이 일어나면 react.js 를 받아서 작동함

#### hydration: react.js를 프론트엔드 안에서 실행하는 것

#### styled jsx는 컴포넌트에 scoped된다

` <style jsx>{``}<style>`

#### app component

#### 일종의 어떤 컴포넌트의 청사진 nextjs가 모든페이지를 렌더링 할 수 있게 한다. 기본 프레임워크에 포함되어 있다. 커스터마이징을 위해서는 '\_app.js'파일을 만들어야한다.(pages폴더안에)

#### public 폴더

#### href="/xxx.png" ...할 필요없음

#### server side rendering

#### getServerSideProps 이름 변경 불가!@!!!!
