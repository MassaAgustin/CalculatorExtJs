Ext.define('calculator.store.Histories', {
    extend: 'Ext.data.Store',
    alias: 'store.histories',
    model: 'calculator.model.History',

    storeId: 'histories',

    data: [{
        expression: '5+5',
        result: '10',
    }, {
        expression: '15/5',
        result: '3'
    }, {
        expression: '24/2+1',
        result: '13'
    }]
});