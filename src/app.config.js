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
        borderStyle: 'white',
        list: [
            {
                pagePath: 'pages/home/index',
                text: '首页'
            },
            {
                pagePath: 'pages/coupon/index',
                text: '优惠券'
            },
            {
                pagePath: 'pages/my/index',
                text: '我的'
            }
        ]
    },
    window: {
        navigationBarBackgroundColor: '#fff',
        navigationBarTextStyle: 'black',
        backgroundColor: '#f5f5f5'
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
