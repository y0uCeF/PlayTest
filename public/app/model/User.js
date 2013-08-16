Ext.define('TestApp.model.User', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: ['domain', 'username', 'password'],
        
        validations : [{
            type : 'presence',
            name : 'username',
            message : "Entrer le nom d'utilisateur"
        }, {
            type : 'presence',
            name : 'password',
            message : "Entrer le mot de passe"
        }]
    }
});