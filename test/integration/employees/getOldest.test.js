const supertest = require("supertest");
const { expect, assert } = require("chai");

const app = require("../../../app");

describe("Get Oldest Employee", () => {
  it("Should return status code 200", (done) => {
    supertest(app)
      .get("/api/employees/oldest")
      .expect(200, done);
  });
  it("Should return data", (done) => {
    supertest(app)
      .get("/api/employees/oldest")
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
  it("Should return Sue as first result", (done) => {
    supertest(app)
      .get("/api/employees/oldest")
      .expect(200)
      .then((response) => {
        const result = response.body.data;
        assert.equal(result.name, "Martin");
        done();
      })
      .catch((error) => {
        console.log(error);
        done();
      });
  });
});
