import styles from "./mobile-guide.module.css";

import { memo } from "react";

const Mobile = memo(
  () => {
    return (
      <div className={styles.container}>
        <div className={styles.titleBox}>
          <h1 className={styles.title}>R3F 3D Action Portfolio</h1>
          <h2 className={styles.subTitle}>Macbook Air 2020</h2>
        </div>
        <div className={styles.content}>
          <p>이 포트폴리오는 원활한 화면 동작을 위해 모바일 화면은 지원하지 않습니다.</p>
          <p>작업물을 확인하실 분은 PC 환경으로 접속해 주시면 감사하겠습니다.</p>
        </div>
      </div>
    );
  },
  () => true
);

export default Mobile;
