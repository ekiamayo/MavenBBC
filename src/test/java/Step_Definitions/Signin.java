package Step_Definitions;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import Helper.testBase;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.HomePage;
import pages.SigninPage;

public class Signin extends testBase{
	
	@Before
	public void setup() throws IOException{
		initialize();
	}
	
	@Given("^I type email address \"([^\"]*)\" in the email field$")
	public void i_type_email_address_in_the_email_field(String email) throws Throwable {
		SigninPage signinpage = PageFactory.initElements(driver, SigninPage.class);
		signinpage.type_username(email);
	}

	@Given("^I type password account \"([^\"]*)\" in the password text field$")
	public void i_type_password_account_in_the_password_text_field(String password) throws Throwable {
		 SigninPage signinpage = PageFactory.initElements(driver, SigninPage.class);
		 signinpage.type_password(password);
	    
	}

	@When("^I click sign in button$")
	public void i_click_sign_in_button() throws Throwable {
		 SigninPage signinpage = PageFactory.initElements(driver, SigninPage.class);
		 signinpage.click_signin();
	}

	@Then("^I verify that I am logged in successfully$")
	public void i_verify_that_I_am_logged_in_successfully() throws Throwable {
		 driver.findElement(By.id("idcta-username")).click();
	}

	@Then("^I log out from my account$")
	public void i_log_out_from_my_account() throws Throwable {
		 Assert.assertEquals("Lovely to see you here", driver.findElement(By.xpath("//div[@id='orb-modules']/div/div/div/div/div[2]/div/div/div/h2")).getText());
		 driver.findElement(By.xpath("//div[@id='orb-modules']/div/div/div/div/div/div/div/div/div/nav/ul/li[3]/a/span")).click();  
	}
	
//	@After
//	public void TearDown(){
//		driver.close();
//	}

}
