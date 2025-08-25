import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/auth/auth-layout.tsx",[
        route("login", "routes/auth/login.tsx"),
        route("forgot-password", "routes/auth/forgot-password.tsx"),
        route("reset-password", "routes/auth/reset-password.tsx")
    ]),
] satisfies RouteConfig;
