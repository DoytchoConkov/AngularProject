const { skin, skinModel } = require('../models');

function getSkins(req, res, next) {
    skinModel.find()
        .populate('userId')
        .then(skins => res.json(skins))
        .catch(next);
}

function createSkin(req, res, next) {
    const { skinDate, skinBathDuration, comment, skinColor } = req.body;
    const { _id: userId } = req.user;
    skinModel.create({ skinDate, skinBathDuration, comment, skinColor })
    .then(skin =>  res.status(200).json(skin)
    )
        .catch(next);
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
    getSkins,
    createSkin,
    subscribe,
}
