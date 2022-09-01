import WujieReact from "wujie-react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { Layout, Space } from "@arco-design/web-react";
import { hostMap } from "./main";

function Admin() {
	return (
		<div>
			<WujieReact
				alive
				width="100%"
				name="admin"
				url={hostMap("//localhost:7001/")}
				sync={true}
			/>
		</div>
	);
}

function App() {
	return (
		<Layout>
			<Layout.Header style={{ zIndex: 100, height: 60, background: "#f5f5f5" }}>
				<Space>
					<Link to={"/main/admin"}>ADMIN</Link>
				</Space>
			</Layout.Header>
			<Layout.Content style={{ height: "calc(100vh - 60px)" }}>
				<Routes>
					<Route path={"/"} element={<Outlet />}>
						<Route index element={<div>WUJIE MICRO APP</div>} />
						{/* 这里的路由需要和生产的 ng 配置的路径一致 */}
						<Route path={"/main/admin"} element={<Admin />} />
					</Route>
				</Routes>
			</Layout.Content>
		</Layout>
	);
}

export default App;
