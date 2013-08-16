Ext.define('TestApp.view.Login', {
    extend: 'Ext.form.Panel',
    
    requires: [
        'Ext.TitleBar',
        'Ext.MessageBox',
        'Ext.form.FieldSet', 
        'Ext.field.Password',
    ],

    xtype: 'loginform',
    
    id: 'login',
    config: {       
    	layout: {
            type: 'vbox'
        },
        
        title: 'Connection',
        
        items: [
                {
                	flex: 1
                },
                {
                	xtype: 'fieldset',
                    items: [
						{
						    xtype: 'textfield',
						    name : 'username',
						    placeHolder: "username",
						    required: true
						},
                        {
                            xtype: 'passwordfield',
                            name : 'password',
                            placeHolder: 'password',
						    required: true
                        }
                    ]
                },
                {
                    xtype: 'button',
                    text: 'Se connecter',
                    ui: ''
                },
                {
                	flex: 2
                }
        ]
    }
});
