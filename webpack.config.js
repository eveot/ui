const path = require('path');

module.exports = {
    entry: './src/index.ts', // Главный файл вашего приложения
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.less'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader', // Для добавления стилей в DOM при загрузке страницы
                    'css-loader', // Для обработки CSS
                    'less-loader', // Для обработки Less и компиляции в CSS
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        contentBase: './dist',
        hot: true, // Активирует горячую перезагрузку
    },
};
