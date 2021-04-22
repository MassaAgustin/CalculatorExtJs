Ext.define('calculator.view.menu.Menus', {
    extend: 'Ext.Panel',
    xtype: 'menus',
    controller: 'menus',
    cls: 'menus',
    viewModel: {},

    onRender: function () {
        console.log(this.viewModel.get('selectedView'))
    },

    defaults: {
        xtype: 'button',
        cls: 'demobtn',
        margin: '10 0',
        width: '100%',
        height: '100%'
    },

    items: [
        {
            id: 'button-nav',
            margin: '0 0 10 0',
            text: '',
            iconCls: 'x-fa fa-caret-down',
            handler: 'toggleTop',
        }
    ]
})
