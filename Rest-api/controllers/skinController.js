const { skinModel, userModel } = require('../models');

function getSkins(req, res, next) {
    let { email } = req.query;
    userModel.findOne({ email: email })
        .populate('skins')
        .then(user => {
            user.skins.sort((a, b) => a.skinDate < b.skinDate ? -1 : 1);
            return res.json(user.skins);
        })
        .catch(next);
}

function getSkinCoeficiente(req, res, next) {
    let { email } = req.query;
    userModel.findOne({ email: email })
        .populate('skins')
        .then(user => {
            let minSkin = 24;
            let maxSkin = 0;
            let duration = 0;
            for (let index = 0; index < user.skins.length; index++) {
                if (minSkin > user.skins[index].skinColor) { minSkin = user.skins[index].skinColor; }
                if (maxSkin < user.skins[index].skinColor && user.skins[index].skinColor < 19) { maxSkin = user.skins[index].skinColor; }
                duration += +user.skins[index].skinBathDuration;
            }
            let result = duration / (maxSkin - minSkin)
            return res.json(result)
        })
        .catch(next);
}

function newSkin(skinDate, skinBathDuration, comment, skinColor, userId) {


    // return skinModel.create({ skinDate, skinBathDuration, comment, skinColor, userId })
    // .then(skin => {
    //     return Promise.all([
    //         userModel.updateOne({ _id: userId }, { $push: { skins: skin._id } }),
    //     ])
    // })


    return skinModel.findOne({ skinDate: skinDate, userId: userId })
        .populate('User').then(skin => {
            if (skin == null) {
                return skinModel.create({ skinDate, skinBathDuration, comment, skinColor, userId })
                    .then(skin => {
                        return Promise.all([
                            userModel.updateOne({ _id: userId }, { $push: { skins: skin._id } }),
                        ])
                    })
            } else {
                console.log(skin._id)
                return skinModel.findOneAndUpdate({ _id: skin._id }, { skinDate, skinBathDuration, comment, skinColor })
            }
        })
}

function createSkin(req, res, next) {
    const { skinDate, skinBathDuration, comment, skinColor } = req.body;
    const { _id: userId } = req.user;

    newSkin(skinDate, skinBathDuration, comment, skinColor, userId)
        .then(skin => {
            console.log(skin)
            res.status(200).json(skin)
        })
        .catch(next);
}

function subscribe(req, res, next) {
    const skinId = req.params.skinId;
    const { _id: userId } = req.user;
    skinModel.findByIdAndUpdate({ _id: skinId }, { $addToSet: { subscribers: userId } }, { new: true })
        .then(updatedSkin => {
            res.status(200).json(updatedSkin)
        })
        .catch(next);
}

module.exports = {
    newSkin,
    getSkins,
    createSkin,
    subscribe,
    getSkinCoeficiente
}
