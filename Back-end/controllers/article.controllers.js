
const sql = require("../models/db.js");
const Article = require('../models/article.models.js');
require('dotenv').config();

// Create and Save a new article
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Le champ ne peut pas etre vide"
      });
    }
    const article = new Article({
        titre: req.body.titre,
        contenu: req.body.contenu,
      });


    // Save Article in the database
    Article.create(article, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Une erreur est survenue lors de la création de l'article"
        });
      else res.send(data);
    });
  };
// Retrieve all Articles from the database.
exports.findAll = (req, res) => {
    Article.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la récuperation des Articles"
      });
    else res.send(data);
  });
};


// Find a single Article with a ArticleId
exports.findOne = (req, res) => {
    Article.findById(req.params.articleId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `L'id de l'article' ${req.params.articleId} n'a pas été trouvé.`
        });
      } else {
        res.status(500).send({
          message: "Erreur de recuperation de l'id de l'article" + req.params.articleId
        });
      }
    } else res.send(data);
  });
};


// Update a Article identified by the articleId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Le champ ne peut pas etre vide"
    });
  }

  Article.updateById(req.params.articleId, new Article(req.body), (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `L'id de l'article ${req.params.articleId} n'a pas été trouvé.`
          });
        } else {
          res.status(500).send({
            message: "Erreur MAJ de l'id de l'article " + req.params.articleId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Article with the specified ArticleId in the request
exports.delete = (req, res) => {
    Article.remove(req.params.articleId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `L'id de l'article' ${req.params.articleId} n'a pas été trouvé.`
        });
      } else {
        res.status(500).send({
          message: "L'id ne peut pas etre supprimé" + req.params.articleId
        });
      }
    } else res.send({ message: `L'article a été supprimé` });
  });
};

// Delete all Articles from the database.
exports.deleteAll = (req, res) => {
    Article.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la suppression de tous les Articles."
      });
    else res.send({ message: `Tous les Articles ont été supprimés!` });
  });
};



