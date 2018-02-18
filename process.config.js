module.exports = {
    apps: [{
        name: "iteck-admin",
        script: "./api/app.js",
        watch: true,
        env: {
            "NODE_ENV": "development",
        },
        env_production: {
            "NODE_ENV": "production"
        },
        instances: "max",
        exec_mode: "cluster"
    }]
}