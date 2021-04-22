Ext.define('calculator.view.history.HistoryView', {
    extend: 'Ext.grid.Grid',
    xtype: 'historyview',
    controller: 'historyviewcontroller',
    viewModel: {},

    store: {
        type: 'histories'
    },

    bind: {
        store: '{histories}'
    },

    title: 'Calculos Matematicos',
    width: 400,
    height: 500,

    columns: [{
        text: 'Expresion',
        flex: 2,
        dataIndex: 'expression'
    }, {
        text: 'Resultado',
        flex: 1,
        dataIndex: 'result'
    }],

    items: [{
        xtype: 'button',
        text: 'Reset',
        labelStyle: 'font-weight: bold',
        handler: 'resetGrid'
    }]

})