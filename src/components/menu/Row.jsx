import React from "react";

const Row = () => {
  return (
    <div className="row">
      <div className={`${styles.item} col-lg-3 col-md-4 mb-3`}>
        <div className="w-100 h-100 border border-dark p-2">hey</div>
      </div>
      <div className={`${styles.item} col-lg-3 col-md-4 mb-3`}>
        <div className="w-100 h-100 border border-dark p-2">hey</div>
      </div>
      <div className={`${styles.item} col-lg-3 col-md-4 mb-3`}>
        <div className="w-100 h-100 border border-dark p-2">hey</div>
      </div>
      <div className={`${styles.item} col-lg-3 col-md-4 mb-3`}>
        <div className="w-100 h-100 border border-dark p-2">hey</div>
      </div>
    </div>
  );
};

export default Row;
