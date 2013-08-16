package controllers;

import org.codehaus.jackson.node.ObjectNode;

import models.*;
import views.html.*;
import play.data.*;
import play.libs.Json;
import play.mvc.*;



public class Application extends Controller {
  
	static Form<User> userForm = Form.form(User.class);
	
    public static Result index() {
    	return ok(index.render());
    }
    
    public static Result login() {
    	Form<User> filledForm = userForm.bindFromRequest();
    	ObjectNode result = Json.newObject();
    	
    	if(filledForm.hasErrors()) {
    		result.put("success", false);
    		result.put("errors", filledForm.errorsAsJson());
    		return badRequest(result);
    	} else {
    		result.put("success", true);
    		return ok(result);
    	}
    }
  
}
