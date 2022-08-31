import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@arco-design/web-react/dist/css/arco.css";
import { HashRouter } from "react-router-dom";

declare global {
	interface Window {
		// 是否存在无界
		__POWERED_BY_WUJIE__?: boolean;
		// 子应用mount函数
		__WUJIE_MOUNT: () => void;
		// 子应用unmount函数
		__WUJIE_UNMOUNT: () => void;
		// 子应用无界实例
		__WUJIE: { mount: () => void };
	}
}
const Main = () => {
	return (
		<React.StrictMode>
			<HashRouter>
				<App />
			</HashRouter>
		</React.StrictMode>
	);
};
if (window.__POWERED_BY_WUJIE__) {
	let instance: any;
	window.__WUJIE_MOUNT = () => {
		instance = ReactDOM.createRoot(
			document.getElementById("admin-root") as HTMLElement
		);
		instance.render(<Main />);
	};
	window.__WUJIE_UNMOUNT = () => {
		instance.unmount();
	};
	// module脚本异步加载，应用主动调用生命周期
	window.__WUJIE.mount();
} else {
	ReactDOM.createRoot(
		document.getElementById("admin-root") as HTMLElement
	).render(<Main />);
}
