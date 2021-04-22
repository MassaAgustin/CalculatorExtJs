Ext.define('calculator.view.calculator.CalculatorViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.calculatorviewcontroller',

    init: function (event) { //to handle keypress events

        const textField = Ext.get('calcText')

        const regCalculator = new RegExp(/^[0-9*/+-]+$/)


        textField.on('keypress', (event) => {

            const keypressText = event.event.key
            const isValid = regCalculator.test(keypressText)

            if (keypressText === '=' || keypressText === 'Enter') {
                this.calculateExpression()
            } else {
                if (isValid) {
                    const newExpression = this.concatExpression(keypressText)
                    this.setStore('expression', newExpression)
                }
            }
        })
    },

    setNumber: function (event) {
        const buttonText = event.config.text
        const newExpression = this.concatExpression(buttonText)
        this.setStore('expression', newExpression)
    },

    concatExpression: function (expression) {
        return this.getStoreLocal('expression').concat(expression)
    },

    getStoreLocal: function (keyStore) {
        return this.getViewModel().get(keyStore)
    },

    setStore: function (keyStore, data) {
        this.getViewModel().set(keyStore, data)
    },

    calculateExpression: function () {
        const expression = this.getStoreLocal('expression')
        try {
            const resultOfExpression = eval(expression)
            this.setStore('lastExpression', expression)
            this.setStore('lastResult', resultOfExpression)

            const nroRandom = Math.floor((Math.random() * 10) + 1)
            Ext.getStore('histories').add({ expression: expression, result: resultOfExpression })
            Ext.Msg.confirm('Toast fuera de servicio :(',
                `Tu calculo ${expression} fue guardado con exito y el resultado es ${nroRandom} :) <br/>
                Para mas informacion ve a la pestaña de Historial! <br/>
                El resultado verdadero es ${resultOfExpression} jeje`
            );
            //Ext.toast({ message: 'Hello Sencha!', timeout: 2000 })

            this.resetExpression()
        } catch (err) {
            Ext.Msg.alert('Error en la expresion',
                `Compruebe si no ha ingresado un caracter no permitido <br/>
                ----> Nros 0-9 están permitidos <br/>
                ----> * / + - están permitidos`, Ext.emptyFn);
            console.log(err)
        }
    },

    resetExpression: function () {
        this.setStore('expression', '')
    }

})