var express = require('express');
var router = express.Router();

const multer = require('multer');

/*
    model
*/
const { Post } = require('../Model/Post.js');
const { Counter } = require('../Model/Counter.js');
const { User } = require('../Model/User.js');

/*
    naver cloud platform S3 module
*/
const setUpload = require('../Util/upload.js');

router.post("/submit", (req, res) => {

    let temp = {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
    };

    Counter.findOne({ name: "counter" }).exec().then((counter) => {
        temp.postNum = counter.postNum;

        User.findOne({ uid: req.body.uid }).exec().then((userInfo) => {
            temp.author = userInfo._id;

            const CommunityPost = new Post(temp);

            CommunityPost.save().then(() => {

                // updateOne({어떤 doc를 업데이트할건지}, {어떻게 업데이트할건지})
                Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } }).then(() => {

                    res.status(200).json({ success: true });

                });
            });
        })

    }).catch((err) => {

        res.status(400).json({ success: false });
    })
})

router.post("/list", (req, res) => {

    Post.find().populate("author").exec().then((doc) => {

        res.status(200).json({ success: true, postList: doc });

    }).catch((err) => {

        res.status(400).json({ success: false })
        console.log(err);
    })
})

router.post("/detail", (req, res) => {

    Post.findOne({ postNum: Number(req.body.postNum) }).populate("author").exec().then((doc) => {

        res.status(200).json({ success: true, post: doc });

    }).catch((err) => {

        res.status(400).json({ success: false })
    })
})

router.post("/edit", (req, res) => {

    let temp = {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image
    }

    Post.updateOne({ postNum: Number(req.body.postNum) }, { $set: temp }).exec().then(() => {

        res.status(200).json({ success: true });

    }).catch((err) => {

        res.status(400).json({ success: false })
    })
})

router.post("/delete", (req, res) => {

    Post.deleteOne({ postNum: Number(req.body.postNum) }).exec().then(() => {

        res.status(200).json({ success: true });

    }).catch((err) => {

        res.status(400).json({ success: false });
    })

})


/*
    npm i multer --save

    diskStorage : multer로 전달받은 파일을 우리 disk 에 저장을 하겠다.
    destination : 어떤 경로
*/
/*
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "image/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
})

const upload = multer({ storage: storage }).single("file");

router.post("/image/upload", (req, res) => {
    upload(req, res, err => {

        if (err) {

            res.status(400).json({ success: false })

        } else {

            res.status(200).json({ success: true, filePath: res.req.file.path })
        }
    })
})


/*
    express middleware 문법
*/
router.post("/image/upload", setUpload("mern-react-community/post"), (req, res, next) => {

    res.status(200).json({ success: true, filePath: res.req.file.location })
})




module.exports = router;