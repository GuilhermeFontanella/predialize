const dados = require("../clients.mock");


module.exports.load = (app) => {
  /** Get all clients */
  app.get("/", (req, res, next) => {
    
    if(dados) {
      res.json({dados});
      res.send(200);
    } else {
      res.send(404);
    }
  });  

  /** Get clients by name */
  app.get("/name/:name", (req, res, next) => {
    const param = req.params.name;
    let data = dados.filter(e => e.name === param);
    
    if(data.length > 0) {
      res.json({data});
      res.send(200);
    } else {
      res.send(404);
    };
  });
  
  /** Get client totals */
  app.get("/:client_id/totals", (req, res, next) => {
    const param = req.params.client_id;
    const data = dados.filter(e => e._id === param);
    if(data.length > 0) {
      res.json({data});
      res.send(200);
    } else {
      res.send(404)
    }
  });  

  /** Get all enterprises */
  app.get("/enterprise", (req, res, next) => {});

  /** Get enterprises by name */
  app.get("/enterprise/name/:name", (req, res, next) => {});

  /** Get all enterprises by client */
  app.get("/:_id/enterprise", (req, res, next) => {
    const param = req.params._id;
    const clientById = dados.find(e => e._id === param);
    const data = clientById.enterprises
    
    if (data) {
      res.json({client_id: clientById._id, data});
      res.send(200);
    } else {
      res.send(404);
    }
  });

  /** Get enterprises by client and name */
  app.get("/:client_id/enterprise/name/:name", (req, res, next) => {});

  /** Get general totals */
  app.get("/totals", (req, res, next) => {});

  /** Get a client by _id */
  app.get("/:_id", (req, res, next) => {
    const param = req.params._id;
    const data = dados.find(e => e._id === param);

    if(data) {
      res.json({data});
      res.send(200);
    } else {
      res.send(404);
    }
  });
};
