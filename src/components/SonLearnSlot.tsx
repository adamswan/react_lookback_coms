function SonLearnSlot(props: SonLearnSlotProps) {
  // 接收默认插槽的内容
  const children = props.children;
  // 接收模拟的具名插槽的内容
  const theHeader = props.theHeader;

  return (
    <div style={sonLearnSlotStyle}>
      <h3>我是子组件</h3>

      <p>children属性收到的内容：</p>
      <div>{children}</div>

      <p>theHeader属性收到的内容：</p>
      <div>{theHeader}</div>
    </div>
  );
}

interface SonLearnSlotProps {
  children?: React.ReactNode;
  theHeader?: React.ReactNode;
}

// 子组件样式对象
const sonLearnSlotStyle = {
  border: "2px solid red",
  padding: "20px",
  margin: "20px",
  backgroundColor: "#fff0f0", // 浅红色背景
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)", // 更柔和的阴影
};

export default SonLearnSlot;
