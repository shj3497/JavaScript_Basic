# JavaScript_Basic

JavaScript파일을 작성할 때 `'use strict'`를 작성하여 사용한다.

<br />

## async VS defer

1. async

- ```HTML
  <script async src="main.js" />
  ```
- javascript 파일을 병렬로 다운로드 받는다.
- HTML이 parsing 되기 전에 다운로드가 완료되면 문제가 생길 수 있다.

2. defer

- ```HTML
  <script defer src="main.js" />
  ```

- javascript 파일을 병렬로 다운로드 받는다.
- HTML이 parsing 완료된 후 javascript파일을 실행한다.

<br />
