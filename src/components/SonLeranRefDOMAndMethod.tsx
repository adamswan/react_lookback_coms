import { forwardRef, type ForwardedRef, useImperativeHandle, useRef } from "react";

// 定义暴露给父组件的 ref 类型
export interface SonRefType {
  name: string;
  getWife: () => void;
}

// 使用联合类型，允许是一个 HTMLDivElement 或者你自定义的方法对象
type CombinedRef = HTMLDivElement | SonRefType;

// 用 forwardRef 包裹
const NewSon = forwardRef<CombinedRef>((props, ref) => {
  return SonLeranRefDOMAndMethod(ref);
});

// 实际子组件的结构
function SonLeranRefDOMAndMethod(ref: ForwardedRef<CombinedRef>) {
  const name = "高圆圆";

  function getWife() {
    alert("你做到了 朋友");
  }

  // 创建一个内部 ref 来绑定 DOM
  const internalRef = useRef<HTMLDivElement>(null);

  // 用 useImperativeHandle 向外暴露子组件的变量、方法
  useImperativeHandle(ref, (): SonRefType => {
    return {
      name,
      getWife,
    };
  });

  return (
    <div style={sonStyle}>
      <h3>我是子组件</h3>
      <div ref={internalRef} style={sonInnerStyle}>
        这是要暴露给父组件的 DOM{" "}
      </div>
    </div>
  );
}

// 子组件样式对象
const sonStyle = {
  border: "2px solid red",
  padding: "20px",
  margin: "20px",
  backgroundColor: "#fff0f0", // 浅红色背景
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)", // 更柔和的阴影
};

const sonInnerStyle = {
  border: "2px solid blue",
  padding: "10px",
  margin: "10px",
  backgroundColor: "#e0e0ff", // 浅蓝色背景
};

export default NewSon;
