import { useContext } from "react";
import GrandSonLearnCtx from "./GrandSonLearnCtx";
import { Ctx } from "./FatherLearnCtx";

function SonLearnCtx() {
  // 接收父组件传递过来的值
  const count = useContext(Ctx);

  return (
    <div style={son1Style}>
      <h3>我是子组件</h3>
      <p>从context中取得的值：{count}</p>
      {/* 孙组件 */}
      <GrandSonLearnCtx />
    </div>
  );
}

// 子组件样式对象
const son1Style = {
  border: "2px solid red",
  padding: "20px",
  margin: "20px",
  backgroundColor: "#fff0f0", // 浅红色背景
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)", // 更柔和的阴影
};

export default SonLearnCtx;
