import { useState } from "react";
import Father from "./components/Father";
import FatherLearnSlot from "./components/FatherLearnSlot";
import FatherLearnCtx from "./components/FatherLearnCtx";
import FatherLeranRef from "./components/FatherLeranRef";
import FatherRefDOMAndMethod from "./components/FatherRefDOMAndMethod";
import FatherRefDOMAndMethod19 from "./components/FatherRefDOMAndMethod19";

function App() {
  const [activeTab, setActiveTab] = useState<string>("父子传值");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* 左侧导航 */}
      <nav style={navStyle}>
        <ul style={ulStyle}>
          {/* 父子传值 */}
          <li
            onClick={() => setActiveTab("父子传值")}
            style={{
              ...navItemStyle,
              ...(activeTab === "父子传值" ? navItemActiveStyle : {}),
            }}
          >
            父子传值
          </li>

          {/* React的插槽 */}
          <li
            onClick={() => setActiveTab("React的插槽")}
            style={{
              ...navItemStyle,
              ...(activeTab === "React的插槽" ? navItemActiveStyle : {}),
            }}
          >
            React的插槽
          </li>

          {/* Context父向子孙组件传值 */}
          <li
            onClick={() => setActiveTab("Context父向子孙组件传值")}
            style={{
              ...navItemStyle,
              ...(activeTab === "Context父向子孙组件传值" ? navItemActiveStyle : {}),
            }}
          >
            Context父向子孙组件传值
          </li>

          {/* 获取当前组件的DOM */}
          <li
            onClick={() => setActiveTab("获取当前组件的DOM")}
            style={{
              ...navItemStyle,
              ...(activeTab === "获取当前组件的DOM" ? navItemActiveStyle : {}),
            }}
          >
            获取当前组件的DOM
          </li>

          {/* 获取子组件的DOM和方法-React18 */}
          <li
            onClick={() => setActiveTab("获取子组件的DOM和方法-React18 ")}
            style={{
              ...navItemStyle,
              ...(activeTab === "获取子组件的DOM和方法-React18 " ? navItemActiveStyle : {}),
            }}
          >
            获取子组件的DOM和方法-React18
          </li>

          {/* 获取子组件的DOM和方法-React19 */}
          <li
            onClick={() => setActiveTab("获取子组件的DOM和方法-React19 ")}
            style={{
              ...navItemStyle,
              ...(activeTab === "获取子组件的DOM和方法-React19 " ? navItemActiveStyle : {}),
            }}
          >
            获取子组件的DOM和方法-React19
          </li>
        </ul>
      </nav>

      {/* 右侧内容区 */}
      <main style={mainStyle}>
        <h2>{activeTab}</h2>
        {activeTab === "父子传值" && <Father />}
        {activeTab === "React的插槽" && <FatherLearnSlot />}
        {activeTab === "Context父向子孙组件传值" && <FatherLearnCtx />}
        {activeTab === "获取当前组件的DOM" && <FatherLeranRef />}
        {activeTab === "获取子组件的DOM和方法-React18 " && <FatherRefDOMAndMethod />}
        {activeTab === "获取子组件的DOM和方法-React19 " && <FatherRefDOMAndMethod19 />}
      </main>
    </div>
  );
}

export default App;

// 样式定义
const navStyle = {
  width: "320px",
  backgroundColor: "#f4f4f4",
  padding: "20px",
  borderRight: "1px solid #ddd",
};

const mainStyle = {
  flex: 1,
  padding: "20px",
};

const navItemStyle = {
  width: "320px",
  height: "40px",
  lineHeight: "40px",
  padding: "0 10px",
  cursor: "pointer",
  borderRadius: "4px",
  transition: "background-color 0.2s, color 0.2s",
  whiteSpace: "nowrap", // 防止换行
  overflow: "hidden", // 超出隐藏
  textOverflow: "ellipsis", // 显示省略号
};

const navItemActiveStyle = {
  backgroundColor: "#d1ecf1",
  color: "#115ea3",
  fontWeight: "bold",
};

const ulStyle = {
  listStyleType: "none" as const,
  padding: 0,
  margin: 0,
};
