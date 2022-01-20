module.exports = {
    title: "Papatto",
    description: "クローゼットアプリ",
    themeConfig: {
        logo: "/image/logo1_1024.png",
        navbar: [
            // NavbarItem
            {
                text: "HOME",
                link: "/",
            },
            {
                text: "利用規約",
                link: "/terms-of-service/",
            },
            {
                text: "プライバシー",
                link: "/privacy-policy/",
            },
        ],
    },
    base: "/mis_uni_official/",
    dest: "docs",
};
