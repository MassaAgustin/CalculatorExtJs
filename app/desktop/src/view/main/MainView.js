Ext.define('calculator.view.main.MainView', {
  extend: 'Ext.tab.Panel',
  xtype: 'mainview',
  controller: 'mainviewcontroller',

  viewModel: {
    type: 'mainviewmodel'
  },

  defaults: {
    scrollable: true,
    userSelectable: {
      bodyElement: true
    },
    layout: 'center'
  },

  //childs components
  items: [{
    xtype: 'panel',
    title: 'Calculadora',
    items: [{ xtype: 'calculatorview' }],
    iconCls: 'x-fa fa-calculator',
    cls: 'card'
    //hidden: ('{calculatorVisible}') ? false : true
  },
  {
    xtype: 'panel',
    title: 'Historial',
    items: [{ xtype: 'historyview' }],
    iconCls: 'x-fa fa-history',
    cls: 'card'
    //hidden: ('{calculatorVisible}') ? true : false
  },
  {
    xtype: 'menus',
    floating: true,
    title: 'Test',
    cls: 'card',
    disabled: true
  }]
})