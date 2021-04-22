Ext.define('calculator.view.main.MainViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.mainviewmodel',

    data: {
        calculatorVisible: true,
        expression: '',
        result: '',
        lastExpression: '',
        lastResult: ''
    }
})