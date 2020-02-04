//------------Notes----------------

// GET

server.get("/api/notes", (req, res) => {
    db("notes")
      .then(notes => {
          res.status(200).json(notes)
      })
      .catch(err => {
          res.status(500).json(err)
      });
  });

  
  // GET BY ID
  
  server.get("/api/notes/:id", (req, res) => {
    const { id } = req.params;
    db("notes")
      .where({ id: id})
      .then(notes => {
          res.status(200).json(notes)
      })
      .catch(err => {
          res.status(500).json(err)
      });
  });
  

// POST

server.post("/api/notes/post", (req, res) => {
    const notes = req.body;

    db("notes")
      .insert(notes)
      .into("notes")
      .then(ids => {
          res.status(201).json({ids})
      })
      .catch(err => {
          res.status(500).json({ error: err })
      });
  });

  // UPDATE

server.put("/api/notes/edit/:id", (req, res) => {
    const changes = req.body;
    const {id} = req.params;
    db("notes")
      .where({ id: id })
      .update(changes)
      .then(count => {
          res.status(200).json(count)
      })
      .catch(err => res.status(500).json({ error: err }));
  });

// DELETE

server.delete("/api/notes/delete/:id", (req, res) => {
    const { id } = req.params;
    db("notes")
      .where({id:id})
      .del()
      .then(ids => {
          res.status(200).json(ids)
      })
      .catch(err => {
          res.status(500).json({ error: err })
      });
  });

  function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username,
    };
  
    const secret = process.env.JWT_SECRET;
    const options = {
      expiresIn: '60m', //time changed here before another login attempt is needed
    };
  
    return jwt.sign(payload, secret, options);
  }
