const path = require("path");
const ChunksWebpackPlugin = require("chunks-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: {
		a: "./src/1.js",
		b: "./src/3.js",
		c: "./src/4.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[hash].bundle.js",
	},
	optimization: {
		splitChunks: {
			chunks: "all",
			minSize: 0,
		},
	},
	plugins: [new CleanWebpackPlugin(), new ChunksWebpackPlugin()],
};
