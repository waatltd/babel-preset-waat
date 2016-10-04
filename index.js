module.exports = {
    // Don't try to find .babelrc because we want to force this configuration.
    babelrc: false,
    // This is a feature of `babel-loader` for webpack (not Babel itself).
    // It enables caching results in OS temporary directory for faster rebuilds.
    // cacheDirectory: true,
    presets: [
        require.resolve('babel-preset-stage-0'),
        // Latest stable ECMAScript features
        require.resolve('babel-preset-latest'),
        // JSX, Flow
        require.resolve('babel-preset-react'),
    ],
    plugins: [
        require.resolve('babel-plugin-transform-decorators-legacy'),
        [require.resolve('babel-root-slash-import'), {
            rootPathSuffix: 'src',
        }],
        // function x(a, b, c,) { }
        require.resolve('babel-plugin-syntax-trailing-function-commas'),
        // class { handleClick = () => { } }
        require.resolve('babel-plugin-transform-class-properties'),
        // { ...todo, completed: true }
        require.resolve('babel-plugin-transform-object-rest-spread'),
        // Polyfills the runtime needed for generators
        [require.resolve('babel-plugin-transform-runtime'), {
            helpers: false,
            polyfill: false,
            regenerator: true,
        }],
        [require.resolve('babel-plugin-react-intl'), {
            messagesDir: './src/i18n/messages/',
        }],
    ],
};
