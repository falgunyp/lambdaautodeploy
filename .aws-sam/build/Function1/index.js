import express from "express";

const express = require("express");  // Instead of import express from 'express'

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda!" }),
  };
};
