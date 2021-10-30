const supertest = require("supertest");
const { expect, assert } = require("chai");

const app = require("../../../app");

describe("Get Employee By Name", () => {
  it("Should return status code 200", (done) => {
    supertest(app)
      .get("/api/employees/oldest")
      .expect(200, done);
  });
  it("Should return data", (done) => {
    supertest(app)
      .get("/api/employees/sue")
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
  it("Should return Sue as result", (done) => {
    supertest(app)
      .get("/api/employees/sue")
      .expect(200)
      .then((response) => {
        const result = response.body.data;
        assert.equal(result.name, "Sue");
        done();
      })
      .catch((error) => {
        console.log(error);
        done();
      });
  });
  it("Should return 404", (done) => {
    supertest(app)
      .get("/api/employees/asd")
      .expect(404, done);
  });
});
