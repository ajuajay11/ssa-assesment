const defaultForm = {
  // Step 1
  name: "",
  nationalId: "",
  dob: "",
  gender: "",
  address: "",
  city: "",
  country: "",
  phone: "",
  email: "",

  // Step 2
  maritalStatus: "",
  dependents: "",
  employmentStatus: "",
  monthlyIncome: "",
  housingStatus: "",

  // Step 3
  currentFinancialSituation: "",
  employmentCircumstances: "",
  reasonForApplying: "",
};

const Steps = [
  {
    id: 1,
    label: "Personal Information",
    name: "PersonalInformation",
    fields: [
      { name: "name", label: "Full Name", type: "text", required: true },
      {
        name: "nationalId",
        label: "National ID",
        type: "text",
        required: true,
      },
      { name: "dob", label: "Date of Birth", type: "date", required: true },
      {
        name: "gender",
        label: "Gender",
        type: "select",
        required: true,
        options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "other", label: "Other" },
        ],
      },
      { name: "address", label: "Address", type: "text", required: true },
      { name: "city", label: "City", type: "text", required: true },
      { name: "country", label: "Country", type: "text", required: true },
      { name: "phone", label: "Phone Number", type: "tel", required: true },
      { name: "email", label: "Email", type: "email", required: true },
    ],
  },
  {
    id: 2,
    label: "Financial Information",
    name: "FinancialInformation",
    fields: [
      {
        name: "maritalStatus",
        label: "Marital Status",
        type: "select",
        required: true,
        options: [
          { value: "single", label: "Single" },
          { value: "married", label: "Married" },
          { value: "divorced", label: "Divorced" },
          { value: "widowed", label: "Widowed" },
        ],
      },
      {
        name: "dependents",
        label: "Number of Dependents",
        type: "number",
        required: true,
      },
      {
        name: "employmentStatus",
        label: "Employment Status",
        type: "select",
        required: true,
        options: [
          { value: "employed", label: "Employed" },
          { value: "self-employed", label: "Self-Employed" },
          { value: "unemployed", label: "Unemployed" },
          { value: "retired", label: "Retired" },
        ],
      },
      {
        name: "monthlyIncome",
        label: "Monthly Income",
        type: "number",
        required: true,
      },
      {
        name: "housingStatus",
        label: "Housing Status",
        type: "select",
        required: true,
        options: [
          { value: "own", label: "Own" },
          { value: "rent", label: "Rent" },
          { value: "living-with-family", label: "Living with Family" },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Additional Information",
    name: "AdditionalInformation",
    fields: [
      {
        name: "currentFinancialSituation",
        label: "Current Financial Situation",
        type: "textarea-ai",
        required: true,
      },
      {
        name: "employmentCircumstances",
        label: "Employment Circumstances",
        type: "textarea-ai",
        required: true,
      },
      {
        name: "reasonForApplying",
        label: "Reason for Applying",
        type: "textarea-ai",
        required: true,
      },
    ],
  },
];

export { Steps, defaultForm };