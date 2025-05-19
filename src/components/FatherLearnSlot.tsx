import SonLearnSlot from "./SonLearnSlot";

function FatherLearnSlot() {
  return (
    <div style={fatherStyle}>
      <h2>我是父组件</h2>

      {/* 子组件 */}
      {/* 2. 用props模拟具名插槽*/}
      <SonLearnSlot theHeader={<p style={{ color: "green", backgroundColor: "black" }}>模拟的具名插槽</p>}>
        {/* 1. 直接传，相当于vue的默认插槽 */}
        <div style={{ width: "100%", height: "60px", backgroundColor: "orange" }}>
          我是传到子组件children属性中的内容
        </div>
      </SonLearnSlot>
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

export default FatherLearnSlot;
