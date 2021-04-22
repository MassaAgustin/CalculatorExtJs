Ext.define('calculator.view.menu.MenusController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.menus',
    require: ['Ext.fx.Anim'],

    getParentStore: function () {
        return this.getViewModel().get('expression')
    },

    init: function () {

        this.startAnimate()

        //console.log(this.getViewModel().get('expression')) here recognize the viewModel

        function getStore() {
            return this.getParentStore()
        }

        const top = 'top'

        this.topMenu = Ext.Viewport.setMenu({
            side: top,
            items: [{
                text: 'Calculadora',
                iconCls: 'x-fa fa-calculator',
                handler: function () {
                    Ext.Viewport.hideMenu(top);
                    console.log(getStore('expression'))
                }
            }, {
                text: 'Historial',
                iconCls: 'x-fa fa-history',
                handler: function () {
                    Ext.Viewport.hideMenu(top);
                    console.log(getStore('expression'))
                }
            }, {
                text: '',
                iconCls: 'x-fa fa-caret-up',
                handler: function () {
                    Ext.Viewport.hideMenu(top)
                }
            }]
        }, {
            side: 'top'
        });
    },

    destroy: function () {
        Ext.destroyMembers(this, 'topMenu');

        this.callParent();
    },

    getMenuCfg: function () { //if have one more slides panels i can handler here with parameter side
    },

    toggleMenu: function (side) {
        Ext.Viewport.setMenu(this[side + 'Menu'], {
            side: side
        });

        Ext.Viewport.toggleMenu(side);
    },

    toggleTop: function () {
        this.toggleMenu('top');
    },

    startAnimate: function () {

        const buttonNav = Ext.get('button-nav')

        buttonNav.animate({
            easing: 'ease',
            duration: 2000,
            from: {
                opacity: 0
            },
            to: {
                opacity: 1
            }
        })

    }
});