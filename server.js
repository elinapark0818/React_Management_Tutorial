const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "박엘리나",
      birthday: "920604",
      gender: "여자",
      job: "취준생",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "이쁜영서님",
      birthday: "941212",
      gender: "여자",
      job: "취준생",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "멋진영빈님",
      birthday: "890620",
      gender: "남자",
      job: "프로그래머",
    },
    {
      id: 4,
      image: "https://placeimg.com/64/64/4",
      name: "막내현걸님",
      birthday: "960915",
      gender: "남자",
      job: "대학생",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
