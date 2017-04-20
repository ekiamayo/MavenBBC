#Author: Maxwell
Feature: BBC Register New User

  @Register
  Scenario Outline: As a new user I want to create an account
    Given I am on the BBC HomePage
    And I click sign in
    When I click Register Now
    And verify that I am above the standard age
    And I choose the option that I am over standard age
    And I type email "<email>" address
    And I type password "<password>" in the password field
    And I insert postcode "<postcode>" in the postcode field
    And I select No email personalisation
    And I click Register button
    #Then I verify that I am registered successfully


    Examples: 
      | email          | password    | postcode |
      | pete@gmail.com | password123 | PE2 6FZ  |
      #| dan@aol.com    | today123    | SE1      |
