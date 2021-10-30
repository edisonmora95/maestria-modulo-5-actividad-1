const supertest = require("supertest");
const { expect, assert } = require("chai");

const app = require("../../../app");

const employeeData = {
  "name": "Edison",
  "age": 26,
  "phone": {
      "personal": "992556793"
  },
  "privileges": "user",
  "favorites": {
      "artist": "Green Day"
  },
  "finished": [5, 7],
  "badges": ["blue"],
  "points": [
      {
          "points": 10,
          "bonus": 2
      }
  ]
};

describe("Add One Employee", () => {
  it("Should return status code 200", (done) => {
    supertest(app)
      .post("/api/employees")
      .send(employeeData)
      .expect(200, done);
  });
  it("Should return data", (done) => {
    supertest(app)
      .post("/api/employees")
      .send(employeeData)
      .expect(200)
      .then((response) => {
        expect(response.body).to.haveOwnProperty("data");
        done();
      })
      .catch((error) => {
        console.log(error);
        done();
      });
  });
  it("Should return data", (done) => {
    supertest(app)
      .post("/api/employees")
      .send({})
      .expect(400, done);
  });
});
