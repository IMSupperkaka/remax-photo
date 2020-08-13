const pages = ['pages/home/index', 'pages/coupon/index', 'pages/my/index'];

module.exports.ali = {
    pages,
    tabBar: {
        borderStyle: 'white',
        items: [
            {
                pagePath: 'pages/home/index',
                name: '首页'
            },
            {
                pagePath: 'pages/coupon/index',
                name: '优惠券'
            },
            {
                pagePath: 'pages/my/index',
                name: '我的'
            }
        ]
    },
    window: {
        navigationBarBackgroundColor: '#fff',
        navigationBarTextStyle: 'black',
        backgroundColor: '#f5f5f5'
    }
};

module.exports.wechat = {
    pages,
    tabBar: {
        color: '#666666',
        selectedColor: '#FF6345',
        borderStyle: 'white',
        list: [
            {
                pagePath: 'pages/home/index',
                iconPath: 'images/tab_icon_home_default@2x.png',
                selectedIconPath: 'images/tab_icon_home_pressed@2x.png',
                text: '首页'
            },
            {
                pagePath: 'pages/coupon/index',
                iconPath: 'images/tab_icon_coupons_default@2x.png',
                selectedIconPath: 'images/tab_icon_coupons_pressed@2x.png',
                text: '优惠券'
            },
            {
                pagePath: 'pages/my/index',
                iconPath: 'images/tab_icon_my_default@2x.png',
                selectedIconPath: 'images/tab_icon_my_pressed@2x.png',
                text: '我的'
            }
        ]
    },
    window: {
        navigationBarBackgroundColor: '#fff',
        navigationBarTextStyle: 'black',
        backgroundColor: '#F6F6F6'
    },
};

module.exports.toutiao = {
    pages,
    window: {
        navigationBarTitleText: 'Remax Toutiao Template'
    },
};

module.exports.web = {
    pages,
    title: 'Remax Web Template',
};
