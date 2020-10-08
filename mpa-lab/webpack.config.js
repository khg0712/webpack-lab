const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ChunksWebpackPlugin = require("chunks-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const commonStyle = "./src/common.css";

module.exports = {
	entry: {
		a: ["./src/a.js"],
		b: ["./src/b.js"],
		c: ["./src/c.js"],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[hash].bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
		],
	},
	optimization: {
		namedChunks: false,
		namedModules: false,
		removeAvailableModules: true,
		removeEmptyChunks: true,
		mergeDuplicateChunks: true,
		occurrenceOrder: true,
		providedExports: false,
		splitChunks: {
			chunks: "all",
			minSize: 0,
			name: true,
		},
	},
	plugins: [
		new CleanWebpackPlugin(),
		new ChunksWebpackPlugin(),
		new MiniCssExtractPlugin({
			chunkFilename: `[id].[contenthash].css`,
			moduleFilename: ({ name }) => `${name}.[contenthash].css`,
		}),
	],
};
