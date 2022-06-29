const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
	console.log(`This is the Webpack 4 "mode": ${JSON.stringify(argv)}`);
	console.log(`This is the Webpack 4 "mode": ${JSON.stringify(env)}`);
	return {
		mode: argv,
		entry: "./src/index.tsx",
		output: {
			filename: "bundle.js",
			path: path.resolve(__dirname, "dist")
		},
		devtool: "inline-source-map",
		resolve: {
			extensions: [".js", ".ts", ".tsx"],
		},
		devServer: {
			static: {
				directory: path.join(__dirname, "public"),
			},
			compress: true,
			port: 3000,
			open: true,
		},
		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					loader: "ts-loader",
				},
				{
					test: /\.(s[ac]ss|css)$/i,
					use: [
						// Creates `style` nodes from JS strings
						"style-loader",
						// Translates CSS into CommonJS
						"css-loader",
						// Compiles Sass to CSS
						"sass-loader",
					],
				},
				{
					test: /\.(png|jpe?g|gif|svg)$/i,
					loader: "file-loader",
					options: {
						outputPath: "images",
					},
				},
			]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, "public", "index.html"),
			}),
			new MiniCssExtractPlugin({
				filename: "./src/index.css",
			}),
		],
	};
}