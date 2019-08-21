import moment from 'moment'

export default  [
    {
        id: '1',
        description: "redds bill",
        amount: 12300,
        timePayAt: moment(1000).valueOf(),
        note: ''
    },

   
    
    {
        id: '3',
        description: "oil bill",
        amount: 7800,
        timePayAt: moment(0).subtract(4, 'days').valueOf(),
        note: ''
    }
];

