const express = require("express");
const router = express.Router();
const { Favorite } = require("../models/Favorite");

router.post("/favoriteNumber", (req, res) => {
  //mongoDB에서 favorite 숫자 가져오기
  Favorite.find({ movieId: req.body.movieId }).exec((err, info) => {
    if (err) return res.status(400).send(err);
    //그다음에 프론트에 다시 숫자정보 보여주기
    res.status(200).json({ success: true, favoriteNumber: info.length });
  });
});

router.post("/favorited", (req, res) => {
  //내가 이영화를 Favorite리스트에 넣었는지 정보를 DB에서 가져오기

  //mongoDB에서 favorite 숫자 가져오기
  Favorite.find({ movieId: req.body.movieId, useFrom: req.body.useFrom }) //useFrom 내가 눌렀는지 확인하기 위함
    .exec((err, info) => {
      if (err) return res.status(400).send(err);
      //그다음에 프론트에 다시 숫자정보 보여주기

      let result = false; //넣지않은경우
      if (info.length !== 0) {
        result = true;
      }

      res.status(200).json({ success: true, favorited: result });
    });
});

router.post("/removeFromFavorite", (req, res) => {
  Favorite.findOneAndDelete({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, doc) => {
    //exec 정규식패턴에 맞는 문자열 탐색
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, doc });
  });
});

router.post("/addToFavorite", (req, res) => {
  //받은 내용을 models/Favorite.js에 넣어주는 과정
  const favorite = new Favorite(req.body);

  favorite.save((err, doc) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true });
  });
});

router.post("/getFavoredMovie", (req, res) => {
  Favorite.find({ userFrom: req.body.userFrom }).exec((err, favorites) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true, favorites });
  });
});

router.post("/removeFromFavorite", (req, res) => {
  Favorite.findOneAndDelete({
    movieId: req.body.movieId,
    userFrom: req.body.userFrom,
  }).exec((err, result) => {
    if (err) return res.status(400).send(err);
    return res.status(200).json({ success: true });
  });
});

module.exports = router;
