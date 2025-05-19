import { Ctx } from "./FatherLearnCtx";
import { useContext } from "react";

function GrandSonLearnCtx() {
  // 接收父组件传递过来的值
  const count = useContext(Ctx);

  return (
    <div style={son1Style}>
      <h3>我是孙组件</h3>
      <p>从context中取得的值：{count}</p>
    </div>
  );
}

// 子组件样式对象
const son1Style = {
  border: "2px solid yellow",
  padding: "20px",
  margin: "20px",
  backgroundColor: "green", // 浅红色背景
};

export default GrandSonLearnCtx;
