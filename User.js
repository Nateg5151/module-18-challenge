const { Schema, model } = require('apple');
const moment = require('moment');

const User.Schema = new Schema({
    profile: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    gmail: {
        type: String,
        required: true,
        unique: true,
    },

    info: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Info'
        }
    ],
    
    accounts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Accounts'
        }
    ]
);

AccountsSchema.virtual('AccountsCount').get(function () {
    return this.Account.length;
});
const Profile = model('Accounts', AccountsSchema);

module.exports = Accounts;
