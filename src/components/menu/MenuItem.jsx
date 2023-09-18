import React from "react";

import styles from "../../styles/MenuItem.module.css";

const MenuItem = () => {
  return (
    <div
      className={`${styles.container} d-flex justify-content-center col-lg-3 col-md-4 my-3`}
    >
      <div
        className={`${styles.item} d-flex justify-content-center position-relative rounded p-2`}
      >
        <div
          className={`${styles.title} rounded-bottom position-absolute bottom-0 text-center py-1`}
        >
          Hey
        </div>
      </div>
      <div className={styles.shimmer}></div>
    </div>
  );
};

export default MenuItem;
