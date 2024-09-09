import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            typography: (theme: any) => ({
                DEFAULT: {
                    css: {
                        color: theme("colors.foreground"),
                        fontFamily: theme("fontFamily.sans"), // Update this line to use the custom font
                        h1: {
                            fontSize: theme("fontSize.4xl"),
                            fontWeight: theme("fontWeight.bold"),
                            marginBottom: theme("spacing.6"),
                        },
                        h2: {
                            fontSize: theme("fontSize.3xl"),
                            fontWeight: theme("fontWeight.semibold"),
                            marginBottom: theme("spacing.5"),
                        },
                        h3: {
                            fontSize: theme("fontSize.2xl"),
                            fontWeight: theme("fontWeight.medium"),
                            marginBottom: theme("spacing.4"),
                        },
                        h4: {
                            fontSize: theme("fontSize.xl"),
                            fontWeight: theme("fontWeight.normal"),
                            marginBottom: theme("spacing.3"),
                        },
                        p: {
                            marginBottom: theme("spacing.4"),
                            lineHeight: theme("lineHeight.relaxed"),
                        },
                        blockquote: {
                            borderLeftColor: theme("colors.muted"),
                            paddingLeft: theme("spacing.4"),
                            fontStyle: "italic",
                        },
                        code: {
                            backgroundColor: theme("colors.muted"),
                            color: theme("colors.red.600"),
                            padding: theme("spacing.1"),
                            borderRadius: theme("borderRadius.sm"),
                            fontWeight: theme("fontWeight.medium"),
                        },
                        pre: {
                            backgroundColor: theme("colors.muted"),
                            padding: theme("spacing.4"),
                            borderRadius: theme("borderRadius.md"),
                        },
                        ul: {
                            listStyleType: "disc",
                            paddingLeft: theme("spacing.6"),
                            marginBottom: theme("spacing.4"),
                        },
                        ol: {
                            listStyleType: "decimal",
                            paddingLeft: theme("spacing.6"),
                            marginBottom: theme("spacing.4"),
                        },
                        a: {
                            color: theme("colors.blue.600"),
                            textDecoration: "underline",
                            "&:hover": {
                                color: theme("colors.blue.700"),
                            },
                        },
                    },
                },
                dark: {
                    css: {
                        color: theme("colors.foreground"),
                        blockquote: {borderLeftColor: theme("colors.foreground")},
                        code: {backgroundColor: theme("colors.gray.700")},
                    },
                },
            }),
            fontFamily: {
                sans: ['"Inter"', 'sans-serif'], // Add your custom font here
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
