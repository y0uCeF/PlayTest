var sendData = function(form, isValid, url, success) {
	if(isValid) {
		form.submit({
    	    url: url,
    	    method: 'POST',
    	    params: {
    	    	
    	    },
    	    
    	    success: success,
    	    
    	    failure: function(form, result) {
    	    	Ext.Msg.alert('Erreur', result.errors);
    	    } 
    	});
	} else {
		Ext.Msg.alert('Erreur', 'Il faut remplir tous les champs');
	}
};

Ext.define('TestApp.controller.Login', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
    		nav: '#nav',
    		loginForm: '#login',
            loginButton: '#login button',
        },
        control: {
            loginButton: {
                tap: 'doLogin'
            }
        }
    },
    
    doLogin: function() {
    	var form = this.getLoginForm();
    	var main = this.getNav();
    	var model = Ext.create('TestApp.model.User', form.getValues());
    	validation = model.validate();
    	
    	sendData(form, validation.isValid(), 'Login', function(form, result) {
	    	form.reset();
	    	main.push({html: 'welcome user'});
	    });
    }
});
