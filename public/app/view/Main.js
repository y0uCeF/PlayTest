Ext.define('TestApp.view.Main', {
    extend: 'Ext.NavigationView',
    
    requires: ['TestApp.view.Login'],

    xtype: 'main',
    id: 'nav',
    
    config: {
    	fullscreen: true,
    	
    	navigationBar: {
    		items: [
    		    {
		    		xtype: 'button',
		    		id: 'logout-btn',
		    		text: 'Logout',
		    		ui: 'action',
		    		align: 'right',
		    		hidden: true,
		            hideAnimation: Ext.os.is.Android ? false : {
		                type: 'fadeOut',
		                duration: 200
		            },
		            showAnimation: Ext.os.is.Android ? false : {
		                type: 'fadeIn',
		                duration: 200
		            }
    		    }
    		]
    	},
    	
    	items:[ 
    	    {
    	    	xtype: 'loginform' 
    	    }  
    	]
    }
});
