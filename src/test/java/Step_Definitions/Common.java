package Step_Definitions;

import java.io.IOException;

import Helper.testBase;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;

public class Common extends testBase{
	
	
	@Before
	public void setup() throws IOException{
		initialize();
	}
	
	
	@Given("^I am on the BBC HomePage$")
	public void i_am_on_the_BBC_HomePage() throws Throwable {		
		driver.get(CONFIG.getProperty("testSiteName"));
	    driver.manage().window().maximize();
	}

}
