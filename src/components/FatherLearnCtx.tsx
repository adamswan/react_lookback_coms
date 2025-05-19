import SonLearnCtx from "./SonLearnCtx";
import { useState, createContext } from "react";

// 创建一个上下文，默认值为 1
export const Ctx = createContext(1);

function FatherLearnCtx() {
  const [count, setCount] = useState(1);

  function handldClick() {
    setCount((old) => {
      return old + 1;
    });
  }

  return (
    <div style={fatherStyle}>
      <h3>我是父组件</h3>
      <p>当前的count: {count}</p>
      <button onClick={handldClick}>+1</button>

      <Ctx.Provider value={count}>
        {/* 子组件 */}
        <SonLearnCtx />
      </Ctx.Provider>
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

export default FatherLearnCtx;
