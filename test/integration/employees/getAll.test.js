const supertest = require("supertest");
const { expect, assert } = require("chai");

const app = require("../../../app");

describe("Get All Employees", () => {
  it("Should return status code 200", (done) => {
    supertest(app)
      .get("/api/employees")
      .expect(200, done);
  });
  it("Should return data", (done) => {
    supertest(app)
      .get("/api/employees")
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
      .get("/api/employees")
      .expect(200)
      .then((response) => {
        const result = response.body.data[0];
        assert.equal(result.name, "Sue");
        done();
      })
      .catch((error) => {
        console.log(error);
        done();
      });
  });
  it("Should return employess with user privilege", (done) => {
    supertest(app)
      .get("/api/employees?user=true")
      .expect(200)
      .then((response) => {
        const result = response.body.data;
        for (const x of result) {
          assert.equal(x.privileges, "user");
        }
        done();
      })
      .catch((error) => {
        console.log(error);
        done();
      });
  });
  it("Should return employess with selected badge", (done) => {
    supertest(app)
      .get("/api/employees?badge=black")
      .expect(200)
      .then((response) => {
        const result = response.body.data;
        assert.equal(result.length, 6);
        done();
      })
      .catch((error) => {
        console.log(error);
        done();
      });
  });
  it("Should return paginated results", (done) => {
    supertest(app)
      .get("/api/employees?page=1")
      .expect(200)
      .then((response) => {
        const result = response.body.data;
        assert.equal(result.length, 2);
        done();
      })
      .catch((error) => {
        console.log(error);
        done();
      });
  });
});
