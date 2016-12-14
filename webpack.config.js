const HappyPack = require("happypack");

module.exports = {
    entry: [
        require.resolve("./one.js"),
        require.resolve("./two.js"),
        require.resolve("./three.js")
    ],
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: require.resolve("./one.js"),
                loaders: ["happypack/loader?id=one"]
            },
            {
                test: require.resolve("./two.js"),
                loaders: ["happypack/loader?id=two"]
            },
            {
                test: require.resolve("./three.js"),
                loaders: ["happypack/loader?id=three"]
            }
        ]
    },
    plugins: [
        new HappyPack({
            id: "one",
            loaders: ["babel-loader"]
        }),
        new HappyPack({
            id: "two",
            loaders: ["babel-loader"]
        }),
        new HappyPack({
            id: "three",
            loaders: ["babel-loader"]
        })
    ]
};
