const path = require("path");
const ChunksWebpackPlugin = require("chunks-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: {
		a: "./src/a.js",
		b: "./src/b.js",
		c: "./src/c.js",
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
