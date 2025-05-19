import { useState } from "react";

function Son1(props: Son1Props) {
  // 接收父组件的车
  const cars = props.cars;
  // 接收父组件的onGive方法
  const onGive = props.onGive;

  const [sonMoney, setMoney] = useState(100);

  function handleGive() {
    // 让自己的钱减少
    setMoney(sonMoney - 10);
    // 调用父组件中onGive方法，给父组件加钱
    onGive(10);
  }

  return (
    <div style={son1Style}>
      <h3>我是子组件</h3>
      <p>收到父组件的车：{cars.join(" , ")}</p>
      ------------------------------------------
      <br />
      <p>子组件的钱：{sonMoney}</p>
      <button onClick={handleGive}>
        点一次,就给父组件10块
      </button>
    </div>
  );
}

interface Son1Props {
  cars: string[];
  onGive: (val: number) => void;
}

// 子组件样式对象
const son1Style = {
  border: "2px solid red",
  padding: "20px",
  margin: "20px",
  backgroundColor: "#fff0f0", // 浅红色背景
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)", // 更柔和的阴影
};

export default Son1;
