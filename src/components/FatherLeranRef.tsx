import { useRef } from "react";

function FatherLeranRef() {
  // 1、生成 ref 对象
  const iptRef = useRef<HTMLInputElement>(null);

  function handleClick1() {
    if (iptRef.current) {
      // 3、待 DOM 渲染完成后，获取 DOM
      console.log(iptRef.current); // 可安全访问 DOM 属性
    }
  }

  return (
    <div style={fatherStyle}>
      <h3>我是父组件</h3>

      {/* 2、ref 对象绑定为 ref 属性 */}
      <input type="text" ref={iptRef}></input>

      <br />

      <button onClick={handleClick1} style={{ marginTop: "15px" }}>
        获取当前组件的DOM
      </button>
    </div>
  );
}

// 父组件样式对象
const fatherStyle = {
  border: "2px solid blue",
  padding: "20px",
  margin: "20px",
  backgroundColor: "#e6f7ff", // 浅蓝色背景
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 盒子阴影
};

export default FatherLeranRef;
