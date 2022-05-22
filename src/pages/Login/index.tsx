import { Button } from "antd-mobile";
import "./index.scss";

function Login() {
  return (
    <div>
      <div className="box"></div>
      <svg className="icon" aria-hidden="true">
        {/* 使用时，只需要将此处的 iconbtn_like_sel 替换为 icon 的名称即可*/}
        <use xlinkHref="#iconbtn_like_sel"></use>
      </svg>
      <Button color="primary"> 登录</Button>
    </div>
  );
}

export default Login;
