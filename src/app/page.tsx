import { ReactElement } from "react";

import GlobalSearchBoxComponent from "@/components/global-search-box/GlobalSearchBox.component";

import DoctorFinder from "@/logo/Doctorfinder";

import styles from "./page.module.css";

export default function Home(): ReactElement {
  return (
    <div className={styles.home}>
      <h1>
        <DoctorFinder />
        پزشک‌یاب
      </h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>ارتوپد</li>
          <li>چشم</li>
          <li>قلب و عروق</li>
          <li>زنان و زایمان</li>
        </ul>
      </div>
    </div>
  );
}
