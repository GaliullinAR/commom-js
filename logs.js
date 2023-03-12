const timeout = 5;
const data = [4, 11, 454];
class Client {

}

/* =================================================
              ВАЖНО!!!
  мы можем импортировать только одним способом:
  либо через module.exports,
  либо через exports.data
====================================================*/

exports.data = data;

module.exports = {
  timeout,
  Client,
  data
}