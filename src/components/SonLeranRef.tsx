// import { useState } from "react";

function SonLeranRef() {
  return (
    <div style={sonStyle}>
      <h3>我是子组件</h3>
    </div>
  );
}

// 子组件样式对象
const sonStyle = {
  border: "2px solid red",
  padding: "20px",
  margin: "20px",
  backgroundColor: "#fff0f0", // 浅红色背景
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)", // 更柔和的阴影
};

export default SonLeranRef;
