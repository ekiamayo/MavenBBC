#Author: Maxwell
Feature: BBC Sign in

  @Signin
  Scenario Outline: As a Registered user I want to sign in successfully
    Given I am on the BBC HomePage
    And I click sign in
    And I type email address "<email>" in the email field
    And I type password account "<password>" in the password text field
    When I click sign in button
    Then I verify that I am logged in successfully
    And I log out from my account

    Examples: 
      | email                | password |
      | maxtest964@gmail.com | today001 |
