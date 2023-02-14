module.exports = {
    apps: [
        {
            name: "Lepunch",
            script: "npm",
            args: "start",
            autorestart: true,
        },
    ],

    deploy: {
        production: {
            user: "root",
            host: ["176.31.217.188"],
            ref: "origin/main",
            repo: "git@github.com:Snox-dev1/lepunch.git",
            path: "/home/lepunch",
            "pre-deploy-local": "",
            "post-deploy":
                "npm install && npm run build && pm2 reload ecosystem.config.js --env production",
            "pre-setup": "",
        },
    },
}
