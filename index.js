'use strict';

const { Database } = require('sqlite3').verbose();
const db = new Database('db/Chinook_Sqlite.sqlite');
const Table = require('cli-table');

db.serialize( () => {

  //Query one
  // db.all(`
  //   SELECT  Customer.FirstName || ' ' || Customer.LastName AS FullName,
  //           Customer.CustomerId,
  //           Customer.Country
  //   FROM Customer
  //   WHERE Customer.Country IS NOT 'USA'
  // `, (err, customers) => {
  //   console.log("Test customers", customers);
  // });

  //Query Two from nodemilestones
  // db.each(`
  //   SELECT  Customer.FirstName || ' ' || Customer.LastName AS FullName,
  //           Customer.CustomerId,
  //           Customer.Country
  //   FROM Customer
  //   WHERE Customer.Country IS 'Brazil'
  // `, (err, { CustomerId, FullName, Country }) => {
  //     console.log(`${CustomerId}, ${FullName}, (${Country})`);
  // });

  //Query Three from nodemilestones
  // let table = new Table({ head: ["InvoiceId", "Customer Name", "InvoiceDate", "Billing Country"] });
  // db.each(`
  //   SELECT FirstName || ' ' || Lastname AS FullName,
  //     InvoiceId,
  //     InvoiceDate,
  //     BillingCountry
  //   FROM Invoice
  //   JOIN Customer ON Invoice.CustomerID = Customer.CustomerId
  //   WHERE Customer.Country = 'Brazil'
  //   ORDER BY InvoiceId ASC
  // `, (err, { FullName, InvoiceId, InvoiceDate, BillingCountry }) => {
  //
  //   table.push( [InvoiceId, FullName, InvoiceDate, BillingCountry] );
  //
  // }, () => console.log(table.toString()));


  //Query Four from nodemilestones
  let table4 = new Table({ head: ['Fullname'] });
  db.each(`
    SELECT FirstName || ' ' || Lastname AS 'Name'
    FROM Employee
    WHERE Employee.Title = 'Sales Support Agent'
  `, (err, { Name }) => {
    table4.push([Name]);
  }, () => console.log(table4.toString()));

});

db.close();
