package Step_Definitions;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import Helper.testBase;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;
import pages.RegisterPage;
import pages.SigninPage;

public class Register extends testBase {
	
	@Before
	public void setup() throws IOException{
		initialize();
	}
	
	@Given("^I click sign in$")
	public void i_click_sign_in() throws Throwable {
		HomePage homepage = PageFactory.initElements(driver, HomePage.class);
		homepage.mysigin_in();
	}

	@When("^I click Register Now$")
	public void i_click_Register_Now() throws Throwable {
		SigninPage signinpage = PageFactory.initElements(driver, SigninPage.class);
		signinpage.click_register_now();
	}

	@When("^verify that I am above the standard age$")
	public void verify_that_I_am_above_the_standard_age() throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
		registerpage.verify_over_18();
	}

	@When("^I choose the option that I am over standard age$")
	public void i_choose_the_option_that_I_am_over_standard_age() throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
		registerpage.click_over_18();   
	}

	@When("^I type email \"([^\"]*)\" address$")
	public void i_type_email_address(String email) throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
		registerpage.type_email(email); 
	}

	@When("^I type password \"([^\"]*)\" in the password field$")
	public void i_type_password_in_the_password_field(String password) throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
		registerpage.type_password(password);
	}

	@When("^I insert postcode \"([^\"]*)\" in the postcode field$")
	public void i_insert_postcode_in_the_postcode_field(String postcode) throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
		registerpage.type_postcode(postcode);
	  
	}

	@When("^I select No email personalisation$")
	public void i_select_No_email_personalisation() throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
		registerpage.click_personalised_email();
	  
	}

	@When("^I click Register button$")
	public void i_click_Register_button() throws Throwable {
		RegisterPage registerpage = PageFactory.initElements(driver, RegisterPage.class);
		registerpage.click_submit_button();
	
	}

	@Then("^I verify that I am registered successfully$")
	public void i_verify_that_I_am_registered_successfully() throws Throwable {
	    
	}
	
//	@After
//	public void teardown(){
//		driver.close();
//	}
	
	
	

}
