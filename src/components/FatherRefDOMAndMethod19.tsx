import { useRef } from "react";
import SonLeranRefDOMAndMethod19, { type SonRefType } from "./SonLeranRefDOMAndMethod19";
function FatherRefDOMAndMethod19() {
  // 1、生成子组件的 ref 对象
  const sonRef = useRef<SonRefType>(null);

  function handleClick1() {
    if (sonRef.current) {
      // 4、待 DOM 渲染完成后，获取 DOM
      console.log(sonRef.current);
    }
  }

  function handleClick2() {
    if (sonRef.current) {
      // 5.1、获取子组件中的变量
      const res = sonRef.current.name;
      console.log("res", res);
    }
  }

  function handleClick3() {
    if (sonRef.current) {
      // 5.2、获取子组件中的方法
      sonRef.current.getWife();
    }
  }

  return (
    <div style={fatherStyle}>
      <h3>我是父组件</h3>

      <button onClick={handleClick1} style={{ marginRight: "10px" }}>
        获取当前组件的DOM
      </button>

      <button onClick={handleClick2} style={{ marginRight: "10px" }}>
        获取子组件中的变量
      </button>

      <button onClick={handleClick3} style={{ marginRight: "10px" }}>
        调用子组件中的方法
      </button>

      {/* 子组件 */}
      {/* 2、ref 对象绑定为子组件的 ref 属性 */}
      <SonLeranRefDOMAndMethod19 ref={sonRef} />
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

export default FatherRefDOMAndMethod19;
