module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  output: {
    filename: "main.js"
  },
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};
