const mongoose = require("mongoose");

const healthCardSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    health_id: {
      type: String,
      required: true,
      unique: true,
    },
    past_medical_records: [
      {
        condition: String,
        description: String,
        diagnosed_date: Date,
        treatment: String,
      },
    ],
    vaccines: [
      {
        vaccine_name: String,
        date_administered: Date,
        next_due_date: Date,
      },
    ],
    tests_needed: [
      {
        test_name: String,
        reason: String,
        due_date: Date,
        completed: Boolean,
      },
    ],
    emergency_contact: {
      contact_name: { type: String, required: true },
      phone_number: { type: String, required: true },
      relationship: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("HealthCard", healthCardSchema);
