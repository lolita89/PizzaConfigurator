import React, { Component } from 'react';
// import logo from './logo.svg';
import { connect } from 'react-redux'
import './App.css';

class PizzaSize extends React.Component {
    constructor(props) {
      super(props);
      this.state = {size:0,sauce:0};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      // get the question id
      var questionId = event.target.id;
      // get the question value
      var questionValue = event.target.value;
      // set the state based on the question id and question value
      this.setState({[questionId]: questionValue});

    }

    handleSubmit(event) {
      
      var sizePrice = {};
      sizePrice[0] = 8.99;
      sizePrice[1] = 11.49;
      sizePrice[2] = 13.49;
      sizePrice[3] = 6.45;

      var sizeName = {};
      sizeName[0] = '25 cm';
      sizeName[1] = '30 cm';
      sizeName[2] = '35 cm';
      sizeName[3] = '20 cm';

      var saucePrice = {};
      saucePrice[0] = 0;
      saucePrice[1] = 0;
      saucePrice[2] = 1;
      saucePrice[3] = 1.50

      var sauceName = {};
      sauceName[0] = 'White sauce';
      sauceName[1] = 'Red Sauce';
      sauceName[2] = 'Double red sauce';
      sauceName[3] = 'Mix it up'

      var toppingPrice = {};
      toppingPrice[0] = 0.50;
      toppingPrice[1] = 0.50;
      toppingPrice[2] = 0.50;
      toppingPrice[3] = 0.50;
      toppingPrice[4] = 0.50;
      toppingPrice[5] = 0.50;
      toppingPrice[6] = 0.50;

      var toppingName = {}
      toppingName[0] = 'Pineapple'
      toppingName[1] = 'Corn'
      toppingName[2] = 'Olives'
      toppingName[3] = 'Red Onion'
      toppingName[4] = 'Spinach'
      toppingName[5] = 'Cherry Tomatoes'
      toppingName[6] = 'Chicken'
  

      var size = this.state.size;
      var sauce = this.state.sauce;

      var successMessage = '';

      // size message
      successMessage += 'your pizza size is ' + sizeName[size] + ' (' + sizePrice[size] + ' euro)';
      successMessage += '\n';

      // sauce message
      successMessage += 'your sauce is ' + sauceName[sauce] + ' (' + saucePrice[sauce] + ' euro)';
      successMessage += '\n';

      // topping message 1 - 7
      var totalTopping = 0;
      var toppingValue = this.state.topping_1;
      if (toppingValue == 1){
        totalTopping = totalTopping + 1;
        successMessage += 'You want also topping Pineapple (' + toppingPrice[1] + ' euro)';
        successMessage += '\n';
      }
      var toppingValue = this.state.topping_2;
      if (toppingValue == 1){
        totalTopping = totalTopping + 1;
        successMessage += 'You want also topping Corn (' + toppingPrice[2] + ' euro)';
        successMessage += '\n';
      }
      var toppingValue = this.state.topping_3;
      if (toppingValue == 1){
        totalTopping = totalTopping + 1;
        successMessage += 'You want also topping Olives (' + toppingPrice[3] + ' euro)';
        successMessage += '\n';
      }
      var toppingValue = this.state.topping_4;
      if (toppingValue == 1){
        totalTopping = totalTopping + 1;
        successMessage += 'You want also topping Red Onion(' + toppingPrice[4] + ' euro)';
        successMessage += '\n';
      }
      var toppingValue = this.state.topping_5;
      if (toppingValue == 1){
        totalTopping = totalTopping + 1;
        successMessage += 'You want also topping Spinach (' + toppingPrice[5] + ' euro)';
        successMessage += '\n';
      }
      var toppingValue = this.state.topping_6;
      if (toppingValue == 1){
        totalTopping = totalTopping + 1;
        successMessage += 'You want also topping Cherry Tomatoes (' + toppingPrice[6] + ' euro)';
        successMessage += '\n';
      }
      var toppingValue = this.state.topping_7;
      if (toppingValue == 1){
        totalTopping = totalTopping + 1;
        successMessage += 'You want also topping Chicken (' + toppingPrice[1] + ' euro)';
        successMessage += '\n';
      }
      successMessage += '\n';
      successMessage += '\n';

      // calculate total price
      var totalPrice = sizePrice[size] + saucePrice[sauce] + (totalTopping * toppingPrice[1]);
      // calculate drone price
      var dronePrice = totalPrice / 10;

      // pizza price message
      successMessage += 'Pizza Price: ' + totalPrice + ' Euro';

      // alert box
      if (totalTopping > 3){
        // if total topping bigger than 3
        alert('You cannot choose ' +totalTopping+ ' toppings, 3 is the maximum number of toppings, please kindly remake your pizza');
      } else {
        // if total topping 3 or less
        var txt;
        if (window.confirm(successMessage)) {
          if (window.confirm("Do you want to use Turbo-drone-delivery for " + dronePrice + " Euro?")) {
            // message if turbo drone delivery is selected
            successMessage += '\n';
            successMessage +=  "Delivery: " + dronePrice + " Euro.";
            successMessage += '\n';
            successMessage +=  "Total Price: " + (totalPrice + dronePrice) + " Euro";
            alert(successMessage);
          } else {
            // message if turbo drone delivery is NOT selected
            successMessage += '\n';
            successMessage +=  "Delivery: 0 Euro.";
            successMessage += '\n';
            successMessage +=  "Total Price: " + (totalPrice) + " Euro";
            alert(successMessage);
          }
        }
      }

      event.preventDefault();

    }
  
    render() {
      return (
          <div>
          <h1>Welcome to New Age Pizza! </h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick your size for pizza :
            <select value={this.state.value} id='size' onChange={this.handleChange}>
              <option value="0">25 cm: 8.99 euro</option>
              <option value="1">30 cm: 11.49 euro</option>
              <option value="2">35 cm: 13.49 euro</option>
              <option value="3">20 cm: 6.45 euro</option>
            </select>
            <br>
            </br>
          </label>
          <label>
            Pick your sauce :
            <select value={this.state.value} id='sauce' onChange={this.handleChange}>
              <option value="0">White sauce: 0 euro</option>
              <option value="1">Red sauce: 0 euro</option>
              <option value="2">Double red sauce: 1 euro</option>
              <option value="2">Mix it up: 1.50 euro</option>
            </select>
          </label>
          <br>
          </br>
          <label>
            Do you want Topping Pineaple for 0.50 euro? :
            <select value={this.state.value} id='topping_1' onChange={this.handleChange}>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </label>
          <br>
          </br>
          <label>
          Do you want Topping Corn for 0.50 euro? :
            <select value={this.state.value} id='topping_2' onChange={this.handleChange}>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </label>
          <br>
          </br>
          <label>
          Do you want Topping Olives for 0.50 euro?
            <select value={this.state.value} id='topping_3' onChange={this.handleChange}>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </label>
          <br>
          </br>
          <label>
          Do you want Topping Red Onion for 0.50 euro?
            <select value={this.state.value} id='topping_4' onChange={this.handleChange}>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </label>
          <br>
          </br>
          <label>
          Do you want Topping Spinach for 0.50 euro? :
            <select value={this.state.value} id='topping_5' onChange={this.handleChange}>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </label>
          <br>
          </br>
          <label>
          Do you want Topping Cherry Tomatoes for 0.50 euro?
            <select value={this.state.value} id='topping_6' onChange={this.handleChange}>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </label>
          <br>
          </br>
          <label>
          Do you want Topping Chicken for 0.50 euro? :
            <select value={this.state.value} id='topping_7' onChange={this.handleChange}>
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </label>
          <br>
            </br>
          <input type="submit" value="Submit" />
        </form>
        </div>
      );
    }
}
  
function mapStateToProps(state) {
  return {
      event: state.event
  }
}

export default connect(mapStateToProps)(PizzaSize)
