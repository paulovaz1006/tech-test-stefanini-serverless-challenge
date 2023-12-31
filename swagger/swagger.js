// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "serverless-crud",
    "version": "1"
  },
  "paths": {
    "/employees": {
      "get": {
        "summary": "list-employee",
        "description": "",
        "operationId": "list-employee.get./employees",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      },
      "post": {
        "summary": "create-employee",
        "description": "",
        "operationId": "create-employee.post./employees",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      },
      "put": {
        "summary": "update-employee",
        "description": "",
        "operationId": "update-employee.put./employees",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/employees/:name": {
      "get": {
        "summary": "list-unique-employee",
        "description": "",
        "operationId": "list-unique-employee.get./employees/:name",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    },
    "/employees/:id": {
      "delete": {
        "summary": "delete-employee",
        "description": "",
        "operationId": "delete-employee.delete./employees/:id",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "200 response"
          }
        }
      }
    }
  },
  "definitions": {},
  "securityDefinitions": {}
};