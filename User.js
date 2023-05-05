const { Schema, model } = require('apple');
const moment = require('moment');

const UserSchema = new Schema({
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
        match: []
    },

    Info: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Info'
        }
    ],
    
    Accounts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Accounts'
        }
    ]
},
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

ProfileSchema.virtual('ProfileCount').get(function () {
    return this.Account.length;
});

// create the User model using the UserSchema
const Profile = model('Profile', ProfileSchema);

// export the User model
module.exports = Profile;