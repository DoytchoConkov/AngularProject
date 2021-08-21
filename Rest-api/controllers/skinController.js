const { skinModel, userModel } = require('../models');




function getSkins(req, res, next) {
    let { email, limit } = req.query;
    // skinModel.find()
        userModel.findOne({ email: email })
        .populate('userId')
        .then(user => res.json(user.skins))
        // .then(skins => res.json(skins))
        .catch(next);
}

function getSkinCoeficiente(req, res, next) {
    skinModel.find()
        .populate('userId')
        .then(skins => {
            let minSkin = 24;
            let maxSkin = 0;
            let duration = 0;
            for (let index = 0; index < skins.length; index++) {
                if (minSkin > skins[index].skinColor) { minSkin = skins[index].skinColor; }
                if (maxSkin < skins[index].skinColor) { maxSkin = skins[index].skinColor; }
                duration += +skins[index].skinBathDuration;
            }
            let result = duration / (maxSkin - minSkin)
            return res.json(result)
        })
        .catch(next);
}

function newSkin(skinDate, skinBathDuration, comment, skinColor, userId) {
    return skinModel.create({ skinDate, skinBathDuration, comment, skinColor, userId })
        .then(skin => {
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { skins: skin._id } }),
            ])
        })
}

function createSkin(req, res, next) {
    const { skinDate, skinBathDuration, comment, skinColor } = req.body;
    const { _id: userId } = req.user;

    newSkin(skinDate, skinBathDuration, comment, skinColor, userId)
    .then(skin => res.status(200).json(skin))
    .catch(next);

    // skinModel.create({ skinDate, skinBathDuration, comment, skinColor, userId })
    //     .then(skin => res.status(200).json(skin)
    //     )
    //     .catch(next);
}

function subscribe(req, res, next) {
    const skinId = req.params.skinId;
    const { _id: userId } = req.user;
    skinModel.findByIdAndUpdate({ _id: skinId }, { $addToSet: { subscribers: userId } }, { new: true })
        .then(updatedTheme => {
            res.status(200).json(updatedTheme)
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
