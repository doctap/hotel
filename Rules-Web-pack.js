const rules = [
	{
		test: /\.(png|jpg|gif|svg|ico)$/,
		loader: 'file-loader',
		options: {
			outputPath: './img/',
			name: '[name].[ext]?[hash]'
		}
	},
	{
		test: /\.(eot|ttf|otf|woff|woff2|json|xml)$/,
		loader: 'file-loader',
		options: {
			outputPath: './fonts/',
			name: '[name].[ext]?[hash]'
		}
	},
	{
		test: /\.(json|xml)$/,
		loader: 'file-loader',
		options: {
			outputPath: './data/',
			name: '[name].[ext]?[hash]'
		}
	},
	{
		test: /\.(s*)css$/,
		use: [{ loader: "style-loader" }, { loader: "css-loader" }, { loader: "sass-loader" }]
	},
	{
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	},
	{
		test: /\.(csv|tsv)$/,
		use: [{ loader: 'csv-loader' }]
	},
	{
		test: /\.exec\.js$/,
		use: [{ loader: 'script-loader' }]
	}
]