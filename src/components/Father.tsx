import Son1 from "./Son1";
import { useState } from "react";

function Father() {
  // 父组件的车
  const cars = ["Volvo", "BMW", "Audi"];

  // 接收子组件的钱
  const [money, setMoney] = useState(0);

  function onGive(val: number) {
    // setX() 函数会屏蔽掉相同值，用回调的形式求最新和，再设置给页面
    setMoney((old) => old + val);
  }

  return (
    <div style={fatherStyle}>
      <h3>我是父组件</h3>
      <p>拥有的车：{cars.join(" , ")}</p>
      <p>来自子组件的钱：{money} 块</p>
      <br />

      {/* 子组件 */}
      <Son1 cars={cars} onGive={onGive} />
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

export default Father;
