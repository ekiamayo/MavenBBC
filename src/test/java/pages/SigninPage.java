package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class SigninPage {
	
	//WebDriver driver;
	
	@FindBy(how=How.ID, using="username-input")
	public static WebElement myemail;
	
	@FindBy(how=How.ID, using="password-input")
	public static WebElement mypassword;
	
	@FindBy(how=How.ID, using="submit-button")
	public static WebElement signin_button;
	
	@FindBy(how=How.LINK_TEXT, using="Need help signing in?")
	public static WebElement need_help_signing_in;
	
	@FindBy(how=How.LINK_TEXT, using="Register now")
	public static WebElement register_now;
	
	
	public void type_username(String email){
		myemail.sendKeys(email);
	}
	
	public void type_password(String password){
		mypassword.sendKeys(password);
	}
	
	public void click_signin(){
		signin_button.click();
	}
	
	public void click_need_help_signing_in(){
		need_help_signing_in.click();
	}
	
	public void click_register_now(){
		register_now.click();
	}

}
