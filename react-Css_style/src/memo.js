/*
    CSS Module
    사용하도록 설정한 프ㅜ로젝트에서만 사용 가능하다
    리액트에서 사용가능!

    === 사용 방법
    1. css 파일확장자명을 수정한다. 파일명.module.css
    2. 사용할 곳에서  import함 : import styles from '파일명.module.css'

    그리고 컴포넌트에서 className을 동적으로 할당해주면 된다.
    
    ex)
    styles.클래스이름
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>


     왜 사용하는가? 
     css스타일의 범위를 import한 해당 컴포넌트에서만 적용되도록 해준다
     styles.button : 이런식으로 객체의 속성에 접근하는 방식으로 설정해주기 때문이다

*/