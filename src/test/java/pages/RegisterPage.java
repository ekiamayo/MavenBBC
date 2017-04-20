package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import junit.framework.Assert;

public class RegisterPage {
	
	//WebDriver driver;
	
	@FindBy(how=How.XPATH, using="//*[@id='container']/div/div/div/div[2]/div[2]/div[2]/div/div[2]/fieldset/div[1]/a[2]")
	public static WebElement over_standard_age;
	
	@FindBy(how=How.ID, using="email-input")
	public static WebElement myemail;
	
	@FindBy(how=How.ID, using="password-input") 
	public static WebElement mypassword;
	
	@FindBy(how=How.ID, using="postcode-input") 
	public static WebElement mypostcode;
	
	@FindBy(how=How.CSS, using="div.button__text") 
	public static WebElement mypersonalised_email;
	
	@FindBy(how=How.ID, using="submit-button") 
	public static WebElement reg_submit_button;
	
	
	public void verify_over_18(){
		Assert.assertEquals("18 or over", over_standard_age.getText());
	}
	
	public void click_over_18(){
		over_standard_age.click();
	}
	
	public void type_email(String email){
		myemail.sendKeys(email);
	}
	
	public void type_password(String password){
		mypassword.sendKeys(password);
	}
	
	public void type_postcode(String postcode){
		mypostcode.sendKeys(postcode);
	}
	
	public void click_personalised_email(){
		mypersonalised_email.click();
	}
	
	public void click_submit_button(){
		reg_submit_button.click();
	}
	
	


}
