import Vue from 'vue';
import myDatatableWrapper from './myDatatableWrapper.vue';

const data = {
  //Header
  header: "I can add my own conditional formating",
  // Columns
  columns: [{
    label: "First Name",
    field: "firstName",
  }, {
    label: "Last Name",
    field: "lastName",
  }, {
    label: "Email",
    field: "email"
  }], // I want to add a column that renders a component template
      // for maybe a button row, or a row that has a popover

  // Rows
  rows: [{
    firstName: "Peter",
    lastName: "Griffin",
    email: "peter@griffin.com"
  }, {
    firstName: "Homer",
    lastName: "Simpson",
    email: "homer@simpson.com"
  }, {
    firstName: "Sterling",
    lastName: "Archer",
    email: "sterling@archer.com"
  }]
}

const app = new Vue({
  el: '#app',
  data,
  components: {
    myDatatableWrapper
  }
})