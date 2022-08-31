import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Button, Space } from "@arco-design/web-react";
import { Link, Route, Routes } from "react-router-dom";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Button>1232123</Button>
			<Space style={{ marginBottom: 20 }}>
				<Link to={"/home"}>HOME</Link>
				<Link to={"/about"}>ABOUT</Link>
			</Space>
			<Routes>
				<Route index element={<div>Login</div>} />
				<Route
					path={"/home"}
					element={
						<div>
							<div>
								<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
									<img src="/vite.svg" className="logo" alt="Vite logo" />
								</a>
								<a href="https://reactjs.org" target="_blank" rel="noreferrer">
									<img
										src={reactLogo}
										className="logo react"
										alt="React logo"
									/>
								</a>
							</div>
							<h1>Vite + React</h1>
							<div className="card">
								<button onClick={() => setCount(count => count + 1)}>
									count is {count}
								</button>
								<p>
									Edit <code>src/App.tsx</code> and save to test HMR
								</p>
							</div>
							<p className="read-the-docs">
								Click on the Vite and React logos to learn more
							</p>
						</div>
					}
				/>
				<Route path={"/about"} element={<div>about</div>} />
			</Routes>
		</div>
	);
}

export default App;
