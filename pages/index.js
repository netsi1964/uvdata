import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Provider } from "react-redux";

import store from "../swapi/store";
import MillenniumFalconConnected from "../swapi/components/millennium-falcon-connected";

export default class ReduxPage extends React.PureComponent {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Head>
						<title>Fun With Redux</title>
						<meta
							name="viewport"
							content="initial-scale=1.0, width=device-width"
						/>
						<link
							rel="stylesheet"
							href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
							type="text/css"
						/>
						<link
							rel="stylesheet"
							href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
							type="text/css"
						/>
						<style jsx>{`
							/* Wanted to test how to add CSS - next framework suggest this way */
							body:after {
								position: fixed;
								bottom: 10px;
								right: 10px;
								color: hsla(135,0%,70%,.7);
								content: "By Sten Hougaard";
							}
							@media (max-width: 562px) {
								/* On smaller screens hide this dumb text :-) */
								body:after {
									display: none;
								}
							}
						`}</style>
					</Head>
					<div className="container">
						<h1>Lots of fun with Redux</h1>
						<MillenniumFalconConnected />
					</div>
				</div>
			</Provider>
		);
	}
}
