//jshint esversion:6
// const lang = require('./public/js/index');
const express = require('express');
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
let lang = "Rus";

const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/inflotDB", { useNewUrlParser: true, useUnifiedTopology: true });

const DA_EstimateSchema = new mongoose.Schema({
    pageName: { type: String, required: [true, "can't be blank"] },
    lang: { type: String, required: [true, "can't be blank"] },
    title: String,
    secondHeader: String,
    paragraph: String,
    linkText: String,
    imgSource: String
});

const ActivitiesSchema = new mongoose.Schema({
    pageName: { type: String, required: [true, "can't be blank"] },
    lang: { type: String, required: [true, "can't be blank"] },
    title: String,
    secondHeader: String,
    firstParagraph: String,
    imgSource: String,
    secondParagraph: String,
    thirdHeader: String,
    listItems: [],
    thirdParagraph: String,
    phoneNumber: String,
    emailTextOne: String,
    email: String,
    emailTextTwo: String,
});

const DA_Estimate = mongoose.model("DA_Estimate", DA_EstimateSchema);
const Activities = mongoose.model("Activities", ActivitiesSchema);

// const portmark = new DA_Estimate({
//     pageName: "bdportmark",
//     lang: "Rus",
//     title: "Предварительная оценка дисбурсментского счета для Белгород-Днестровского морского торгового порта",
//     secondHeader: "Предварительная оценка дисбурсментского счета для Белгород-Днестровского морского торгового порта",
//     paragraph: "Для получения более подробной информации обращайтесь, пожалуйста, в",
//     linkText: "Белгород-Днестровское морское агентство ИНФЛОТ.",
//     imgSource: "../../docs/bdportmark.gif"
// });

// const activity = new Activities({
//     pageName: "tourism",
//     lang: "Rus",
//     title: "Туризм",
//     secondHeader: "Туризм",
//     firstParagraph: 'Подразделения ЧГМА "Инфлот", имеющие многолетний опыт в туристическом бизнесе, постоянно расширяют спектр предоставляемых туристических услуг, совершенствуя при этом их качество.',
//     imgSource: "../images/act_tourism.jpg",
//     secondParagraph: "Мы предлагаем Вам посетить лучшие курорты и самые интересные уголки, где Вас ждут живописные пейзажи, уникальные памятники истории и современный сервис. Вы получите возможность увлекательно провести время и укрепить здоровье.",
//     thirdHeader: "Мы предлагаем туристический сервис любого уровня в соответствии с Вашими требованиями и запросами:",
//     listItems: [
//         "в санаториях и домах отдыха",
//         "в отелях",
//         "в мини-отелях и частном секторе"
//     ],
//     thirdParagraph: "Позвоните или напишите нам, если Вам необходима информация по предоставлению туристических услуг:",
//     phoneNumber: "Тел: +38(048)7223902",
//     emailTextOne: "e-mail:",
//     email: "mailto: office@inflot.odessa.ua",
//     emailTextTwo: "office@inflot.odessa.ua",
// });

app.get("/", (req, res) => {
    res.render(lang.toString() + "HomePage");
});

app.get("/eng", (req, res) => {
    lang = "Eng";
    res.redirect("/");
});

app.get("/rus", (req, res) => {
    lang = "Rus";
    res.redirect("/");
});


app.get("/ports/:portName", (req, res) => {
    const portName = req.params.portName;
    res.render("./" + lang.toString() + "Pages/" + portName);
});

app.get("/ports/DA_Estimate/:estimateName", (req, res) => {
    const estimateName = req.params.estimateName;

    DA_Estimate.findOne({ pageName: estimateName, lang: lang.toString() }, (err, DA_Estimates) => {
        res.render("./DA_Estimate/portmark", {
            title: DA_Estimates.title,
            lang: lang.toString(),
            secondHeader: DA_Estimates.secondHeader,
            paragraph: DA_Estimates.paragraph,
            linkText: DA_Estimates.linkText,
            imgSource: DA_Estimates.imgSource
        });
    });
});

app.get("/activities/:activityName", (req, res) => {
    const activityName = req.params.activityName;
    Activities.findOne({ pageName: activityName, lang: lang.toString() }, (err, activity) => {
        res.render("./Activities/activity", { activity: activity, lang: activity.lang });
    });
});

app.get("/branches/:branchName", (req, res) => {
    const branchName = req.params.branchName;
    res.render("./" + lang.toString() + "Pages/Branches/" + branchName);
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
