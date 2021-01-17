import moment from 'moment'
export default {
    DateTime: function (value) {
        return moment(value).format('YYYY年MM月DD日');
    }
}