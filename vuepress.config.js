module.exports = {
    title: "ミスユニ！",
    description: "大学生のサークル探しアプリ",
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
