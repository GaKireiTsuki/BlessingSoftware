exports.Duration = (value) => {
    var duration = value
    var min = parseInt(duration / 1000 / 60)
    if (min < 10) {
        min = '0' + min
    }
    var sec = parseInt((duration / 1000) % 60)
    if (sec < 10) {
        sec = '0' + sec
    }
    return `${min}:${sec}`
};

exports.Year = (value) => {
    var date = new Date(value)
    var year = date.getFullYear()
    return `${year}年`
};

exports.Date = (value) => {
    var date = new Date(value) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var year = date.getFullYear()
    var month = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1)
    var day = date.getDate()
    return `${year}年${month}月${day}日`
};

exports.Nbsp = (value) => {
    value.replace(/\s/g, ' ')
};