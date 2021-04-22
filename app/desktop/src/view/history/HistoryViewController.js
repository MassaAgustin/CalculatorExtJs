Ext.define('calculator.view.calculator.HistoryViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.historyviewcontroller',


    resetGrid: function () {
        Ext.getStore('histories').removeAll()
    }

})