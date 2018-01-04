module.exports = {
    apps: [{
        name: "iteck",
        script: "./api/app.js",
        watch: true,
        env: {
            "NODE_ENV": "development",
        },
        env_production: {
            "NODE_ENV": "production"
        },
        instances: 2,
        exec_mode: "cluster"
    }]
}