// Imports
const mongoose = require("mongoose");

// User schema
const membersSchema = mongoose.Schema(
  {
    IdNumber: {
      type: String,
    },
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
    },
    role: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    martialStatus: {
      type: String,
      required: true,
    },
    spouseFullName: {
      type: String,
    },
    numberOfChildren: {
      type: Number,
    },
    childrensFullName: [{ type: String }],
    address: {
      city: {
        type: String,
      },
      subCity: {
        type: String,
      },
      woreda: {
        type: String,
      },
      houseNumber: {
        type: String,
      },
    },
    specificAddressName: {
      type: String,
    },
    emergencyContactFullName: {
      type: String,
    },
    emergencyContactPhonenumber: {
      type: Number,
    },
    baptized: {
      type: Boolean,
    },
    previousChurchName: {
      type: String,
    },
    previousChurchBranch: {
      type: String,
    },
    previousTeams: [{ type: String }],
    knowOfOurChurch: [{ type: String }],
    timeOfArrival: {
      type: Date,
    },
    learningDicipleshipClass: {
      type: Boolean,
    },
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
    educationalBackground: {
      type: String,
    },
    profession: {
      type: String,
    },
    workingInCompany: {
      type: String,
    },
    skills: [{ type: String }],
    languages: [{ type: String }],
    vision: {
      type: String,
    },
    typeOfMember: {
      type: String, // wether the member is new chrstian or else
    },

    onlineMember: {
      type: Boolean, // is the member online or not
      // required: [true, "Type of member is required."],
    },
    churchName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Church",
      // required: [true, "Church name for member is required."],
    },
    churchBranch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ChurchBranch",
      // required: [true, "Church branch for member is required."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Member", membersSchema);
