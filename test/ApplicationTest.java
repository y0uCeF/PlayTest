import java.util.HashMap;


import models.User;

import org.junit.*;

import play.mvc.*;
import play.test.*;
import play.data.Form;
import play.data.validation.ValidationError;
import play.data.validation.Constraints.RequiredValidator;
import play.i18n.Lang;
import play.libs.F;
import play.libs.F.*;

import static play.test.Helpers.*;
import static org.fest.assertions.Assertions.*;


/**
*
* Simple (JUnit) tests that can call all parts of a play app.
* If you are interested in mocking a whole application, see the wiki for more details.
*
*/
public class ApplicationTest {

    @Test 
    public void simpleCheck() {
        int a = 1 + 1;
        assertThat(a).isEqualTo(2);
    }
    
    @Test
    public void renderTemplate() {
    	HashMap<String, String> m = new HashMap<>();
    	m.put("username", "user");
    	m.put("password", "pass");
    	Form<User> form = Form.form(User.class);
    	Form<User> filledForm = form.bind(m);

        Content html = views.html.index.render();
        assertThat(contentType(html)).isEqualTo("text/html");
        assertThat(contentAsString(html).contains("username"));
        assertThat(contentAsString(html).contains("password"));
    }
  
   
}
